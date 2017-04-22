# NgGridify2

ngGridify is a quick and easy way to show some data on the page, and be able to sort it, configure the columns and bind some sort of javascript function to a button on each line if you want to.

**PLEASE NOTE THIS IS A WORK IN PROGRESS AND WILL BE VERY BASIC UNTIL ESTIMATED COMPLETION IN MAY 2017**

Why ngGridify2?

My original ng-gridify package is currently used by hundreds of developers and gets up to 1000 downloads on NPM each month, and while it works, it was my first attempt at OSS so there's a few things that i'd change for certain. It did everything I needed on a form with little to no configuration, so it made me ask the question - can I repeat this for Angular?

The idea is that you just include a simple prop in a component that contains everything that it needs to render a table of data on the page, no messing, and it just displays wih column sorting, export to CSV functionality, paging and the ability to pass in a native JSON object (not a TS type) that describes the data straight from a service to make this a breeze.

These are pretty much features that any basic online report table uses, right? It would be great to have a go-to grid.

Contributions

If you want to contribute, i'm attempting to complete the following features and all contributions are welcome, this is a learning project and certainly not a vanity one. (in no particular order).

1.  Pass in a native JSON object and title for the grid.
2.  Read the JSON object and build a table around it. <--(Done until here)
3.  Pass in how many items per-page to display.
4.  Allow the ability to sort the columns by clicking the header.
5.  Turn on/off a feature to convert the JSON data into a CSV file.

How to use ngGridify2

1.  Install it

    npm install nggridify2 --save-dev

2.  Add the following the the app.module.ts file.
      import { ngGridifyModule } from './../../node_modules/nggridify2/ng-gridify.module';

3.  Import it into the application.

    imports: [
        [*Other Imports*]
        ngGridifyModule
    ],

4.  Add the following in the component that uses it for the data type that is required to bind.

    import { ngGridifyData } from './[*Location*]/ng-gridify2/ng-gridify.types';

5.  Declare the component in the markup and choose what data to pass in.

    <ng-gridify [gridData]="myData"></ng-gridify>

6.  At some point declare and pass in the native JSON object inside the type 'ngGridifyData'.

    ngOnInit () {
    this.myData = {
        Title: 'Iains Title',
        Data: [{
          Title: 'stuff',
          Stuff: 123
        },
        {
          Title: 'more stuff',
          Stuff: 456
        },
        {
          Title: 'doopy stuff',
          Stuff: 789
        }],
        ItemClick: function (item) {
          console.log(item)
        }
      }
    }

