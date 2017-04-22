# NgGridify2

ngGridify is a quick and easy way to show some data on the page, and be able to sort it, configure the columns and bind some sort of javascript function to a button on each line if you want to.

**PLEASE NOTE THIS IS A WORK IN PROGRESS AND WILL BE VERY BASIC UNTIL ESTIMATED COMPLETION IN MAY 2017**

#Why ngGridify2?

My original ng-gridify package is currently used by hundreds of developers and gets up to 1000 downloads on NPM each month, and while it works, it was my first attempt at OSS so there's a few things that i'd change for certain. It did everything I needed on a form with little to no configuration, so it made me ask the question - can I repeat this for Angular?

The idea is that you just include a simple prop in a component that contains everything that it needs to render a table of data on the page, no messing, and it just displays wih column sorting, export to CSV functionality, paging and the ability to pass in a native JSON object (not a TS type) that describes the data straight from a service to make this a breeze.

These are pretty much features that any basic online report table uses, right? It would be great to have a go-to grid.

#Contributions

If you want to contribute, i'm attempting to complete the following features and all contributions are welcome, this is a learning project and certainly not a vanity one. (in no particular order).

1.  Pass in a native JSON object and title for the grid.
2.  Read the JSON object and build a table around it. 
3.  Turn on/off a feature to convert the JSON data into a CSV file. 
4.  Pass in how many items per-page to display. <-- The MVP done until here :)
5.  Allow the ability to sort the columns by clicking the header.


#How to use ngGridify2

Open your Angular2+ application and install the package from NPM

    npm install nggridify2 --save-dev

Add the following to the app.module.ts file in your application.

```
import { ngGridifyModule } from './../../node_modules/nggridify2/ng-gridify.module';
```

Import it into the application.

```
    imports: [
        [*Other Imports*]
        ngGridifyModule
    ]
```   

Add the following in the component that uses it for the data type that is required to bind.

```
import { ngGridifyData } from './../../node_modules/nggridify2/ng-gridify.types';
```

Declare the component in the markup and choose what data to pass in.

```
<ng-gridify [gridData]="myData"></ng-gridify>
```

At some point declare and pass in the native JSON object inside the type 'ngGridifyData'.

```
    ngOnInit() { 
      this.myData = { 
        Title: 'The Grid Title', 
        ExportEnabled: true,
        Columns: [
          { Name: 'Name', DisplayValue: 'NAME' },
          { Name: 'Id', DisplayValue: 'ID' }
        ],
        Data: [
          { Name: 'Iain', Id: 1 },
          { Name: 'William', Id: 2 },
          { Name: 'Sara', Id: 3 },
          { Name: 'Erin', Id: 4 },
          { Name: 'Garry', Id: 5 },
          { Name: 'Jeremy', Id: 6 },
          { Name: 'Christine', Id: 7 },
          { Name: 'Janet', Id: 8 },       
          { Name: 'Daniel', Id: 9 },       
          { Name: 'Barry', Id: 10 },       
          { Name: 'David', Id: 11 },
          { Name: 'Emma', Id: 12 },
          { Name: 'Leanne', Id: 13 },
          { Name: 'Ashley', Id: 14 },
          { Name: 'Kath', Id: 15 },
          { Name: 'Gruncle', Id: 16 },
          { Name: 'Russell', Id: 17 },
          { Name: 'Chris', Id: 18 },       
          { Name: 'Jason', Id: 19 },       
          { Name: 'Charles', Id: 20 },       
          { Name: 'Ryan', Id: 21 },
          { Name: 'Robert', Id: 22 },
          { Name: 'Una', Id: 23 },
          { Name: 'Edna', Id: 24 },
          { Name: 'John', Id: 25 },    
          { Name: 'Sandra', Id: 26 },       
          { Name: 'Stuart', Id: 27 }       
        ], 
        ItemClick: {
          Function: function (item) { 
            console.log('We\'re going to be doing something with this item:', item); 
          },
          Text: 'Click me!'
        },
        ItemsPerPage: 7
      } 
  }
  ```

