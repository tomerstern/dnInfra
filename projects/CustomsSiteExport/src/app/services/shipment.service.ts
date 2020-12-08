import { environment } from '../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { Shipment, ShipmentDetail } from '../models/shipment';
import { ShipmentGP } from '../models/shipment';
import { ShipmentG7 } from '../models/shipment';
import { ShipmentTemp } from '../models/shipment';
import { BehaviorSubject, Subject } from 'rxjs';

interface iShipmentData {
  dataShipment: Shipment;
  updShipment: Shipment;
}

@Injectable({
  providedIn: 'root',
})
export class ShipmentService {
  shipmentData: iShipmentData;

  shipmentDataSubject = new BehaviorSubject<string>(null);
  // shipmentDataSubject = new BehaviorSubject<iShipmentData>(null);

  constructor(private http: HttpClient, public datepipe: DatePipe) {}

  get_data(url) {
    return this.http
      .get<any>(url) /*'assets/users.json'*/
      .toPromise()
      .then((res) => res.data as any[])
      .then((data) => data);
  }

  getShipmentFromServer() {
    // this.http.get('http://localhost/ExportCustomsWebAPI/Shipment/GetShipmentByKey').toPromise().then((data: {Status: string}) => {
    // .get(environment.apiBaseUrl + 'Shipment/GetDefaultShipment')
    // .get(environment.apiBaseUrl + 'Shipment/GetDefaultShipmentWithBigData')
    this.http
      .get(environment.apiBaseUrl + 'Shipment/GetDefaultShipment')
      .toPromise()
      .then((data: { Status: string; result: any }) => {
        if (data.Status === 'OK') {
          // const shipObject: iShipmentData = {
          this.shipmentData = {
            dataShipment: data.result,
            updShipment: this.createUpdatedShipment(data.result),
          };
          // this.shipmentDataSubject.next(this.shipmentData);
          this.shipmentDataSubject.next(data.Status);
          // sessionStorage.setItem('currentShipment', JSON.stringify(data.result));
          // this.createUpdatedShipment(data.result);
          // let item = JSON.parse(localStorage.getItem(key));
          // shipment = data.result;
        }
      });
    return;
  }

  createUpdatedShipment(shipmentParam: any) {
    const shipment: Shipment = new Shipment();
    shipment.ShipmentNumber = shipmentParam.ShipmentNumber;
    shipment.Dept_Code = shipmentParam.Dept_Code;
    shipment.Shlifa_Order = shipmentParam.Shlifa_Order;

    shipment.Details.ShipmentNumber = shipmentParam.ShipmentNumber;
    shipment.Details.Dept_Code = shipmentParam.Dept_Code;
    shipment.Details.Shlifa_Order = shipmentParam.Shlifa_Order;
    delete shipment.Details.State;
    return shipment;
    // sessionStorage.setItem('currentUpdShipment', JSON.stringify(shipment));
  }

  getShipmentDetails() {
    const shipmentDetail: ShipmentDetail = this.shipmentData.dataShipment
      .Details;
    // if (sessionStorage.getItem('currentShipment') !== null) {
    //   shipmentDetail = JSON.parse(sessionStorage.getItem('currentShipment'))
    //     .Details;
    // }
    return shipmentDetail;
  }

  getGPList() {
    let listGP: ShipmentGP[];
    // const listGP: ShipmentGP[] = this.shipmentData.dataShipment.GPLines;
    // if (sessionStorage.getItem('currentShipment') != null) {
    //   listGP = JSON.parse(sessionStorage.getItem('currentShipment')).GPLines;
    // }
    return listGP;
  }

  getG7List() {
    let listG7: ShipmentG7[];
    //const listG7: ShipmentG7[] = this.shipmentData.dataShipment.G7Lines;
    // if (sessionStorage.getItem('currentShipment') != null) {
    //   listG7 = JSON.parse(sessionStorage.getItem('currentShipment')).G7Lines;
    // }
    return listG7;
  }

  getGTList() {
    let GTLines: ShipmentTemp[];
    // const GTLines: ShipmentTemp[] = this.shipmentData.dataShipment.GTLines;
    // if (sessionStorage.getItem('currentShipment') != null) {
    //   GTLines = JSON.parse(sessionStorage.getItem('currentShipment')).GTLines;
    // }
    //  element.TM_Date = this.datepipe.transform(new Date(parseInt(elemen/t.TM_Date.substr(6))), 'dd/MM/yyyy');
    // GTLines.forEach((element) => {
    //   // tslint:disable-next-line: radix
    //   element.TM_Date = new Date(
    //     parseInt(element.TM_Date.toString().substr(6))
    //   );
    //   // element.TM_State = JSON.parse("{ name: 'BBB', code: 'T2' }");
    // });
    return GTLines;
  }

  updateShipment(shipment: any) {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      // const requestData = { username: userName, password: userPassword };
      xhr.open(
        'POST',
        environment.apiBaseUrl + '/Shipment/UpdateShipment',
        true
      );
      xhr.setRequestHeader('Content-type', 'application/json;');
      xhr.onload = () => {
        if (xhr.status >= 200 && xhr.status < 300) {
          // resolve(xhr.response);
          if (JSON.parse(xhr.response).Status === 'OK') {
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
      xhr.send(JSON.stringify(shipment));
    });
  }

  /*
  updateShipment(shipment: any) {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          console.log(xhr.responseText);
          this.getShipmentFromServer();
        } else {
           console.log(xhr.statusText);
           console.log(xhr.responseText);
        }
      }
    };
    xhr.open('POST', environment.apiBaseUrl + '/Shipment/UpdateShipment', true);
    xhr.setRequestHeader('Content-type', 'application/json;');
    xhr.send(JSON.stringify(shipment));
  }
  */

  updateG7(changes: ShipmentG7[]) {
    // const headers = new Headers();
    // headers.append('Content-Type', 'application/json');
    // const options = new RequestOptions({ headers: headers });

    // fetch('http://10.91.133.115/ExportCustomsWebAPI/Shipment/UpdateOneG7', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(changes[0]),
    // })
    // .then((response) => response.json())
    // .then((data) => {
    //   console.log('Success:', data);
    // })
    // .catch((error) => {
    //   console.error('Error:', error);
    // });

    // this.http.post('http://localhost/ExportCustomsWebAPI/Shipment/UpdateOneG7', JSON.stringify(changes[0]), { headers }).toPromise()

    // .post(
    //   'http://localhost/ExportCustomsWebAPI/Shipment/UpdateOneG7',
    //   JSON.stringify(changes[0]),
    // )
    // .toPromise()
    // .then((data) => {
    //   console.log(data);
    // })
    // .catch((err) => {
    //   console.log(err);
    // });

    // const header: HttpHeaders = new HttpHeaders();
    // header.append('Content-Type', 'application/json');

    // console.log(header);
    // this.http
    //   .post(
    //     'http://10.91.133.115/ExportCustomsWebAPI/Shipment/UpdateStringG7',
    //     JSON.stringify(reqData),
    //     { headers: header }
    //   )
    //   .subscribe((x) => {
    //     console.log(x);
    //   });

    //  FIRST Version
    // const reqData = { testObj: 'test5' };
    // const xhr = new XMLHttpRequest();
    // xhr.onreadystatechange = () => {
    //   if (xhr.readyState === 4) {
    //     if (xhr.status === 200) {
    //       console.log(xhr.responseText);
    //     } else {
    //        console.log(xhr.statusText);
    //        console.log(xhr.responseText);
    //     }
    //   }
    // };
    // xhr.open('POST', 'http://10.91.133.115/ExportCustomsWebAPI/Shipment/UpdateStringG7', true);
    // xhr.setRequestHeader('Content-type', 'application/json;');
    // console.log(xhr);
    // xhr.send(JSON.stringify(reqData));
    //  FIRST Version

    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          console.log(xhr.responseText);
        } else {
          console.log(xhr.statusText);
          console.log(xhr.responseText);
        }
      }
    };
    // xhr.open('POST', 'http://10.91.133.115/ExportCustomsWebAPI/Shipment/UpdateOneG7', true);
    xhr.open('POST', environment.apiBaseUrl + 'Shipment/UpdateG7', true);
    xhr.setRequestHeader('Content-type', 'application/json;');
    xhr.send(JSON.stringify(changes));
    // xhr.send(JSON.stringify(changes[0]));
  }
}
