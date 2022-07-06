import {CommonModule} from '@angular/common';
import {Component, OnDestroy, OnInit} from '@angular/core';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {faEraser, faPauseCircle, faPlayCircle, faStop} from "@fortawesome/free-solid-svg-icons";
import {CircleProgressComponent} from 'src/app/components/circle-progress/circle-progress.component';
import {MinuteurPipe} from "../../../shared/pipes/minuteur.pipe";
import {TimePipe} from "../../../shared/pipes/time.pipe";
import {Timer} from "../../../models/timer.model";
import {NavigationEnd, NavigationStart, Router} from "@angular/router";

@Component({
  standalone: true,
  selector: 'app-minuteur',
  templateUrl: './minuteur.component.html',
  styleUrls: ['./minuteur.component.scss'],
  imports: [
    CommonModule,
    FontAwesomeModule,
    MinuteurPipe,
    TimePipe,
    CircleProgressComponent
  ]
})
export class MinuteurComponent implements OnInit, OnDestroy {
  public value: string;

  public readonly playBtn = faPlayCircle;
  public readonly eraser = faEraser;
  public readonly stopBtn = faStop;

  public isStarted = false;
  public isPlaying = false;
  public currentTime: number;
  public currentTimer: Timer;
  private currentInterval: any;
  private vibrateInterval: any;
  private isVibrating = false;

  constructor(private readonly router: Router) {
    this.value = '';
    this.currentTime = 0;
    this.currentTimer = new Timer();
  }

  get showPlay() {
    return this.value.length > 0;
  }

  ngOnInit() {
    this.router.events.subscribe(
      (event) => {
        if (event instanceof NavigationStart) {
          // Handle Navigation Start
        }

        if (event instanceof NavigationEnd) {
          this.resetMinuteur();
        }
      });
  }

  add(number: number) {
    if (this.value.length < 6) {
      this.value += number;
    }
  }

  remove() {
    if (this.value !== '' && this.value.length > 1) {
      this.value = this.value.slice(0, -1);
    } else if (this.value.length === 1) {
      this.value = '';
    }
  }

  multiplyHundred() {
    if (this.value !== '') {

      if (this.value.length < 5) {
        this.value += '00';
      } else if (this.value.length === 5) {
        this.value += '0';
      }
    }
  }

  multiplyTen() {
    if (this.value !== '') {
      if (this.value.length < 5) {
        this.value += '0';
      }
    }
  }

  showMinuteur() {
    this.currentTime = parseInt(this.value)
    this.currentTimer.time = this.currentTime;
    this.playPauseCountdown();
  }

  playPauseBtn() {
    if (this.isPlaying) {
      return faPauseCircle;
    } else {
      return faPlayCircle
    }
  }

  playPauseCountdown() {
    if (!this.isVibrating) {
      this.isStarted = true;
      if (this.isPlaying) {
        clearInterval(this.currentInterval);
      } else {
        this.currentInterval = setInterval(() => {
          this.currentTime -= 0.05;
          if (this.currentTime < 0 && !this.isVibrating) {
            this.isVibrating = true;
            this.vibrateInterval = setInterval(() => {
              navigator.vibrate(200);
            }, 1000);
          }
        }, 50)
      }
      this.isPlaying = !this.isPlaying;
    } else {
      this.resetMinuteur();
    }

  }

  resetMinuteur() {
    clearInterval(this.currentInterval);
    clearInterval(this.vibrateInterval);
    this.isStarted = false;
    this.isPlaying = false;
    this.isVibrating = false;
  }

  ngOnDestroy(): void {
    this.resetMinuteur();
  }
}
