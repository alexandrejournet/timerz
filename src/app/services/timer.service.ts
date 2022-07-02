import {Injectable} from '@angular/core';
import {Timer} from "../models/timer.model";

@Injectable({
  providedIn: 'root'
})
export class TimerService {
  public timerList: Timer[];

  constructor() {
    this.timerList = [];
  }

  resetTimer() {
    this.timerList = [];
  }

  addTimer(timer: Timer) {
    this.timerList.push(timer);
  }

  duplicateTimer(index: number) {
    this.timerList.splice(index + 1, 0, this.timerList[index]);
  }

  removeTimer(index: number) {
    this.timerList.splice(index, 1);
  }
}
