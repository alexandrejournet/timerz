import {Component, OnInit} from '@angular/core';
import {NavbarService} from "../../services/navbar.service";

import packageJson from '../../../../package.json';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {faUserAstronaut} from "@fortawesome/free-solid-svg-icons";
import { ParametresItemComponent } from './parametres-item/parametres-item.component';
import { ParametresItem } from 'src/app/models/parametres-item.model';

@Component({
  standalone: true,
  selector: 'app-parametres',
  templateUrl: './parametres.component.html',
  styleUrls: ['./parametres.component.scss'],
  imports: [
    FontAwesomeModule,
    ParametresItemComponent
  ]
})
export class ParametresComponent implements OnInit {

  public version: string = packageJson.version;
  public profilIcon = faUserAstronaut;

  public accountParameters: ParametresItem[]= [];
  public chronoParameters: ParametresItem[]= [];
  public minuteurParameters: ParametresItem[]= [];

  constructor(private readonly navbarService: NavbarService) {
  }

  ngOnInit(): void {
    this.navbarService.changeTitle("Paramètres");
    this.accountParameters.push(new ParametresItem("Informations", "Oui"));
    this.chronoParameters.push(new ParametresItem("Vibrations", "Oui", true));
    this.minuteurParameters.push(new ParametresItem("Vibrations", "Oui", true));
  }

}
