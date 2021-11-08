import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchfilterCat'
})
export class SearchfilterCatPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
