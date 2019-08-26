import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'power',
  // pure:false
})
export class PipesPipe implements PipeTransform {

  transform(base: number, exponent: number): number {
    console.log('hai');
    return Math.pow(base, exponent);

}
  }


