# NgGridify2

ngGridify is a quick and easy way to show some data on the page, and be able to sort it, configure the columns and bind some sort of javascript function to a button on each line if you want to.

**PLEASE NOTE THIS IS A WORK IN PROGRESS AND WILL BE VERY BASIC UNTIL ESTIMATED COMPLETION IN MAY 2017**

1. npm nggridify2

2. Add the following the the app.module.ts file
    import { ngGridifyModule } from './[*Location*]/ng-gridify2/ng-gridify.module';

    imports: [
        [*Other Imports*]
        ngGridifyModule
    ],

3. Add the following in the component that uses it for the data type that is required to bind

    import { ngGridifyData } from './[*Location*]/ng-gridify2/ng-gridify.types';

    <ng-gridify [gridData]="myData"></ng-gridify>

    ngOnInit () {
    this.myData = {
        Title: 'Iains Title',
        Data: [{
          Title: 'poop',
          Stuff: 123
        },
        {
          Title: 'loop',
          Stuff: 456
        },
        {
          Title: 'doop',
          Stuff: 789
        }],
        ItemClick: function (item) {
          console.log(item)
        }
      }
    }

