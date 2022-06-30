import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {Timer} from "../models/timer.model";

@Injectable({
  providedIn: 'root'
})
export class TimerService {

  private readonly timerSubject: BehaviorSubject<Timer | undefined>;
  public readonly timerObs: Observable<Timer | undefined>;

  constructor() {
    this.timerSubject = new BehaviorSubject<Timer | undefined>(undefined);
    this.timerObs = this.timerSubject.asObservable();
  }

  changeTimer(timer: Timer) {
    this.timerSubject.next(timer);
  }
}
