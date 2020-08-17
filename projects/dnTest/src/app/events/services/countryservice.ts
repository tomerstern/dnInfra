import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Country } from '../models/customer';


import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class CountryService {
    constructor(private http: HttpClient) { }

    getCountries() {
        return this.http.get<any>('assets/countries.json')
            .toPromise()
            .then(res => <Country[]>res.data)
            .then(data => data);
    }


    get_tbl_WorldCities_100k() {
        return this.http.get<any>('assets/cities_100k.json')
            .toPromise()
            .then(res => <Country[]>res.data)
            .then(data => data);
    }

    get_data(url) {
        return this.http.get<any>(url) /*'assets/users.json'*/
            .toPromise()
            .then(res => <any[]>res.data)
            .then(data => data);
    }
    // get_data(url: string) {
    //     return this.http.get<any>(url)
    //         .toPromise()
    //         .then(res => <any[]>res.data)
    //         .then(data => data);
    // }
    /*
  getTodos(): Observable<Todo[]> {
    const Url = `https://jsonplaceholder.typicode.com/todos`;
    return this.http.get(Url).pipe(map((response: Todo[]) => response));
  };
 */

}

