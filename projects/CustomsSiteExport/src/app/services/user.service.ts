import { environment } from '../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) {}

  getUser(userName: string, userPassword: string)
  {
    var user: User;
    const requestData = { username: userName, password: userPassword};
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          console.log(xhr.responseText);
          // return xhr.responseText;
          // if (xhr.responseText.Status === 'OK') {
          //   user = xhr.responseText.result;
          // }
        } else {
          //  Print Error
           console.log(xhr.statusText);
           console.log(xhr.responseText);
           // return 'error';
        }
      }
      //return user;
    };
    xhr.open('POST', environment.apiBaseUrl + 'User/GetUser', true);
    xhr.setRequestHeader('Content-type', 'application/json;');
    xhr.send(JSON.stringify(requestData));
  }

  async getUserByQueryString(userName: string, userPassword: string) {
    let user: User;
    this.http
      .get(environment.apiBaseUrl + 'User/GetUser?username=' + userName + '&password=' + userPassword)
      .toPromise()
      .then((data: { Status: string; result: any }) => {
        if (data.Status === 'OK') {
          user = data.result;
          return user;
        }
      });
  }

  async getActivewDirectoryUserByQueryString(userName: string, userPassword: string) {
    let user: User;
    this.http
      .get('http://import-iis-dev:8087/FCServices/WebServices/ActiveDirectory.asmx/IsUserValid?sUserName=gilsc&sPassword=test&sDomain=flying-cargo.fco')
      .toPromise()
      .then((data: { Status: string; result: any }) => {
        debugger;
        if (data.Status === 'OK') {
          user = data.result;
          return user;
        }
      });
  }

}
