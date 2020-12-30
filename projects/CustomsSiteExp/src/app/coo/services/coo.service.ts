import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { StateSavingMode } from  '../../core/enums';
import { ICooData,CooKey, CooMode} from '../models/coo';
import { CommunicationService } from '../../core/services/communication.service';
import { AssistTableMin } from '../../shared/models/assist';
import { OperationShipmentData, OperationGoodDetailsData , OperationInvoiceData } from '../../core/models/shipment';

@Injectable({ providedIn: 'root'})

export class CooService {

  cityiesList: AssistTableMin;
  customsOfficeList: AssistTableMin;
  cooTypes: AssistTableMin;    
  cooData: ICooData;
  operationShipmentData: OperationShipmentData;
  operationGoodDetailsData: OperationGoodDetailsData[];
  operationInvoiceData: OperationInvoiceData[];
  cooUpdatedData: any;  
  cooDataSubject$ = new BehaviorSubject<ICooData>(null);
  isDisabled: boolean = false;
    
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

  setCities(jsonData: any)
  {
    this.cityiesList = jsonData;
  }

  setCustomsOffice(jsonData: any)
  {
    this.customsOfficeList = jsonData;
  }

  setOperationShipmentData(jsonData: any)
  {
    this.operationShipmentData = jsonData;
  }

  setOperationGoodDetailsData(jsonData: any)
  {
    this.operationGoodDetailsData = jsonData;
  }
  
  setOperationInvoiceData(jsonData: any)
  {
    this.operationInvoiceData = jsonData;
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

  async getCitesList() {
    return this.webAPI.sendWebRequest("Assist/GetCustomsCities",{});
  }

  async getCustomsOfficeList() {
    return this.webAPI.sendWebRequest("Assist/GetCustomsOffice",{});
  }

  async getOperationShipmentData(key: CooKey) {
    return this.webAPI.sendWebRequest("Shipment/GetOperationShipmentData",key);
  }

  async getOperationGoodDetailsData(key: CooKey) {
    return this.webAPI.sendWebRequest("Shipment/GetOperationGoodDetailsData",key);
  }

  async getOperationInvoiceData(key: CooKey) {
    return this.webAPI.sendWebRequest("Shipment/GetOperationInvoiceData",key);
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
    console.log(key)
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
