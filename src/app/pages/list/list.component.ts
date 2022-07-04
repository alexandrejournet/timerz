import {Component, OnInit} from '@angular/core';
import {NavbarService} from "../../services/navbar.service";
import {DatabaseService} from "../../services/database.service";
import {Session} from "../../models/session.model";
import {CommonModule} from "@angular/common";
import {TimePipe} from 'src/app/shared/pipes/time.pipe';

@Component({
  standalone: true,
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  imports: [
    CommonModule,
    TimePipe
  ]
})
export class ListComponent implements OnInit {
  public sessions: Session[];

  constructor(private readonly navbarService: NavbarService,
              private readonly databaseService: DatabaseService) {
    this.sessions = [];
  }

  async ngOnInit() {
    this.navbarService.changeTitle("Mes sessions");
    this.sessions = await this.databaseService.getSessions();

    /*this.sessions = [...this.sessions, ...this.sessions];
    this.sessions = [...this.sessions, ...this.sessions];
    this.sessions = [...this.sessions, ...this.sessions];
    this.sessions = [...this.sessions, ...this.sessions];*/

    //await this.databaseService.getTimers("8a442182-a526-4c69-bd9f-3e734dc5538a");
  }

  selectSession(session: Session) {
    console.log(session);
  }

}
