import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DialogAddTimerComponent} from './dialog/dialog-add-timer/dialog-add-timer.component';
import {FormsModule} from "@angular/forms";
import {HammertimeDirective} from './directives/hammertime.directive';

@NgModule({
  declarations: [
    DialogAddTimerComponent,
    HammertimeDirective
  ],
  exports: [],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class SharedModule {
}
