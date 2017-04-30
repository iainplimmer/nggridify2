import { Pipe, PipeTransform } from '@angular/core';
import { NgGridifyService } from './../services/ng-gridify.service';

@Pipe({
  name: 'PagePipe',
  pure: false
})
export class PagePipe implements PipeTransform {

  constructor(private ngGridifyService: NgGridifyService) { }

  transform(dataIn: any[], itemsPerPage:number, currentPage:number): any {
    return this.ngGridifyService.PageData(dataIn, itemsPerPage, currentPage);
  }

}