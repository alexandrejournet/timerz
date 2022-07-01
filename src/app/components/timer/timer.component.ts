import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {Timer} from "../../models/timer.model";
import {CommonModule} from "@angular/common";
import {animate, keyframes, state, style, transition, trigger} from "@angular/animations";
import * as kf from '../../shared/keyframes/keyframes';
import { HammerModule} from "@angular/platform-browser";
import {faCircleMinus, faDeleteLeft} from "@fortawesome/free-solid-svg-icons";
import {faClone} from "@fortawesome/free-regular-svg-icons";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";

@Component({
  standalone: true,
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss'],
  imports: [
    CommonModule,
    HammerModule,
    FontAwesomeModule
  ],
  animations: [
    trigger('cardAnimator', [
      transition('* => headShake', animate("1s ease-in-out", keyframes(kf.headShake))),
    ]),
    trigger('enter', [
      state('in', style({ transform: 'translateX(0)' })),
      transition(':enter', [
        style({ transform: 'translateX(100%)' }),
        animate(100)
      ]),
      transition(':leave', [
        animate(100, style({ transform: 'translateX(100%)' }))
      ]),
    ])
  ]
})
export class TimerComponent implements OnInit {

  @Input() timer?: Timer;
  @Input() index?: number;

  @ViewChild('card') cardTimer?: ElementRef;

  animationState?: string;

  menuShown = false;

  public readonly duplicateIcon = faClone;
  public readonly deleteIcon = faCircleMinus;

  @Output() duplicateEvent: EventEmitter<any> = new EventEmitter();
  @Output() deleteEvent: EventEmitter<any> = new EventEmitter();


  constructor() { }

  ngOnInit(): void {
  }

  startAnimation(state: string) {
    console.log(state)
    if (!this.animationState) {
      this.animationState = state;
    }
  }

  resetAnimationState() {
    this.animationState = '';
  }

  onPanLeft() {
    if(!this.menuShown) {
      this.menuShown = !this.menuShown;
      if(this.cardTimer!.nativeElement.classList.contains('translate-in')) {
        this.cardTimer!.nativeElement.classList.remove('translate-in')
      }
      this.cardTimer!.nativeElement.classList.add('translate-out');
    }
  }

  onPanRight() {
    if(this.menuShown) {
      this.menuShown = !this.menuShown;
      if(this.cardTimer!.nativeElement.classList.contains('translate-out')) {
        this.cardTimer!.nativeElement.classList.remove('translate-out')
      }
      this.cardTimer!.nativeElement.classList.add('translate-in');
    }
  }

  onPress($event: any) {
    console.log($event)
  }

  onDuplicate() {
    this.duplicateEvent.emit();
  }

  onDelete() {
    this.deleteEvent.emit();
  }
}
