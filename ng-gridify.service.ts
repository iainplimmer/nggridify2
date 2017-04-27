import { Injectable } from '@angular/core';

@Injectable()
export class NgGridifyService {

  //  Gets a deep-value from an object, by a specified dot separated key (ie. user.firstname)
  DeepValue(obj: Object, key: string) {
    let c = obj;
    key.split('.').forEach((p) => c = (c == undefined) ? '' : c[p]);
    return c;
  }

}