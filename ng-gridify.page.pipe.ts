import { Pipe, PipeTransform } from '@angular/core';
import { NgGridifyService } from './ng-gridify.service';

@Pipe({
  name: 'PagePipe'
})
export class PagePipe implements PipeTransform {

  constructor(private ngGridifyService: NgGridifyService) { }

  //  We simply take an array coming in of any type and slice this into pages, if there is no data, the first page 
  //  is called or the data is empty the same value is returned, if there is data, we slice it up and return it.
  //  The pipe also sorts the data that is displayed on the page, for some reason a seperate sort pipe wasn't working,
  //  which would have been my ideal, but I can approach that in a later version.
  transform(dataIn: any[], itemsPerPage:number, currentPage:number, byProperty:string, ascending:boolean): any {
    if (byProperty != null) {
      dataIn.sort((a: Object, b: Object) => {
        const aProp = this.ngGridifyService.DeepValue(a, byProperty);
        const bProp = this.ngGridifyService.DeepValue(b, byProperty);
        
        if (aProp < bProp) {
          return -1;
        } else if (aProp > bProp) {
          return 1;
        } else {
          return 0;
        }
      });
    }

    if (!ascending) {
      dataIn.reverse();
    }

    if (!dataIn || dataIn.length == 0 || dataIn.length <= itemsPerPage) {
      return dataIn;
    }
    else if (currentPage == 1) {
      return dataIn.slice(0, itemsPerPage);
    }
    else {      
      const start = itemsPerPage * (currentPage-1);
      return dataIn.slice(start, start+itemsPerPage);
    }
  }

}