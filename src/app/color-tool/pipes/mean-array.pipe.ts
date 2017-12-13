import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'meanArray'
})
export class MeanArrayPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return value.reduce((acc, cur) => acc + cur, 0) / value.length;
  }

}
