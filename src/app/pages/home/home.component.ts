import { Component, OnInit } from '@angular/core';
import {ToastService} from "../../services/toast.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true
})
export class HomeComponent {

  constructor(private readonly router: Router,
              private readonly toastService: ToastService) { }

  async createTimer() {
    await this.router.navigate(['create']);
  }

  goToMesTimers() {
    this.toastService.showWarn("Oups", "Pas encore développé");
  }

}
