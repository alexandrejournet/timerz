import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'time',
  standalone: true
})
export class TimePipe implements PipeTransform {

  transform(value: number, chrono: boolean = false): string {
    if (!chrono) {
      if (value && value > 0) {
        const min = Math.floor(value / 60);
        const sec = value % 60;

        let minStr = min.toString().padStart(2, "0");
        let secStr = sec.toString().padStart(2, "0");

        return minStr.concat(":", secStr);
      } else {
        return "00:00"
      }
    } else {
      const min = Math.floor(value / 60);
      const sec = Math.round(value % 60);
      let secStr = sec.toString().padStart(2, "0");

      if (min > 0) {
        let minStr = min.toString().padStart(2, "0");
        return minStr.concat(":", secStr);
      } else {
        return secStr;
      }
      return "00"
    }
  }
}
