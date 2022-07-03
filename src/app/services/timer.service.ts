import {Injectable} from '@angular/core';
import {Session} from '../models/session.model';
import {Timer} from "../models/timer.model";

@Injectable({
  providedIn: 'root'
})
export class TimerService {
  public session: Session;

  constructor() {
    this.session = new Session();
    this.session.timers = [];
  }

  resetTimer() {
    this.session = new Session();
    this.session.timers = [];
  }

  addTimer(timer: Timer) {
    this.session.timers!.push(timer);
  }

  duplicateTimer(index: number) {
    this.session.timers!.splice(index + 1, 0, this.session.timers![index]);
  }

  removeTimer(index: number) {
    this.session.timers!.splice(index, 1);
  }
}
