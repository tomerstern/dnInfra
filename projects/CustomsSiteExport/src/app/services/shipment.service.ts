import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ShipmentDetail } from '../models/shipment';
import { ShipmentGP } from '../models/shipment';
import { ShipmentG7 } from '../models/shipment';

@Injectable({
  providedIn: 'root'
})
export class ShipmentService {

  constructor(private http: HttpClient) { }

  get_data(url) {
    return this.http.get<any>(url) /*'assets/users.json'*/
      .toPromise()
      .then(res => res.data as any[])
      .then(data => data);
  }

  async getShipmentFromServer() {
    let shipment: any;
    // this.http.get('http://localhost/ExportCustomsWebAPI/Shipment/GetShipmentByKey').toPromise().then((data: {Status: string}) => {
    this.http.get('http://localhost/ExportCustomsWebAPI/Shipment/GetShipmentByKey').
      toPromise().then((data: { Status: string, result: any }) => {
        if (data.Status === 'OK') {
          sessionStorage.setItem('currentShipment', JSON.stringify(data.result));
          // let item = JSON.parse(localStorage.getItem(key));
          shipment = data.result;
        }
      });
  }

  getShipmentDetails() {
    let shipmentDetail: ShipmentDetail;
    if (sessionStorage.getItem('currentShipment') != null) {
      shipmentDetail = JSON.parse(sessionStorage.getItem('currentShipment')).Details;
    }
    return shipmentDetail;
  }

  getGPList() {
    let listGP: ShipmentGP[];
    if (sessionStorage.getItem('currentShipment') != null) {
      listGP = JSON.parse(sessionStorage.getItem('currentShipment')).GPLines;
    }
    return listGP;
  }

  getG7List() {
    let listG7: ShipmentG7[];
    if (sessionStorage.getItem('currentShipment') != null) {
      listG7 = JSON.parse(sessionStorage.getItem('currentShipment')).G7Lines;
    }
    return listG7;
  }

  save(changes: any[]) {
    this.http.post('http://10.91.133.115/ExportCustomsWebAPI/Shipment/GetG7', changes).toPromise().then(data => {
      console.log(data);
    }).catch(err => { console.log(err); });
  }

  // getCustomersLarge() {
  //   return this.http.get<any>('assets/customers-large.json')
  //       .toPromise()
  //       .then(res => <Customer[]>res.data)
  //       .then(data => data);
  // }

  // async getRealCustomers() {
  //     this.http.get('http://localhost/ExportCustomsWebAPI/Shipment/Get').toPromise().then((data: {Status: string}) => {
  //         if (data.Status === 'OK')
  //         {
  //             data.
  //         }
  //     })
  // }
}
