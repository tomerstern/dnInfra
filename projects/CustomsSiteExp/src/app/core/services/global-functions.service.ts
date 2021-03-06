// import { JsonPipe } from '@angular/common';
import { Injectable } from '@angular/core';
import { takeUntil } from 'rxjs/operators';
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

  getdate() {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0');
    var yyyy = today.getFullYear();
    return( mm + '/' + dd + '/' + yyyy);
  }

    
  addDays(date, days) {
    var result = new Date(date);
    result.setDate(result.getDate() + days);

    var dd = String(result.getDate()).padStart(2, '0');
    var mm = String(result.getMonth() + 1).padStart(2, '0');
    var yyyy = result.getFullYear();

    return( mm + '/' + dd + '/' + yyyy);
  }

  funcConvertToBoolean(n) {
    if(n === 1 || n === '1' || n.toUpperCase() === 'TRUE') {
      return true;
    }
    return false
  }
}
