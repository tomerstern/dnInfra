import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { Assist } from '../models/assist';

@Injectable({
  providedIn: 'root'
})
export class ExportassistService {

  constructor(private http: HttpClient) { }

  async getExportAssistByKey(tableId: string) {
    let listAssists: any[];
    // let listAssists: Assist[];

    this.http.get('http://localhost/ExportCustomsWebAPI/Assist/Get/' + tableId).
    toPromise().then((data: {Status: string, result: any}) => {
      
        if (data.Status === 'OK')
        {
          listAssists = data.result.Items;
        }
        console.log(listAssists);
    });
  }
}
