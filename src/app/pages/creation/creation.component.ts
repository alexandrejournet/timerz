import {Component, OnDestroy, OnInit} from '@angular/core';
import {NavbarService} from "../../services/navbar.service";
import {Timer} from "../../models/timer.model";
import {CommonModule} from "@angular/common";
import {TimerService} from "../../services/timer.service";
import {Destroyed} from "../../shared/injectable/destroyed.injectable";
import {Observable, of, takeUntil} from "rxjs";
import {TimerComponent} from "../../components/timer/timer.component";

@Component({
  standalone: true,
  selector: 'app-creation',
  templateUrl: './creation.component.html',
  styleUrls: ['./creation.component.scss'],
  imports: [
    CommonModule,
    TimerComponent
  ]
})
export class CreationComponent extends Destroyed implements OnInit {

  public timerList: Timer[];

  constructor(private readonly navbarService: NavbarService,
              private readonly timerService: TimerService) {
    super();
    this.timerList = [];
  }

  ngOnInit(): void {
    this.navbarService.changeTitle("Création");

    this.timerService.timerObs.pipe(takeUntil(this.destroyed)).subscribe(value => {
      if (value) {
        if (this.timerList.length === 0) {
          this.navbarService.showNext();
        }
        this.timerList.push(value);
        this.timerService.changeTimers(this.timerList);
      }
    });

    this.timerService.resetTimerObs.pipe(takeUntil(this.destroyed))
      .subscribe(() => {
        this.timerList = [];
    });
  }

  duplicateTimer(index: number) {
    this.timerList.splice(index + 1, 0, this.timerList[index]);
  }

  removeTimer(index: number) {
    this.timerList.splice(index, 1);
    this.timerService.changeTimers(this.timerList);
    if (this.timerList.length === 0) {
      this.navbarService.showNext();
    }
  }
}
