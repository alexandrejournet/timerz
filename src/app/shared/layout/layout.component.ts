import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, RouterModule} from "@angular/router";
import {CommonModule} from "@angular/common";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {NavbarComponent} from "./navbar/navbar.component";
import {ToolbarComponent} from "./toolbar/toolbar.component";
import {Destroyed} from "../injectable/destroyed.injectable";
import {takeUntil} from "rxjs";

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    FontAwesomeModule,
    NavbarComponent,
    ToolbarComponent
  ]
})
export class LayoutComponent extends Destroyed implements OnInit {

  public showToolbar = true;
  public showNavbar = true;

  constructor(private readonly activatedRoute: ActivatedRoute) {
    super();
  }

  ngOnInit(): void {
    this.activatedRoute.data
      .pipe(takeUntil(this.destroyed))
      .subscribe((data: any) => {
        if (data.showToolbar !== undefined) {
          this.showToolbar = data.showToolbar
        }

        if (data.showNavbar !== undefined) {
          this.showNavbar = data.showNavbar;
        }
      });
  }

}
