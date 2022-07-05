import {Component, OnInit} from '@angular/core';
import {NavbarService} from "../../services/navbar.service";
import {Timer} from "../../models/timer.model";
import {CommonModule} from "@angular/common";
import {TimerService} from "../../services/timer.service";
import {Destroyed} from "../../shared/injectable/destroyed.injectable";
import {TimerComponent} from "../../components/timer/timer.component";
import {CdkDragDrop, DragDropModule, moveItemInArray} from "@angular/cdk/drag-drop";
import {DialogSaveSessionComponent} from "../../shared/dialog/dialog-save-session/dialog-save-session.component";
import {DialogAddTimerComponent} from "../../shared/dialog/dialog-add-timer/dialog-add-timer.component";

@Component({
  standalone: true,
  selector: 'app-creation',
  templateUrl: './creation.component.html',
  styleUrls: ['./creation.component.scss'],
  imports: [
    CommonModule,
    TimerComponent,
    DragDropModule,
    DialogAddTimerComponent,
    DialogSaveSessionComponent
  ]
})
export class CreationComponent extends Destroyed implements OnInit {

  constructor(private readonly navbarService: NavbarService,
              public readonly timerService: TimerService) {
    super();
  }

  dropped(event: CdkDragDrop<Timer[]>) {
    moveItemInArray(
      this.timerService.getSession().timers!,
      event.previousIndex,
      event.currentIndex
    );
  }

  ngOnInit(): void {
    this.navbarService.changeTitle("Création");
  }

  duplicateTimer(index: number) {
    this.timerService.duplicateTimer(index);
  }

  removeTimer(index: number) {
    this.timerService.removeTimer(index);
  }
}
