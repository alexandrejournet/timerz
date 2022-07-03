import {Component, OnInit} from '@angular/core';
import {TimerService} from "../../services/timer.service";
import {Destroyed} from "../../shared/injectable/destroyed.injectable";
import {Timer} from "../../models/timer.model";
import {CommonModule} from "@angular/common";
import {TimePipe} from "../../shared/pipes/time.pipe";
import {Router} from "@angular/router";

@Component({
  standalone: true,
  selector: 'app-recap',
  templateUrl: './recap.component.html',
  styleUrls: ['./recap.component.scss'],
  imports: [
    TimePipe,
    CommonModule
  ]
})
export class RecapComponent extends Destroyed implements OnInit {

  public timers?: Timer[];

  constructor(private readonly timerService: TimerService,
              private readonly router: Router) {
    super();
    this.timers = [];
  }

  get totalTime(): number {
    if (this.timers && this.timers.length > 0) {
      return this.timers.map(value => value.time!).reduce((a, b) => a + b, 0);
    } else {
      return 0;
    }
  }

  ngOnInit(): void {
    this.timers = this.timerService.session.timers;
    this.timerService.resetTimer();
  }

  async goHome() {
    await this.router.navigate(['']);
  }

}
