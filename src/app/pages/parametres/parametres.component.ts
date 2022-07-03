import {Component, OnInit} from '@angular/core';
import {NavbarService} from "../../services/navbar.service";

import packageJson from '../../../../package.json';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {faUserAstronaut} from "@fortawesome/free-solid-svg-icons";

@Component({
  standalone: true,
  selector: 'app-parametres',
  templateUrl: './parametres.component.html',
  styleUrls: ['./parametres.component.scss'],
  imports: [
    FontAwesomeModule
  ]
})
export class ParametresComponent implements OnInit {

  public version: string = packageJson.version;
  public profilIcon = faUserAstronaut;

  constructor(private readonly navbarService: NavbarService) {
  }

  ngOnInit(): void {
    this.navbarService.changeTitle("Paramètres");
  }

}
