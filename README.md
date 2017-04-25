# NgGridify2

ngGridify is a quick and easy way to show some data on the page, and be able to sort it, configure the columns and bind some sort of javascript function to a button on each line if you want to.

**PLEASE NOTE THIS IS A WORK IN PROGRESS AND WILL BE VERY BASIC UNTIL ESTIMATED COMPLETION IN MAY 2017**

#### Why ngGridify2?

My original ng-gridify package is currently used by hundreds of developers and gets up to 1000 downloads on NPM each month, and while it works, it was my first attempt at OSS so there's a few things that i'd change for certain. It did everything I needed on a form with little to no configuration, so it made me ask the question - can I repeat this for Angular?

The idea is that you just include a simple prop in a component that contains everything that it needs to render a table of data on the page, no messing, and it just displays wih column sorting, export to CSV functionality, paging and the ability to pass in a native JSON object (not a TS type) that describes the data straight from a service to make this a breeze.

These are pretty much features that any basic online report table uses, right? It would be great to have a go-to grid.

#### Contributions

If you want to contribute, i'm attempting to complete the following features and all contributions are welcome, this is a learning project and certainly not a vanity one. 

#### Key Implemented Features
1.  Pass in a native JSON object and title for the grid.
2.  Read the JSON object and build a table around it. 
3.  Turn on/off a feature to convert the JSON data into a CSV file. 
4.  Pass in how many items per-page to display. 
5.  Allow the ability to sort the columns by clicking the header.

#### Upcoming Features (In no particular order)
1.  The ability to add a type to a column aswell as a format, useful for dates. <-- The MVP done until here :)
2.  The ability to add a series of functions to each row instead of a single one.
3.  Seperate the sort and page pipes into their own thing. I don't like how that method isn't totally encapsulated.
4.  When the component first loads, allow the caller to choose the default sorting.

#### How to use ngGridify2

Open your Angular2+ application and install the package from NPM

    npm install nggridify2 --save-dev

Add the following to the app.module.ts file in your application.

```javascript
import { ngGridifyModule } from './../../node_modules/nggridify2/ng-gridify.module';
```

Import it into the application.

```javascript
    imports: [
        [/*Other Imports*/]
        ngGridifyModule
    ]
```   

Add the following in the component that uses it for the data type that is required to bind.

```javascript
import { ngGridifyData } from './../../node_modules/nggridify2/ng-gridify.types';
```

Declare the component in the markup and choose what data to pass in.

```html
<ng-gridify [gridData]="myData"></ng-gridify>
```

At some point declare and pass in the native JSON object inside the type 'ngGridifyData'.

```javascript


   // Code to be placed in the component that uses the grid.  
   myData: ngGridifyData ;

   ngOnInit() { 
    this.myData = {        
      Title: 'The Grid Title', 
      ExportEnabled: true,
      Columns: [
        { Name: 'Id', DisplayValue: 'Id' },
        { Name: 'Name', DisplayValue: 'Name' },        
        { Name: 'Job', DisplayValue: 'Job' }
      ],
      Data: [
        { Name: 'Frank Reynolds', Id: 1, Job: 'Mastermind' },
        { Name: 'Deandra Reynolds', Id: 2, Job: 'Bartender' },
        { Name: 'Ronald MacDonald', Id: 3, Job: 'Nightman' },
        { Name: 'Dennis Reynolds', Id: 4, Job: 'Dayman (Fighter of the Nightman)' },
        { Name: 'Charlie Kelly', Id: 5, Job: 'Janitor' },
        { Name: 'The Waitress', Id: 6, Job: 'Waitress' },
        { Name: 'Artemis Dubois', Id: 7, Job: 'Actress' },
        { Name: 'The Attorney', Id: 8, Job: 'Attorney' },       
        { Name: 'Ben Smith', Id: 9, Job: 'Troop' },       
        { Name: 'Rickety Cricket', Id: 10, Job: 'Tramp' },       
        { Name: 'Maureen Ponderosa', Id: 11, Job: 'Cat' },
        { Name: 'Carmen', Id: 12, Job: 'Was a man' },
        { Name: 'Uncle Jack Kelly', Id: 13, Job: 'Attorney' },
        { Name: 'Macs Dad', Id: 14, Job: 'Steals Christmas presents' },
        { Name: 'Gail the Snail', Id: 15, Job: 'Mashing it' },
        { Name: 'McPoyle', Id: 16, Job: 'Who knows' }        
      ], 
      ItemClick: {
        Function: function (item) { 
            alert( item.Name + ', ' + item.Job);
        },
        Text: 'Click me to see a summary'
      },
      ItemsPerPage: 5
    } 
  }
  ```

