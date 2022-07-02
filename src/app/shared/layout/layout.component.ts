import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, RouterModule} from "@angular/router";
import {CommonModule} from "@angular/common";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {NavbarComponent} from "./navbar/navbar.component";
import {ToolbarComponent} from "./toolbar/toolbar.component";

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
export class LayoutComponent implements OnInit {

  public showToolbar = true;

  constructor(private readonly activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe((data: any) => {
      this.showToolbar = data.showToolbar as boolean;
    });
  }

}
