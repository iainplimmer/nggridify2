import { Injectable } from '@angular/core';

@Injectable()
export class NgGridifyService {

  //  Gets a deep-value from an object, by a specified dot separated key (ie. user.firstname)
  DeepValue(obj: Object, key: string) {
    let c = obj;
    key.split('.').forEach((p) => c = (c == undefined) ? '' : c[p]);
    return c;
  }

  //  Provides a sort function on deep value and shallow value array properties
  Sort(dataIn: any[], byProperty:string, ascending:boolean): any {
    if (byProperty != null) {
      dataIn.sort((a: Object, b: Object) => {
        const aProp = this.DeepValue(a, byProperty);
        const bProp = this.DeepValue(b, byProperty);
        
        if (aProp < bProp) {
          return -1;
        } else if (aProp > bProp) {
          return 1;
        } else {
          return 0;
        }
      });
    }

    if (!ascending) {
      dataIn.reverse();
    }

    return dataIn;
  }
}