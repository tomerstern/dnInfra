import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { StateSavingMode } from  '../../core/enums';
import { ICooData,CooKey, CooMode} from '../models/coo';
import { CommunicationService } from '../../core/services/communication.service';
import { AssistTableMin } from '../../shared/models/assist';
import { OperationShipmentData } from '../../core/models/shipment';

@Injectable({ providedIn: 'root'})

export class CooService {

  countriesList: AssistTableMin;
  customsOfficeList: AssistTableMin;
  cooTypes: AssistTableMin;    
  cooData: ICooData;
  operationShipmentData: OperationShipmentData;
  cooUpdatedData: any;  
  cooDataSubject$ = new BehaviorSubject<ICooData>(null);
    
  constructor(private http: HttpClient, private webAPI: CommunicationService) {}

  fixDate(dateConvert: string):string
  {
    if(dateConvert != undefined)
    {
      let date = new Date(parseInt(dateConvert.substr(6))).toISOString().slice(0,10);
      return date;
    }
    return ""
  }
  
  //#region  "Set"
  setCooBox(jsonCooBox: any)
  {
    this.cooData = jsonCooBox;
    this.cooDataSubject$.next(this.cooData);
  }

  setCountries(jsonCountriesList: any)
  {
    this.countriesList = jsonCountriesList;
  }

  setCustomsOffice(jsonCustomsOfficeList: any)
  {
    this.customsOfficeList = jsonCustomsOfficeList;
  }

  setOperationShipmentData(jsonShipmentData: any)
  {
    this.operationShipmentData = jsonShipmentData;
  }
 /*------------------------------*/

//#region Get
  async getCooHeaderList( key: CooKey) {
    //let jsonKey: any = JSON.stringify(key);
    //debugger
    return this.webAPI.sendWebRequest("COO/GetCooHeaderList" , key);
  }

  async getCooBoxByEntityNo( key: CooKey) {
    //let jsonKey: any = JSON.stringify(key);
    return this.webAPI.sendWebRequest("COO/GetCooBoxByEntityNo" , key);
  }

  async getCooTypesList() {
   return this.webAPI.sendWebRequest("COO/GetCooTypesList",{});
  }

  async getCountriesList() {
    return this.webAPI.sendWebRequest("Assist/GetCustomsCountries",{});
  }

  async getCustomsOfficeList() {
    return this.webAPI.sendWebRequest("Assist/GetCustomsOffice",{});
  }

  async getOperationShipmentData(key: CooKey) {
    return this.webAPI.sendWebRequest("Shipment/GetOperationShipmentData",key);
  }
  
  async updateCooData() {
    this.cooData.CooBoxData.Header.State = StateSavingMode.Modified;
    this.copyKeyFromHeaderToBox();    
      return await new Promise((resolve, reject) => {
        this.webAPI.sendWebAPIRequest("COO/UpdateCooBox" , JSON.stringify(this.cooData.CooBoxData))
        .then((response: { Status: string; result: any }) => {
          if (response.Status == "OK"){
            resolve(response.Status);
          }
          else{
            resolve(response.result); 
          }
        }
      )
    });
  }

  copyKeyFromHeaderToBox()
  {
    this.cooData.CooBoxData.ShipmentNumber = this.cooData.CooBoxData.Header.ShipmentNumber;
    this.cooData.CooBoxData.DeptCode = this.cooData.CooBoxData.Header.DeptCode;
    this.cooData.CooBoxData.CusDecOrder = this.cooData.CooBoxData.Header.CusDecOrder;
    this.cooData.CooBoxData.EntityNo = this.cooData.CooBoxData.Header.EntityNo;
  }

  getCooBoxFromServer(key: CooKey, cooMode: CooMode, userID: string) {    
    
    return new Promise((resolve, reject) => { 
      this.webAPI.sendWebAPIRequest("COO/GetCooBoxByEntityNo" , JSON.stringify(key))
      .then((data: { Status: string; result: any }) => {        
        
        if (data.Status === 'OK') {          
          this.cooData = {
            CooBoxData: data.result
          };
          this.cooData.CooBoxData.UserID = userID;
          this.cooData.CooBoxData.CooMode = cooMode.toString();
          this.cooDataSubject$.next(this.cooData);
          resolve('');
        }
        else {
          resolve(data.result);
        }
      });
    });
  }

  async getNonManCer()
  {
    return this.webAPI.sendWebRequest("COO/GetCooHeaderTab",{});
  }

}
