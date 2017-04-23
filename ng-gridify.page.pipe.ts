import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'PagePipe'
})
export class PagePipe implements PipeTransform {

  constructor() {

  }

  //  We simply take an array coming in of any type and slice this into pages, if there is no data, the first page 
  //  is called or the data is empty the same value is returned, if 
  transform(dataIn: any[], itemsPerPage:number, currentPage:number): any {

    if (!dataIn || dataIn.length == 0 || dataIn.length <= itemsPerPage) {
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