import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  standalone: true,
  name: 'minuteur'
})
export class MinuteurPipe implements PipeTransform {

  transform(value: string): string {
    if (value !== '') {
      value = value.padStart(6, '0');
      const hour = value.slice(0, 2);
      const minutes = value.slice(2, 4);
      const seconds = value.slice(4);
      return hour.concat(' : ', minutes, ' : ', seconds);
    } else {
      return '00 : 00 : 00'
    }
  }
}
