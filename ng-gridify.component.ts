import { OnInit, Input, Component } from '@angular/core';
import { ngGridifyData } from './ng-gridify.types';

@Component({
  selector: 'ng-gridify',
  template: `
    <h3>{{ gridData.Title }}</h3>
    <table>
    <tr>
      <th *ngFor="let col of columnNames;">{{col}}</th>        
      <th></th>
    </tr>
    <tr *ngFor="let row of gridData.Data;">
      <td *ngFor="let col of columnNames;">
        {{row[col]}}
      </td>
      <td>
        <a href="#" (click)="gridData.ItemClick(row)">CLICK!!!</a>
      </td>
    </tr>
    </table>
  `
})
export class ngGridifyComponent {

  @Input()
  gridData: ngGridifyData;

  columnNames: string[];

  ngOnInit() {
    if (this.gridData.Data && this.gridData.Data.length > 0) {
      this.columnNames = Object.getOwnPropertyNames(this.gridData.Data[0]);
    }    
  }



}