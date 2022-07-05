import {Component, OnInit} from '@angular/core';
import {NavbarService} from "../../services/navbar.service";
import {DatabaseService} from "../../services/database.service";
import {Session} from "../../models/session.model";
import {CommonModule} from "@angular/common";
import {TimePipe} from 'src/app/shared/pipes/time.pipe';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {
  DialogValidationSessionComponent
} from 'src/app/shared/dialog/dialog-validation-session/dialog-validation-session.component';
import {TimerService} from 'src/app/services/timer.service';
import {Router} from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  imports: [
    CommonModule,
    TimePipe,
    DialogValidationSessionComponent
  ]
})
export class ListComponent implements OnInit {
  public sessions: Session[];

  constructor(private readonly navbarService: NavbarService,
              private readonly databaseService: DatabaseService,
              private readonly modalService: NgbModal,
              private readonly timerService: TimerService,
              private readonly router: Router) {
    this.sessions = [];
  }

  async ngOnInit() {
    this.navbarService.changeTitle("Mes sessions");
    this.sessions = await this.databaseService.getSessions();
  }

  selectSession(session: Session) {
    const modal = this.modalService.open(DialogValidationSessionComponent, {centered: true});

    modal.result.then(async (mode: 'edit' | 'launch') => {
      if (mode) {
        session.timers = await this.databaseService.getTimers(session._id!)
        this.timerService.setSession(session);
        if (mode === 'edit') {
          await this.router.navigate(['create'])
        } else if (mode === 'launch') {
          await this.router.navigate(['session'])
        }
      }
    })
  }

}
