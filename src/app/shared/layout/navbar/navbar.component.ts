import { Component, OnInit } from '@angular/core';
import {faAngleLeft} from "@fortawesome/free-solid-svg-icons";
import {Router} from "@angular/router";
import {NavbarService} from "../../../services/navbar.service";
import {Destroyed} from "../../injectable/destroyed.injectable";
import {takeUntil} from "rxjs";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent extends Destroyed implements OnInit {

  public readonly caretLeft = faAngleLeft;
  public title = "";

  constructor(private readonly router: Router,
              private readonly navbarService: NavbarService) {
    super();
  }

  ngOnInit(): void {

    this.navbarService.navbarObs.pipe(takeUntil(this.destroyed)).subscribe((title: string) => {
      this.title = title;
    })
  }

  async goHome() {
    await this.router.navigate([''])
  }

}
