import {Component, OnInit} from '@angular/core';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {TimePipe} from "../../../shared/pipes/time.pipe";
import {faPauseCircle, faPlayCircle, faStop} from "@fortawesome/free-solid-svg-icons";
import {MillisPipe} from "../../../shared/pipes/millis.pipe";
import {CommonModule} from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-chrono',
  templateUrl: './chrono.component.html',
  styleUrls: ['./chrono.component.scss'],
  imports: [
    CommonModule,
    TimePipe,
    MillisPipe,
    FontAwesomeModule
  ]
})
export class ChronoComponent implements OnInit {
  public readonly stopBtn = faStop;

  public isStarted = false;
  public isPlaying = false;
  public isOver = false;
  public currentTime: number;
  private currentInterval?: any;

  constructor() {
    this.currentTime = 0;
  }

  ngOnInit(): void {
  }

  playPauseBtn() {
    if (this.isPlaying) {
      return faPauseCircle;
    } else {
      return faPlayCircle
    }
  }

  playPauseCountdown() {
    this.isStarted = true;
    if (this.isPlaying) {
      clearInterval(this.currentInterval);
    } else {
      this.currentInterval = setInterval(() => {
        this.currentTime += 0.01;
      }, 10)
    }
    this.isPlaying = !this.isPlaying;
  }

  resetChrono() {
    this.isPlaying = false;
    this.isStarted = false;
    this.currentTime = 0;
    clearInterval(this.currentInterval);
  }
}
