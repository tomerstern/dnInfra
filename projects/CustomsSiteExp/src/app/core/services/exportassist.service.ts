
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'projects/CustomsSiteExp/src/environments/environment';
// import { Assist } from '../models/assist';

@Injectable({
  providedIn: 'root'
})
export class ExportassistService {

  constructor(private http: HttpClient) { }

  async getExportAssistByKey(tableId: string) {
    let listAssists: any[];
    // let listAssists: Assist[];

    this.http.get(environment.apiBaseUrl + 'Assist/Get/' + tableId).
      toPromise().then((data: { Status: string, result: any }) => {

        if (data.Status === 'OK') {
          listAssists = data.result.Items;
        }
        console.log(listAssists);
      });
  }

  // async getAllCustomers() {
  //   let listCustomers: any[];

  //   this.http.get(environment.apiBaseUrl + 'Assist/GetCustomers').
  //     toPromise().then((data: { Status: string, result: any }) => {

  //       if (data.Status === 'OK') {
  //         debugger
  //         listCustomers = data.result;
  //         return listCustomers;
  //       }
  //       console.log(listCustomers);
  //     });
  //   debugger
  //   return listCustomers;


  getAllCustomers() {

    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      // const requestData = { userid: userId, initpaths: InitPath };
      xhr.open('POST', environment.apiBaseUrl + 'Assist/GetCustomers', true);
      xhr.setRequestHeader('Content-type', 'application/json;');
      xhr.onload = () => {
        if (xhr.status >= 200 && xhr.status < 300) {
          debugger
          resolve(JSON.parse(xhr.response));
        } else {
          reject({
            status: xhr.status,
            statusText: xhr.statusText
          });
        }
      };
      xhr.onerror = () => {
        debugger
        reject({
          status: xhr.status,
          statusText: xhr.statusText
        });
      };
      // xhr.send(JSON.stringify(requestData));
      xhr.send();
    });
  }
}
