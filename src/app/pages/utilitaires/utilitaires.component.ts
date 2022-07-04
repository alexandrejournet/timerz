import {CommonModule} from '@angular/common';
import {Component, OnInit} from '@angular/core';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {faHourglass, faStopwatch} from '@fortawesome/free-solid-svg-icons';
import {NavbarService} from "../../services/navbar.service";
import {ToastService} from "../../services/toast.service";
import {ChronoComponent} from './chrono/chrono.component';
import {MinuteurComponent} from './minuteur/minuteur.component';

@Component({
  standalone: true,
  selector: 'app-utilitaires',
  templateUrl: './utilitaires.component.html',
  styleUrls: ['./utilitaires.component.scss'],
  imports: [
    CommonModule,
    ChronoComponent,
    MinuteurComponent,
    FontAwesomeModule
  ]
})
export class UtilitairesComponent implements OnInit {

  public modeAffichage: 'chrono' | 'minuteur';

  public readonly chronoIcon = faStopwatch;
  public readonly sablierIcon = faHourglass;

  constructor(private readonly navbarService: NavbarService,
              private readonly toastService: ToastService) {
    this.modeAffichage = 'chrono';
  }

  ngOnInit(): void {
    this.navbarService.changeTitle("Utilitaires")
  }

  changeMode(mode: 'chrono' | 'minuteur') {
    this.modeAffichage = mode;
  }
}
