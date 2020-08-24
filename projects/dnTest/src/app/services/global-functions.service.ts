import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalFunctionsService {

  constructor() { }

  getGlobalVal() {
    return '22224' ;
  }
}
