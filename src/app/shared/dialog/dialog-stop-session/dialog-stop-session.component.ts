import {Component} from '@angular/core';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {CommonModule} from "@angular/common";

@Component({
  standalone: true,
  selector: 'app-dialog-stop-session',
  templateUrl: './dialog-stop-session.component.html',
  styleUrls: ['./dialog-stop-session.component.scss'],
  imports: [
    CommonModule
  ]
})
export class DialogStopSessionComponent {

  constructor(public readonly activeModal: NgbActiveModal) {
  }

  stopSession() {
    this.activeModal.close('stop');
  }

  keepGoingOn() {
    this.activeModal.close('keep');
  }
}
