import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sumArray'
})
export class SumArrayPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    console.dir(value);
    return value.reduce((acc, cur) => acc + cur, 0);
  }

}