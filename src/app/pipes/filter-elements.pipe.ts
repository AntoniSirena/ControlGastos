import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterElements'
})
export class FilterElementsPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    
    const results = [];

    for( const elements of value){
      if(elements.Origen.idexOf(args) > -1){
       results.push(elements);
      };
    };

    return results;
  }

}
