import {Component, OnInit} from '@angular/core';
import {faAngleLeft} from "@fortawesome/free-solid-svg-icons";
import {Router} from "@angular/router";
import {NavbarService} from "../../../services/navbar.service";
import {Destroyed} from "../../injectable/destroyed.injectable";
import {takeUntil} from "rxjs";
import {TimerService} from "../../../services/timer.service";
import {animate, state, style, transition, trigger} from "@angular/animations";
import {CommonModule, Location} from "@angular/common";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";

@Component({
  standalone: true,
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  animations: [
    trigger('enter', [
      state('in', style({opacity: 100})),
      transition(':enter', [
        style({opacity: 100}),
        animate('300ms')
      ]),
      transition(':leave', [
        animate('300ms', style({opacity: 0}))
      ]),
    ])
  ]
})
export class NavbarComponent extends Destroyed implements OnInit {

  public readonly caretLeft = faAngleLeft;
  public title;

  constructor(private readonly router: Router,
              private readonly location: Location,
              private readonly navbarService: NavbarService,
              private readonly timerService: TimerService) {
    super();
    this.title = "";
    this.navbarService.navbarObs.pipe(takeUntil(this.destroyed)).subscribe((title: string) => {
      this.title = title;
    });
  }

  get showBtn() {
    return this.timerService.getSession().timers!.length > 0;
  }

  async goBack() {
    this.timerService.resetTimer();
    this.location.back();
  }

  async goNext() {
    await this.router.navigate(['session']);
  }

  ngOnInit(): void {


  }
}
