import { OnInit, Input, Component, OnChanges } from '@angular/core';
import { ngGridifyData } from './ng-gridify.types';

@Component({
  selector: 'ng-gridify',
  template: `
    <h3>{{ gridData.Title }}</h3>
    <table>
    <colgroup>
      <col *ngFor="let col of gridData.Columns;" width="{{col.Width}}">
    </colgroup>
    <tr>
      <th *ngFor="let col of columnNames; let i = index; trackBy: trackByFn">      
        <a href="#" (click)="SortGrid(i)">{{col}}</a>      
      </th>        
      <th>
        <button *ngIf="gridData.ExportEnabled" (click)="ExportDataToCSV()">Export</button>
      </th>
    </tr>
    <tr *ngFor="let row of gridData.Data | PagePipe: itemsPerPage : currentPage : sortByColumn : sortByAscending">
      <td *ngFor="let col of columnKeys;">
        {{DeepValue(row, col)}}
      </td>
      <td>
        <a href="#" (click)="gridData.ItemClick.Function(row)">{{gridData.ItemClick.Text}}</a>
      </td>
    </tr>
    <tr>
      <td [attr.colspan]="gridData.Columns.length+1">
        Go to page: 
        <button *ngFor="let page of pages; let i=index" (click)="ChangePage(i+1)">{{i+1}}</button>
      </td>
    </tr>
    </table>
  `
})
export class NgGridifyComponent {

  // Columns: [
  //   { Name: 'Id', DisplayValue: 'Id', Width: '200' },

  //  The grid data that is passed into the component
  @Input() 
  gridData: ngGridifyData; 
  
  //  These two really could do with being in a tuple instead of two arrays but contain references
  //  to the dynamic columns that have been provided to the component
  columnNames: string[];
  columnKeys: string[];

  //  All other local variables that control sorting and paging.
  itemsPerPage: number = 99999;
  currentPage: number = 1;
  numberOfPages: number = 0;
  pages: number[] = [];
  sortByColumn: string = null;
  sortByAscending: boolean = true;

  ngOnInit() { 
    this.SetupGrid();
  }

  //  When starting up, if a columns property exists on the object, we use that, otherwise
  //  we use the default which is to just bring in the properties of the first Data object
  //  in order to build the grid. We also set the items per page here aswell as the number
  //  of pages and create an array of these to bind to on the component.
  SetupGrid () {
    this.itemsPerPage = this.gridData.ItemsPerPage;        

    if (this.gridData.Data && this.gridData.Data.length > 0) {      
      this.numberOfPages = Math.ceil(this.gridData.Data.length / this.itemsPerPage);            
      this.pages = Array(this.numberOfPages);
    }
    
    if (this.gridData.Columns) {
      this.columnNames = this.gridData.Columns.map(e =>  e.DisplayValue);
      this.columnKeys = this.gridData.Columns.map(e =>  e.Name);      
    }
  }

  //  When a column header is clicked, we 
  SortGrid (index: number) {
    this.sortByAscending = !this.sortByAscending;
    this.sortByColumn = this.columnKeys[index];
  }

  //  Changes the users current page by passing the current page into the pipe.
  ChangePage (page: number) {
    this.currentPage = page;
  }

  //  Gets a deep-value from an object, by a specified dot separated key (ie. user.firstname)
  DeepValue(obj: Object, key: string) {
    let c = obj; 
    key.split('.').forEach((p) => c = (c == undefined) ? '' : c[p]); 
    return c;
  }

  //  Export function will be created here (currently only tested in Google Chrome)
  //  I'd like to rename the document that is being returned to the grid name.
  ExportDataToCSV() {
    
    //  The content type needs to be set to allow it to be opened in numbers/excel/openofice
    let csvContent = "data:text/csv;charset=utf-8,";
    const cols = this.columnKeys;

    //  Setup the headers
    csvContent += cols.join(",") + '\n';

    //  I'm sure there is a more efficient way to do this, but we basically loop over the items, match the requested columns 
    //  push the result into a comma delimited string, with a new line on each row.
    this.gridData.Data.map(item => {     
       csvContent += cols.map(column => this.DeepValue(item, column)).join(",") + '\n';
    })

    //  Open the content in a new window
    const encodedUri = encodeURI(csvContent);
    window.open(encodedUri);
  }

  /* CURRENTLY RUNNING INTO ISSUES WITH THE ON CHANGE OF THE ARRAY THIS NEEDS WORK - IJP
    ngOnChanges(changes: SimpleChanges) {
      console.log(changes, '!');
      this.SetupGrid();
  }
  */


}