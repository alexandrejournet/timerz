import {CommonModule} from '@angular/common';
import {Component, OnInit} from '@angular/core';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {faPlayCircle} from "@fortawesome/free-solid-svg-icons";

@Component({
  standalone: true,
  selector: 'app-minuteur',
  templateUrl: './minuteur.component.html',
  styleUrls: ['./minuteur.component.scss'],
  imports: [
    CommonModule,
    FontAwesomeModule
  ]
})
export class MinuteurComponent implements OnInit {

  public readonly playBtn = faPlayCircle;

  constructor() {
  }

  ngOnInit(): void {
  }

}
