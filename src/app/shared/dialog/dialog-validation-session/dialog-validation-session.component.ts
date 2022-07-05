import {Component} from '@angular/core';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {Session} from "../../../models/session.model";

@Component({
  standalone: true,
  selector: 'app-dialog-validation-session',
  templateUrl: './dialog-validation-session.component.html',
  styleUrls: ['./dialog-validation-session.component.scss']
})
export class DialogValidationSessionComponent {

  session?: Session;

  constructor(public readonly activeModal: NgbActiveModal) {
  }

  editSession() {
    this.activeModal.close('edit')
  }

  launchSession() {
    this.activeModal.close('launch')
  }
}
