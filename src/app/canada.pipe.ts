import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'canada'
})
export class CanadaPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
