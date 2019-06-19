import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({
  name: 'dateFormat'
})
export class DateFormatPipe extends DatePipe implements PipeTransform {
  transform(value: Date, args?: any): any {
    const DATE_FORMAT = 'y MMMM EEEE d';
    return super.transform(value, DATE_FORMAT);
  }

}
