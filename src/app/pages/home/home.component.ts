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

  async createTimer() {
    await this.router.navigate(['create']);
  }

  async goToMesTimers() {
    await this.router.navigate(['list']);
  }

  async openSettings() {
    await this.router.navigate(['params']);
  }

}
