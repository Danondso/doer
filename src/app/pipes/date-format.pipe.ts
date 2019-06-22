import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({
  name: 'dateFormat'
})
export class DateFormatPipe extends DatePipe implements PipeTransform {
  transform(value: Date, args?: any): any {
    const DATE_FORMAT = 'dd/MM/yyyy';
    return super.transform(value, DATE_FORMAT);
  }

}
