import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {
  IDeclarationData,
  DeclarationDetails,
  DeclarationKeys,
  ExportCustoms,
  DeclarationBox, AssistTable

} from '../models/container';
import { BehaviorSubject, Subject } from 'rxjs';
import { StateSavingMode } from '../../core/enums';
import { CommunicationService } from '../../core/services/communication.service';
import { getTableStateById } from 'projects/dn-infra/src/lib/dp/store/selectors';
import { Store } from '@ngrx/store';
import { updateRow } from 'projects/dn-infra/src/lib/dp/store/actions';

// interface IDeclarationData {
//   dataDeclaration: DeclarationContainer;
//   updatedDeclaration: DeclarationContainer;
// }

@Injectable({
  providedIn: 'root',
})
export class DeclarationService {

  countriesList: AssistTable;
  declarationData: IDeclarationData;
  declarationDataSubject$ = new BehaviorSubject<IDeclarationData>(null);
  customerList: AssistTable;

  constructor(private http: HttpClient, private webAPI: CommunicationService, private store: Store<any>) {}

  setCountries(jsonData: any) {
    this.countriesList = jsonData;
  }

  setCustomers(jsonData: any) {
    this.customerList = jsonData;
  }

  async getCountriesList() {
    return this.sendWebRequest("Assist/GetCustomsCountries", {});
  }

  async getCustomers() {
    return this.sendWebRequest("Assist/GetCustomers", {});
  }

  async sendWebRequest(sURL: string, jsonKey: any) {
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
            //this.cooDataSubject$.next(response.result);
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

  getDeclarationBoxFromServer(key: DeclarationKeys) {

    return new Promise((resolve, reject) => {

      const xhr = new XMLHttpRequest();

      xhr.open(
        'POST',
        environment.apiBaseUrl + 'Declaration/GetDeclarationBox',
        true
      );
      xhr.setRequestHeader('Content-type', 'application/json;');
      xhr.onload = () => {
        if (xhr.status >= 200 && xhr.status < 300) {
          const response = JSON.parse(xhr.response);
          if (response.Status === 'OK') {
            this.declarationData = {
              DeclarationBox: response.result
            };

            if(this.declarationData.DeclarationBox.ExportCustoms.OpenDate != null){
              this.declarationData.DeclarationBox.ExportCustoms.OpenDate =
                new Date(new Date(parseInt(this.declarationData.DeclarationBox.ExportCustoms.OpenDate.toString().substr(6))).toISOString());
            }
           if(this.declarationData.DeclarationBox.ExportCustoms.ETD){
            this.declarationData.DeclarationBox.ExportCustoms.ETD =
              new Date(new Date(parseInt(this.declarationData.DeclarationBox.ExportCustoms.ETD.toString().substr(6))).toISOString());
           }
            
           if(this.declarationData.DeclarationBox.ExportCustoms.ATD){
            this.declarationData.DeclarationBox.ExportCustoms.ATD =
              new Date(new Date(parseInt(this.declarationData.DeclarationBox.ExportCustoms.ATD.toString().substr(6))).toISOString());
           }
           
          if (this.declarationData.DeclarationBox.ReferenceList != null){
            this.declarationData.DeclarationBox.ReferenceList.forEach(x => {    
                if (x.DateAdded != null){
                  x.DateAdded = new Date(new Date(parseInt(x.DateAdded.toString().substr(6))).toISOString());
                }                    
            });
          }

            this.declarationDataSubject$.next(this.declarationData);
            resolve('OK');
            this.setReferencesNewRow()
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

  setReferencesNewRow() {
    const keys: Record<string, any>[] = [
      {'ShipmentNumber': this.declarationData.DeclarationBox.ShipmentNumber},
      {'DeptCode': this.declarationData.DeclarationBox.DeptCode},
      {'CusDecOrder': this.declarationData.DeclarationBox.CusDecOrder},
      {'LineNumber': 0}
    ];

    this.setRowAddedKeys('references', keys);
  }

  setRowAddedKeys(tableId: string, keys: Record<string, any>){
    this.store.select(getTableStateById(tableId)).subscribe((table: any[]) => {
      if(table){      
        const row: any = {...table[table.length - 1]};
        let firstPrimaryKey =  Object.keys(keys[0])[0];
        if (row[firstPrimaryKey] != ''){
          return;
        }
        let isLineNumberKeyExists = false;  
        const lastRow: any = {...table[table.length - 2]};
        const rowIndex = table.length - 1

        Object.values(keys).forEach(x => {
          let primaryKey = Object.keys(x)[0];
          row[primaryKey] = Object.values(x)[0];
          if (primaryKey == 'LineNumber'){
            isLineNumberKeyExists = true;
          }
        });

        if(isLineNumberKeyExists){          
          row.LineNumber = (lastRow.LineNumber == undefined ? 1 : lastRow.LineNumber + 1);
        }        
        this.store.dispatch(updateRow({row, rowIndex, tableId: tableId}));
      }
    });
  }

    // this.store.select(getTableStateById('references')).subscribe((table: any[]) => {
    //   if(table){ 
               
    //     const row: any = {...table[table.length - 1]};
    //     if (row.ShipmentNumber != ''){
    //       return;
    //     }
    //     const lastRow: any = {...table[table.length - 2]};
    //     const rowIndex = table.length - 1
    //     row.ShipmentNumber =  this.declarationData.DeclarationBox.ShipmentNumber;
    //     row.DeptCode =  this.declarationData.DeclarationBox.DeptCode;
    //     row.CusDecOrder =  this.declarationData.DeclarationBox.CusDecOrder;
    //     row.LineNumber = (lastRow == undefined ? 1 : lastRow.LineNumber + 1);
    //     this.store.dispatch(updateRow({row, rowIndex, tableId: 'references'}));
    //   }
    // });

  // createUpdatedDeclaration(declarationParam: any) {
  //   const declaration: DeclarationBox = new DeclarationBox();
  //   declaration.ShipmentNumber = declarationParam.ShipmentNumber;
  //   declaration.DeptCode = declarationParam.DeptCode;
  //   declaration.CusDecOrder = declarationParam.CusDecOrder;
  //   declaration.DeclarationDetails.ShipmentNumber = declarationParam.ShipmentNumber;
  //   declaration.ExportCustoms.CusDecOrder = declarationParam.CusDecOrder;
  //   // delete shipment.Details.State;
  //   return declaration;
  //   // sessionStorage.setItem('currentUpdShipment', JSON.stringify(shipment));
  // }

  getDeclarationDetails() {
    // const declarationDetails: DeclarationDetails =  this.declarationData.dataDeclaration.DeclarationDetails;

    return this.declarationData.DeclarationBox.DeclarationDetails;
  }

  getExportCustoms() {
    const exportCustoms: ExportCustoms = this.declarationData.DeclarationBox.ExportCustoms;

    return exportCustoms;
  }

  setCooBox(jsonDeclarationBox: any) {
    this.declarationData = jsonDeclarationBox;
    this.declarationDataSubject$.next(this.declarationData);
  }

  async updateDeclarationData() {
    this.declarationData.DeclarationBox.DeclarationDetails.State = StateSavingMode.Modified;
    this.declarationData.DeclarationBox.ExportCustoms.State = StateSavingMode.Modified;
    this.declarationData.DeclarationBox.DeclarationAgent.State = StateSavingMode.Modified;
    this.copyKeyFromHeaderToBox();
    return await new Promise((resolve, reject) => {
      this.webAPI.sendWebAPIRequest("Declaration/UpdateDeclarationBox", JSON.stringify(this.declarationData.DeclarationBox))
        .then((response: { Status: string; result: any }) => {
          if (response.Status == "OK") {
            resolve(response.Status);
          }
          else {
            resolve(response.result);
          }
        }
        )
    });
  }

  copyKeyFromHeaderToBox() {
    // this.cooData.CooBoxData.ShipmentNumber = this.cooData.CooBoxData.Header.ShipmentNumber;
    // this.cooData.CooBoxData.DeptCode = this.cooData.CooBoxData.Header.DeptCode;
    // this.cooData.CooBoxData.CusDecOrder = this.cooData.CooBoxData.Header.CusDecOrder;
    // this.cooData.CooBoxData.EntityNo = this.cooData.CooBoxData.Header.EntityNo;
  }
}
