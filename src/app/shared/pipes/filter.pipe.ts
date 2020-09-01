import { Pipe, PipeTransform } from '@angular/core';

// {{ dataItems | filter:'year':'<':2010}}

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: any[], 
            field: string,
            predicate: string,
            value: any): any[] {
              
    if (!items || !field || !predicate || !value) {
      return items;
    }

    if (predicate == '>') {
     // return items.filter(item => item[field] > value)
     return items.filter(function(item: any):boolean {
       return item[field] > value
      })
    }

    if (predicate == '<') {
       return items.filter(item => item[field] < value)
    }

    if (predicate == '==') {
      return items.filter(item => item[field] == value)
   }

   return items;
  }

}