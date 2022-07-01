import { Component, OnInit } from '@angular/core';
import {faAngleLeft} from "@fortawesome/free-solid-svg-icons";
import {Router} from "@angular/router";
import {NavbarService} from "../../../services/navbar.service";
import {Destroyed} from "../../injectable/destroyed.injectable";
import {takeUntil} from "rxjs";
import {TimerService} from "../../../services/timer.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent extends Destroyed implements OnInit {

  public readonly caretLeft = faAngleLeft;
  public title = "";

  public isNextShow = false;

  constructor(private readonly router: Router,
              private readonly navbarService: NavbarService,
              private readonly timerService: TimerService) {
    super();
  }

  ngOnInit(): void {

    this.navbarService.navbarObs.pipe(takeUntil(this.destroyed)).subscribe((title: string) => {
      this.title = title;
    });

    this.navbarService.showNextObs.pipe(takeUntil(this.destroyed)).subscribe(() => {
      this.isNextShow = !this.isNextShow;
    })
  }

  async goHome() {
    this.timerService.resetTimer();
    await this.router.navigate(['']);
  }

}
