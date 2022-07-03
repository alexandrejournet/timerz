import {Injectable} from '@angular/core';
import PouchDB from 'pouchdb';
import {Session} from "../models/session.model";
import {Timer} from "../models/timer.model";
import {SessionTimer} from "../models/session-timer.model";

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  public db: any;

  // TODO: CREER VIEWS POUR CHAQUE APPEL

  sessionViews = {
    _id: '_design/session',
    views: {
      all: {
        map: "function (doc) {if (doc.type === 'SESSION') {emit(doc);}}"
      }
    }
  };

  timerViews = {
    _id: '_design/timer',
    views: {
      all: {
        map: "function (doc) {if (doc.type === 'TIMER') {emit(doc);}}"
      }
    }
  };

  sessionTimerViews = {
    _id: '_design/sessiontimer',
    views: {
      all: {
        map: "function (doc) {if (doc.type === 'SESSION-TIMER') {emit(doc);}}"
      },
      by_session_id: {
        map: "function (doc) { if (doc.type === 'SESSION-TIMER') {emit(doc.sessionId);} }"
      }
    }
  };


  constructor() {
    this.db = new PouchDB("TIMERZ");
    this.db.put(this.sessionViews).then(function () {
    }).catch(function () {
    });
    this.db.put(this.timerViews).then(function () {
    }).catch(function () {
    });
    this.db.put(this.sessionTimerViews).then(function () {
    }).catch(function () {
    });
  }


  async getSessions(): Promise<Session[]> {
    const alldocsres = await this.db.query('session/all', {
      include_docs: true
    });
    return alldocsres.rows.map((item: { doc: any; }) => item.doc) as Session[];
  }

  async getTimers(sessionId: string) {
    const sessionTimers = await this.db.query('sessiontimer/by_session_id', {
      key: sessionId,
      include_docs: true
    });
    const linkedSessionTimers = sessionTimers.rows.map((item: { doc: any; }) => item.doc) as SessionTimer[];

    const timers = [];

    for (const value of linkedSessionTimers) {
      timers.push(await this.db.get(value.timerId))
    }
    return timers;

  }

  async addSession(session: Session) {
    const sessionToAdd = new Session();
    sessionToAdd.name = session.name;
    sessionToAdd.totalTime = session.timers!.map(item => item.time).reduce((a, b) => a! + b!);
    const sessionAdded = await this.db.post(sessionToAdd);

    const timersAddedList: any[] = [];
    for (const timer of session.timers!) {
      const timerAdded = await this.addTimer(timer);
      timersAddedList.push(timerAdded);
    }

    const sessionTimer = new SessionTimer();
    sessionTimer.sessionId = sessionAdded.id;

    for (const timer of timersAddedList) {
      sessionTimer.timerId = timer.id;
      await this.addSessionTimer(sessionTimer);
    }
  }

  async addTimer(timer: Timer): Promise<Timer> {
    return await this.db.post(timer);
  }

  async addSessionTimer(sessionTimer: SessionTimer) {
    await this.db.post(sessionTimer);
  }

  // TODO: update session
  updateSession() {

  }

  // TODO: update timer
  updateTimer() {

  }

  // TODO: update session_timer
  updateSessionTimer() {

  }

  // TODO: delete session
  deleteSession() {

  }

  // TODO: delete timer
  deleteTimer() {

  }

  // TODO: delete session_timer
  deleteSessionTimer() {

  }
}
