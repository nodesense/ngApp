import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(items: any[], fieldName): any {
    if (!items || !fieldName) {
      return items;
    }

    return items.sort ( (left, right) => {
          if (left[fieldName] < right[fieldName])
            return 1;

          return -1
    })
  }

}
