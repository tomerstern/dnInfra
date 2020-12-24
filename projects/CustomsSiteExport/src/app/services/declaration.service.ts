import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DeclarationContainer, DeclarationDetails, ExportCustom } from '../models/declaration/container';
import { BehaviorSubject, Subject } from 'rxjs';
import { getTableStateById } from 'projects/dn-infra/src/lib/dp/store/selectors';
import { Store } from '@ngrx/store';


interface IDeclarationData {
  dataDeclaration: DeclarationContainer;
  updatedDeclaration: DeclarationContainer;
}

@Injectable({
  providedIn: 'root'
})
export class DeclarationService {

  declarationData: IDeclarationData;
  declarationContainer: DeclarationContainer;
  declarationDataSubject = new BehaviorSubject<string>(null);

  constructor(private http: HttpClient, private store: Store<any>) {


   }

  getDefaultDeclarationFromServer() {
    this.http
      .get(environment.apiBaseUrl + 'Declaration/GetDefaultDeclarationContainer')
      .toPromise()
      .then((data: { Status: string; result: any }) => {
        if (data.Status === 'OK') {
          debugger;
          // this.declarationContainer = data.result;
          this.declarationData = {
            dataDeclaration: data.result,
            updatedDeclaration: this.createUpdatedDeclaration(data.result),
          };
          this.declarationDataSubject.next(data.Status);
          // let item = JSON.parse(localStorage.getItem(key));
        }
      });
    // return this.declarationContainer;
  }

  createUpdatedDeclaration(declarationParam: any) {
    const declaration: DeclarationContainer = new DeclarationContainer();
    declaration.ShipmentNumber = declarationParam.ShipmentNumber;
    declaration.DeptCode = declarationParam.DeptCode;
    declaration.CusDecOrder = declarationParam.CusDecOrder;

    declaration.DeclarationDetails.ShipmentNumber = declarationParam.ShipmentNumber;
    declaration.ExportCustom.CusDecOrder = declarationParam.CusDecOrder;
    // delete shipment.Details.State;
    return declaration;
    //sessionStorage.setItem('currentUpdShipment', JSON.stringify(shipment));
  }

  getDeclarationDetails() {
    const declarationDetails: DeclarationDetails =
      this.declarationData.dataDeclaration.DeclarationDetails;

    return declarationDetails;
  }

  getExportCustom() {
    const exportCustom: ExportCustom =
      this.declarationData.dataDeclaration.ExportCustom;

    return exportCustom;
  }
}
