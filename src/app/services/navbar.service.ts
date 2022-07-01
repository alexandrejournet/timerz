import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class NavbarService {

  private readonly navbarTitleSubject: BehaviorSubject<string>;
  public readonly navbarObs: Observable<string>;

  private readonly showNextSubject: Subject<void>;
  public readonly showNextObs: Observable<void>;

  constructor() {
    this.navbarTitleSubject = new BehaviorSubject<string>('');
    this.navbarObs = this.navbarTitleSubject.asObservable();

    this.showNextSubject = new Subject<void>();
    this.showNextObs = this.showNextSubject.asObservable();
  }

  changeTitle(title: string) {
    this.navbarTitleSubject.next(title);
  }

  showNext() {
    this.showNextSubject.next();
  }
}
