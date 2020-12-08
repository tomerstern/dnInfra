import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {
  DeclarationContainer,
  DeclarationDetails,
  ExportCustoms,
} from '../models/container';
import { BehaviorSubject, Subject } from 'rxjs';

interface IDeclarationData {
  dataDeclaration: DeclarationContainer;
  updatedDeclaration: DeclarationContainer;
}

@Injectable({
  providedIn: 'root',
})
export class DeclarationService {

  declarationData: IDeclarationData;
  // declarationContainer: DeclarationContainer;

  declarationDataSubject$ = new BehaviorSubject<IDeclarationData>(null);
  // declarationDataSubject$ = new BehaviorSubject<string>(null);
  // data$ = new BehaviorSubject<IDeclarationData>(null);

  constructor(private http: HttpClient) { }

  getDefaultDeclarationFromServer() {
    // http://localhost/ExportCustomsWebAPI/Shipment/GetDefaultShipment
    this.http
      .get(environment.apiBaseUrl + 'Declaration/GetDefaultDeclarationBox')
      .toPromise()
      .then((data: { Status: string; result: any }) => {
        if (data.Status === 'OK') {
          console.log(data.result);
          this.declarationData = {
            dataDeclaration: data.result,
            updatedDeclaration: this.createUpdatedDeclaration(data.result),
          };
          // this.data$.next(data.result);
          this.declarationDataSubject$.next(this.declarationData);
          // let item = JSON.parse(localStorage.getItem(key));
        }
      });
    // return this.declarationContainer;
  }

  // update(data: IDeclarationData){
  //   // this.declarationDataSubject$.next(data);
  // }

  createUpdatedDeclaration(declarationParam: any) {
    const declaration: DeclarationContainer = new DeclarationContainer();
    declaration.ShipmentNumber = declarationParam.ShipmentNumber;
    declaration.DeptCode = declarationParam.DeptCode;
    declaration.CusDecOrder = declarationParam.CusDecOrder;
    declaration.DeclarationDetails.ShipmentNumber = declarationParam.ShipmentNumber;
    declaration.ExportCustoms.CusDecOrder = declarationParam.CusDecOrder;
    // delete shipment.Details.State;
    return declaration;
    // sessionStorage.setItem('currentUpdShipment', JSON.stringify(shipment));
  }

  getDeclarationDetails() {
    // const declarationDetails: DeclarationDetails =  this.declarationData.dataDeclaration.DeclarationDetails;

    return this.declarationData.dataDeclaration.DeclarationDetails;
  }

  getExportCustoms() {
    const exportCustoms: ExportCustoms = this.declarationData.dataDeclaration
      .ExportCustoms;

    return exportCustoms;
  }
}
