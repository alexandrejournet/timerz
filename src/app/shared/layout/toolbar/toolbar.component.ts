import {Component, OnInit} from '@angular/core';
import {faFloppyDisk, faHome, faPlus} from "@fortawesome/free-solid-svg-icons";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {DialogAddTimerComponent} from "../../dialog/dialog-add-timer/dialog-add-timer.component";
import {Timer} from "../../../models/timer.model";
import {TimerService} from "../../../services/timer.service";
import {CommonModule} from "@angular/common";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";

@Component({
  standalone: true,
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
  imports: [
    CommonModule,
    FontAwesomeModule
  ]
})
export class ToolbarComponent implements OnInit {

  public readonly faAdd = faPlus;
  public readonly faHome = faHome;
  public readonly faSettings = faFloppyDisk;

  constructor(private readonly modalService: NgbModal,
              private readonly timerService: TimerService) { }

  ngOnInit(): void {
  }

  openModal() {
    const modal = this.modalService.open(DialogAddTimerComponent, { centered: true });

    modal.result.then((timer: Timer) => {
      if(timer) {
        this.timerService.addTimer(timer);
      }
    })
  }

}
