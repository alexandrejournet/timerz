import {Component, OnInit} from '@angular/core';
import {faFloppyDisk, faHome, faPlus} from "@fortawesome/free-solid-svg-icons";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {DialogAddTimerComponent} from "../../dialog/dialog-add-timer/dialog-add-timer.component";
import {Timer} from "../../../models/timer.model";
import {TimerService} from "../../../services/timer.service";
import {CommonModule} from "@angular/common";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {DialogSaveSessionComponent} from '../../dialog/dialog-save-session/dialog-save-session.component';

@Component({
  standalone: true,
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
  imports: [
    CommonModule,
    FontAwesomeModule,
    DialogAddTimerComponent,
    DialogSaveSessionComponent
  ]
})
export class ToolbarComponent implements OnInit {

  public readonly faAdd = faPlus;
  public readonly faHome = faHome;
  public readonly faSave = faFloppyDisk;

  constructor(private readonly modalService: NgbModal,
              private readonly timerService: TimerService) { }

  ngOnInit(): void {
  }

  openModal() {
    const modal = this.modalService.open(DialogAddTimerComponent, {centered: true});

    modal.result.then((timer: Timer) => {
      if (timer) {
        this.timerService.addTimer(timer);
      }
    })
  }

  saveModal() {
    const modal = this.modalService.open(DialogSaveSessionComponent, {centered: true});
    modal.componentInstance.session = this.timerService.session;
  }

}
