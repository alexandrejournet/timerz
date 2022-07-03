import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from "@angular/forms";
import {HammertimeDirective} from './directives/hammertime.directive';

@NgModule({
  declarations: [
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
