import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { ICooData,CooBox,CooKey,ICooHeadersData,AssistTable} from '../models/coo';

@Injectable({ providedIn: 'root'})

export class CooService {

  countriesList: AssistTable;
  customsOfficeList: AssistTable;
  cooTypes: AssistTable;
  cooKey: CooKey;
  cooData: ICooData;
  cooBox: CooBox;
  headersData: ICooHeadersData;
  cooDataSubject$ = new BehaviorSubject<ICooData>(null);
  //cooHeadersSubject$ = new BehaviorSubject<ICooHeadersData>(null);
  jsonData : any ;
  
  constructor(private http: HttpClient) {}

  //#region  "Set"
  setCooKey(key: CooKey)
  {
    this.cooKey = key;
  }

  setCooBox(jsonCooBox: any)
  {
    this.cooBox = jsonCooBox;
  }

  setCountries(jsonCountriesList: any)
  {
    this.countriesList = jsonCountriesList;
  }

  setCustomsOffice(jsonCustomsOfficeList: any)
  {
    this.customsOfficeList = jsonCustomsOfficeList;
  }
 /*------------------------------*/

//#region Get
  async getCooHeaderList( key: CooKey) {
    let jsonKey: any = JSON.stringify(key);
    // this.jsonData = await this.sendWebRequest("COO/GetCooHeaderList" , jsonKey);
    // this.headersData = { headers: this.jsonData } ;
    // return this.headersData
    return this.sendWebRequest("COO/GetCooHeaderList" , jsonKey);
  }

  async getCooBoxByEntityNo( key: CooKey) {
    let jsonKey: any = JSON.stringify(key);
    return this.sendWebRequest("COO/GetCooBoxByEntityNo" , jsonKey);
  }

  async getCooTypesList() {
   return this.sendWebRequest("COO/GetCooTypesList",{});
  }

  async getCountriesList() {
    return this.sendWebRequest("Assist/GetCustomsCountries",{});
  }

  async getCustomsOfficeList() {
    return this.sendWebRequest("Assist/GetCustomsOffice",{});
  }
  /*------------------------------*/

 async sendWebRequest(sURL: string , jsonKey: any) { 
    return await new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      // const requestData = { username: userName, password: userPassword };
      xhr.open(
        'POST',
        environment.apiBaseUrl + sURL,
        true
      );
      xhr.setRequestHeader('Content-type', 'application/json;');
      xhr.onload = () => {
        if (xhr.status >= 200 && xhr.status < 300) {
          const response = JSON.parse(xhr.response);
          if (response.Status === 'OK') {
            // this.headersData = {
            //   headers: response.result
            // };
            //this.cooHeadersSubject$.next(response.result);
            resolve(response.result);
          } else {
            resolve(xhr.response);
          }
        } else {
          reject({
            status: xhr.status,
            statusText: xhr.statusText,
          });
        }
      };
      xhr.onerror = () => {
        reject({
          status: xhr.status,
          statusText: xhr.statusText,
        });
      };
      xhr.send(jsonKey);
    });
    
  }
  
  getCooBoxFromServer(key: CooKey) {

    return new Promise((resolve, reject) => {

      const xhr = new XMLHttpRequest();

      xhr.open(
        'POST',
        environment.apiBaseUrl + 'Coo/GetDefaultCoo',
        true
      );
      xhr.setRequestHeader('Content-type', 'application/json;');
      xhr.onload = () => {
        if (xhr.status >= 200 && xhr.status < 300) {
          const response = JSON.parse(xhr.response);
          if (response.Status === 'OK') {
            this.cooData = {
              serverCooData: response.result,
              updatedCooData: this.createUpdatedCooData(response.result),
            };
            this.cooDataSubject$.next(this.cooData);
            resolve('OK');
          } else {
            resolve(xhr.response);
          }
        } else {
          reject({
            status: xhr.status,
            statusText: xhr.statusText,
          });
        }
      };
      xhr.onerror = () => {
        reject({
          status: xhr.status,
          statusText: xhr.statusText,
        });
      };
      xhr.send(JSON.stringify(key));
    });

  }

  getDefaultCooFromServer() {
    // http://localhost/ExportCustomsWebAPI/Coo/GetDefaultCoo
    this.http
      .get(environment.apiBaseUrl + 'Coo/GetDefaultCoo')
      .toPromise()
      .then((data: { Status: string; result: any }) => {
        if (data.Status === 'OK') {
          this.cooData = {
            serverCooData: data.result,
            updatedCooData: this.createUpdatedCooData(data.result),
          };
          this.cooDataSubject$.next(this.cooData);
        }
      });
  }

  createUpdatedCooData(cooDataParam: any) {
    const cooData: CooBox = new CooBox();
    cooData.ShipmentNumber = cooDataParam.ShipmentNumber;
    cooData.DeptCode = cooDataParam.DeptCode;
    cooData.CusDecOrder = cooDataParam.CusDecOrder;
    // delete cooData.Header.State;
    return cooData;
    // sessionStorage.setItem('currentUpdShipment', JSON.stringify(shipment));
  }

  getCooHeader() {
    return this.cooData.serverCooData.Header;
  }

  async getCooHeaderTab() {
    return this.sendWebRequest("COO/GetCooHeaderTab",{});
  }

  updateCooHeaderTabData(cooHeaderTabData: any)
  {}

  async getNonManCer()
  {
    return this.sendWebRequest("COO/GetCooHeaderTab",{});
  }

}
