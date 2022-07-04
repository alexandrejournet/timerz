import {Component} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true
})
export class HomeComponent {

  constructor(private readonly router: Router) {
  }

  async goToTimer() {
    await this.router.navigate(['timer']);
  }

  async goToUtilitaires() {
    await this.router.navigate(['utilitaires']);
  }

  async openSettings() {
    await this.router.navigate(['params']);
  }

}
