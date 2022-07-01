import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable, Subject} from "rxjs";
import {Timer} from "../models/timer.model";

@Injectable({
  providedIn: 'root'
})
export class TimerService {

  private readonly timerSubject: BehaviorSubject<Timer | undefined>;
  public readonly timerObs: Observable<Timer | undefined>;

  private readonly resetTimerSubject: Subject<void>;
  public readonly resetTimerObs: Observable<void>;

  private readonly timerToLaunchSubject: BehaviorSubject<Timer[] | undefined>;
  public readonly timerToLaunchObs: Observable<Timer[] | undefined>;

  constructor() {
    this.timerSubject = new BehaviorSubject<Timer | undefined>(undefined);
    this.timerObs = this.timerSubject.asObservable();

    this.resetTimerSubject = new Subject<void>();
    this.resetTimerObs = this.resetTimerSubject.asObservable();
  }

  changeTimer(timer: Timer) {
    this.timerSubject.next(timer);
  }

  resetTimer() {
    this.timerSubject.next(undefined);
    this.resetTimerSubject.next();
  }
}
