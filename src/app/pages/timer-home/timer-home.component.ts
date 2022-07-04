import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {ToastService} from 'src/app/services/toast.service';
import {NavbarService} from "../../services/navbar.service";

@Component({
  standalone: true,
  selector: 'app-timer-home',
  templateUrl: './timer-home.component.html',
  styleUrls: ['./timer-home.component.scss']
})
export class TimerHomeComponent implements OnInit {

  constructor(private readonly router: Router,
              private readonly navbarService: NavbarService,
              private readonly toastService: ToastService) {
  }

  ngOnInit(): void {
    this.navbarService.changeTitle("Sessions")
  }

  async createTimer() {
    await this.router.navigate(['create']);
  }

  async goToMesSessions() {
    await this.router.navigate(['list']);
  }

  async goToSessionPredefinie() {
    this.toastService.showWarn("Oups", "Pas encore dev")
  }

}
