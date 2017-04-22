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
    <tr *ngFor="let row of gridData.Data | PagePipe: itemsPerPage : currentPage">
      <td *ngFor="let col of columnKeys;">
        {{row[col]}}
      </td>
      <td>
        <a href="#" (click)="gridData.ItemClick.Function(row)">{{gridData.ItemClick.Text}}</a>
      </td>
    </tr>
    <tr>
      <td [attr.colspan]="columnNames.length+1">
        Go to page: 
        <button *ngFor="let page of pages;" (click)="ChangePage(page)">{{page}}</button>
      </td>
    </tr>
    </table>
  `
})
export class ngGridifyComponent {

  @Input() gridData: ngGridifyData; 
  columnNames: string[];
  columnKeys: string[];
  itemsPerPage: number = 99999;
  currentPage: number = 1;
  numberOfPages: number = 0;
  pages: number[] = [];

  //  When starting up, if a columns property exists on the object, we use that, otherwise
  //  we use the default which is to just bring in the properties of the first Data object
  //  in order to build the grid. We also set the items per page here aswell as the number
  //  of pages and create an array of these to bind to on the component.
  ngOnInit() { 
    
    this.itemsPerPage = this.gridData.ItemsPerPage;        

    if (this.gridData.Data && this.gridData.Data.length > 0) {
      this.numberOfPages = Math.ceil(this.gridData.Data.length /this.itemsPerPage);            
      this.columnNames = Object.getOwnPropertyNames(this.gridData.Data[0]);
      this.columnKeys = Object.getOwnPropertyNames(this.gridData.Data[0]); 
      
      for(let i=0; i < this.numberOfPages; i++) {
        this.pages.push(i+1);
      }
    }
    
    if (this.gridData.Columns) {
      this.columnNames = this.gridData.Columns.map(function (e, i, a) {        
        return e.DisplayValue;
      });
      this.columnKeys = this.gridData.Columns.map(function (e, i, a) {        
        return e.Name;
      });      
    }

  }

  //  Changes the users current page by passing the current page into the pipe.
  ChangePage (page: number) {
    this.currentPage = page;
  }

  //  Export function will be created here (currently only tested in Google Chrome)
  //  It feels really ES2015 the way i'm doing this too, i'd also like to rename the
  //  document that is being returned to the grid name.
  ExportDataToCSV() {
    
    //  The content type needs to be set to allow it to be opened in numbers/excel/openofice
    let csvContent = "data:text/csv;charset=utf-8,";
    let cols = this.columnKeys;

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