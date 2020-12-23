// import { JsonPipe } from '@angular/common';
import { Injectable } from '@angular/core';
// import { isNumber } from 'util';

import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GlobalFunctionsService {

  constructor() { }

  isFloat(n) {
    // tslint:disable-next-line: no-bitwise
    return n === +n && n !== (n | 0);
  }

  isInteger(n) {
    // tslint:disable-next-line: no-bitwise
    return n === +n && n === (n | 0);
  }

  isNumeric(n) {
    if (typeof n === 'number') {
      return true;
    } else {
      return false;
    }
  }

  dpUuid(prefix?: string, len?: number) {
    let LocUuid = '';
    len = (len !== undefined && this.isInteger(len) ? len : 12);
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lettersLength = letters.length;
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    const charactersLength = characters.length;

    LocUuid += letters.charAt(Math.floor(Math.random() * lettersLength));

    for (let i = 0; i < len - 1; i++) {
      LocUuid += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    if (prefix !== undefined && prefix.trim() !== '') {
      LocUuid = prefix + '_' + LocUuid;
    }

    return LocUuid;

  }
  // Extract the unique values for the given key of each item in the array
  // retTreeNodesData = [...new Set(LocSelection.map(it => it.data))];

  
}
