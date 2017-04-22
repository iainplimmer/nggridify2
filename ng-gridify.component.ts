import { OnInit, Input, Component } from '@angular/core';
import { ngGridifyData } from './ng-gridify.types';

@Component({
  selector: 'ng-gridify',
  template: `
    <h3>{{ gridData.Title }}</h3>
    <table>
    <tr>
      <th *ngFor="let col of columnNames;">{{col}}</th>        
      <th>
        <button *ngIf="gridData.ExportEnabled" (click)="ExportDataToCSV()">Export</button>
      </th>
    </tr>
    <tr *ngFor="let row of gridData.Data;">
      <td *ngFor="let col of columnNames;">
        {{row[col]}}
      </td>
      <td>
        <a href="#" (click)="gridData.ItemClick.Function(row)">{{gridData.ItemClick.Text}}</a>
      </td>
    </tr>
    </table>
  `
})
export class ngGridifyComponent {

  @Input() gridData: ngGridifyData;
  columnNames: string[];

  ngOnInit() {
    if (this.gridData.Data && this.gridData.Data.length > 0) {
      this.columnNames = Object.getOwnPropertyNames(this.gridData.Data[0]);
      console.log(this.columnNames)
    }    
  }

  //  Export function will be created here (currently only tested in Google Chrome)
  //  It feels really ES2015 the way i'm doing this too, i'd also like to rename the
  //  document that is being returned to the grid name.
  ExportDataToCSV() {
    

    //  The content type needs to be set to allow it to be opened in numbers/excel/openofice
    let csvContent = "data:text/csv;charset=utf-8,";
    let cols = this.columnNames;

    //  Setup the headers
    csvContent += cols.map(function (column) {                            
      return column;
    }).join(",") + '\n';

    //  I'm sure there is a more efficient way to do this, but we basically loop over the items, match the requested columns 
    //  push the result into a comma delimited string, with a new line on each row.
    this.gridData.Data.map(function (item){     
       csvContent += cols.map(function (column) {                            
         return item[column];
       }).join(",") + '\n';
    })

    //  Open the content in a new window
    let encodedUri = encodeURI(csvContent);
    window.open(encodedUri);
  }



}