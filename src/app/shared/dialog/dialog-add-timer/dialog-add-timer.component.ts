import {Component, OnInit} from '@angular/core';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {Timer} from "../../../models/timer.model";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";

@Component({
  standalone: true,
  selector: 'app-dialog-add-timer',
  templateUrl: './dialog-add-timer.component.html',
  styleUrls: ['./dialog-add-timer.component.scss'],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class DialogAddTimerComponent implements OnInit {

  public readonly timer = new Timer();

  constructor(public readonly activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }

  addTimer() {
    if (this.timer.time) {
      this.activeModal.close(this.timer);
    } else {
      this.activeModal.close();
    }
  }
}
