import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'PagePipe'
})
export class PagePipe implements PipeTransform {

  constructor() {

  }

  transform(dataIn: any[], itemsPerPage:number, currentPage:number): any {

    console.log('this is coming through the pipe!!!', itemsPerPage, currentPage);
    
    if (dataIn.length <= itemsPerPage) {
      return dataIn;
    }
    else if (currentPage == 1) {
      return dataIn.slice(0, itemsPerPage);
    }
    else {      
      let start = itemsPerPage * (currentPage-1);
      return dataIn.slice(start, start+itemsPerPage);
    }
  }

}