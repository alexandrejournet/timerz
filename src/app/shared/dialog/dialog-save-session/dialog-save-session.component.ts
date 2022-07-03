import {Component} from '@angular/core';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {Session} from "../../../models/session.model";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {DatabaseService} from "../../../services/database.service";
import {ToastService} from "../../../services/toast.service";

@Component({
  standalone: true,
  selector: 'app-dialog-save-session',
  templateUrl: './dialog-save-session.component.html',
  styleUrls: ['./dialog-save-session.component.scss'],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class DialogSaveSessionComponent {

  public readonly session = new Session();

  constructor(public readonly activeModal: NgbActiveModal,
              private readonly databaseService: DatabaseService,
              private readonly toastService: ToastService,
  ) {
  }

  async addTimer() {
    if (this.session.name) {
      await this.databaseService.addSession(this.session);
      this.activeModal.close();
    } else {
      this.toastService.showError("Erreur", "Le nom est manquant");
    }
  }
}
