import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Customer } from '../models/customer';

@Injectable()
export class CustomerService {
    constructor(private http: HttpClient) { }

    getCustomersLarge() {
        return this.http.get<any>('assets/customers-large.json')
            .toPromise()
            .then(res => <Customer[]>res.data)
            .then(data => data);
    }


    //let allUsers = await this.httpclient.get<ISuser[]>(environment.apiBaseUrl + "users").toPromise();
    //return this.httpClient.get(`https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${this.API_KEY}`);

    // async getRealCustomers() {
    //     this.http.get('http://localhost/ExportCustomsWebAPI/Shipment/Get').toPromise().then((data: {Status: string}) => {
    //         if (data.Status === 'OK')
    //         {
    //             data.
    //         }
    //     })
    // }

    saveCustomers(customers: any) {
        console.log('The data saved');
        console.log(customers);
    }
}
