import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class NavbarService {

  private readonly navbarTitleSubject: BehaviorSubject<string>;
  public readonly navbarObs: Observable<string>;

  constructor() {
    this.navbarTitleSubject = new BehaviorSubject<string>('');
    this.navbarObs = this.navbarTitleSubject.asObservable();
  }

  changeTitle(title: string) {
    this.navbarTitleSubject.next(title);
  }
}
