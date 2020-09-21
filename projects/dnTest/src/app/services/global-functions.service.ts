import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalFunctionsService {

  constructor() { }

  getGlobalVal() {
    return '22224' ;
  }

  // Extract the unique values for the given key of each item in the array
  // retTreeNodesData = [...new Set(LocSelection.map(it => it.data))];
}
