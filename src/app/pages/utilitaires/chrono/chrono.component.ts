import {Component, OnInit} from '@angular/core';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {TimePipe} from "../../../shared/pipes/time.pipe";
import {faPauseCircle, faPlayCircle, faStop} from "@fortawesome/free-solid-svg-icons";

@Component({
  standalone: true,
  selector: 'app-chrono',
  templateUrl: './chrono.component.html',
  styleUrls: ['./chrono.component.scss'],
  imports: [
    TimePipe,
    FontAwesomeModule
  ]
})
export class ChronoComponent implements OnInit {
  totalTime: number = 0;

  public readonly stopBtn = faStop;

  public isStarted = false;
  public isPlaying = false;
  public isOver = false;

  constructor() {
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
}
