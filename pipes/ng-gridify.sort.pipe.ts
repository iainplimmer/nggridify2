import { Pipe, PipeTransform } from '@angular/core';
import { NgGridifyService } from './../services/ng-gridify.service';

@Pipe({
  name: 'SortPipe',
  pure: false
})
export class SortPipe implements PipeTransform {

  constructor(private ngGridifyService: NgGridifyService) { }

  transform(dataIn: any[], byProperty:string, ascending:boolean): any {        
    return this.ngGridifyService.Sort(dataIn, byProperty, ascending);   
  }

}