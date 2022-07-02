import {Component, OnInit} from '@angular/core';
import {TimerService} from "../../services/timer.service";
import {Destroyed} from "../../shared/injectable/destroyed.injectable";
import {Timer} from "../../models/timer.model";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {CommonModule} from "@angular/common";
import {faCheck, faPauseCircle, faPlayCircle, faStop} from "@fortawesome/free-solid-svg-icons";
import {CircleProgressComponent} from "../../components/circle-progress/circle-progress.component";
import {NavigationEnd, NavigationStart, Router} from "@angular/router";

@Component({
  standalone: true,
  selector: 'app-session',
  templateUrl: './session.component.html',
  styleUrls: ['./session.component.scss'],
  imports: [
    CommonModule,
    FontAwesomeModule,
    CircleProgressComponent
  ]
})
export class SessionComponent extends Destroyed implements OnInit {

  public timers?: Timer[];

  public currentTimer?: Timer;
  public currentTime?: number;
  public currentInterval: any;
  public currentIndex?: number;

  public readonly stopBtn = faStop;
  public readonly faTick = faCheck;

  public isStarted = false;
  public isPlaying = false;
  public isOver = false;


  constructor(private readonly timerService: TimerService,
              private readonly router: Router) {
    super();
    this.timers = [];
  }

  ngOnInit(): void {

    this.initTimers();

    this.router.events.subscribe(
      (event) => {
        if (event instanceof NavigationStart) {
          // Handle Navigation Start
        }

        if (event instanceof NavigationEnd) {
          this.timers = [];
          this.currentTimer = undefined;
          this.currentTime = undefined;
          this.currentIndex = undefined;
          clearInterval(this.currentInterval);
          this.currentInterval = undefined;
        }
      });
  }

  initTimers() {
    this.timers = this.timerService.timerList;
    this.currentTimer = this.timers[0];
    this.currentTime = this.currentTimer.time;
    this.currentIndex = 0;
  }

  playPauseCountdown() {
    this.isStarted = true;
    if (this.isPlaying) {
      clearInterval(this.currentInterval);
    } else {
      this.currentInterval = setInterval(() => {
        if (this.currentTime && this.currentTime > 0) {
          this.currentTime -= 0.05;
        } else {
          this.nextTimer();
        }
      }, 50)
    }
    this.isPlaying = !this.isPlaying;
  }

  nextTimer() {
    if(this.currentIndex !== undefined) {
      this.currentIndex++;
      if(this.timers && this.currentIndex < this.timers.length) {
        navigator.vibrate([100,50,100]);
        this.currentTimer = this.timers[this.currentIndex];
        this.currentTime = this.currentTimer.time;
      } else {
        navigator.vibrate([300,50,300]);
        clearInterval(this.currentInterval);
        this.isOver = true;
      }
    }
  }

  playPauseBtn() {
    if (this.isPlaying) {
      return faPauseCircle;
    } else {
      return faPlayCircle
    }
  }

  async goToRecap() {
    await this.router.navigate(['recap']);
  }
}
