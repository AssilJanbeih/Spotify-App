import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numberFormat'
})
export class NumberFormatPipe implements PipeTransform {
  transform(value: number): string {
    if (value >= 1000000000) {
      const formattedValue = value / 1000000000;
      return `${formattedValue.toFixed(1)}B`;
    } else if (value >= 1000000) {
      const formattedValue = value / 1000000;
      return `${formattedValue.toFixed(1)}M`;
    } else if (value >= 1000) {
      const formattedValue = value / 1000;
      return `${formattedValue.toFixed(1)}k`;
    } else {
      return value.toString();
    }
  }
}




