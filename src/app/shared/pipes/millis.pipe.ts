import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  standalone: true,
  name: 'millis'
})
export class MillisPipe implements PipeTransform {

  transform(value: number): unknown {
    const entire = Math.floor(value) * 100;
    const numb = Math.floor(value * 100);
    return (numb - entire);
  }

}
