import { Component, OnInit } from '@angular/core';
import {faPlus, faHome, faGear} from "@fortawesome/free-solid-svg-icons";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {DialogAddTimerComponent} from "../../dialog/dialog-add-timer/dialog-add-timer.component";
import {Timer} from "../../../models/timer.model";
import {TimerService} from "../../../services/timer.service";

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  public readonly faAdd = faPlus;
  public readonly faHome = faHome;
  public readonly faSettings = faGear;

  constructor(private readonly modalService: NgbModal,
              private readonly timerService: TimerService) { }

  ngOnInit(): void {
  }

  openModal() {
    const modal = this.modalService.open(DialogAddTimerComponent, { centered: true });

    modal.result.then((timer: Timer) => {
      if(timer) {
        this.timerService.changeTimer(timer);
      }
    })
  }

}
