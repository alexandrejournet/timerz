import { Component, OnInit } from '@angular/core';
import {LayoutModule} from "./layout.module";
import {RouterModule} from "@angular/router";

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  standalone: true,
  imports: [
    LayoutModule,
    RouterModule
  ]
})
export class LayoutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
