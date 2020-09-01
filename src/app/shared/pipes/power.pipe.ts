import { Pipe, PipeTransform } from '@angular/core';

// {{ 3 | power: 2}} ==> 9
// {{ 3 | power}} ==> 3
@Pipe({
  name: 'power'
})
export class PowerPipe implements PipeTransform {

  constructor() {
    console.log("PowerPipe created");
  }

  transform(value: number, exponent: number = 1): number {
    console.log("power pipe ", value, exponent);
    return Math.pow(value, exponent);
  }

}
