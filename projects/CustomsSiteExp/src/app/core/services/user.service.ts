
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from '../../../environments/environment';
import { User } from '../../shared/models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) { }

  getUser(userName: string, userPassword: string) {
    var user: User;
    const requestData = { username: userName, password: userPassword };
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

  // async getActivewDirectoryUserByQueryString(userName: string, userPassword: string) {
  //   let user: User;
  //   this.http
  //     .get('http://import-iis-dev:8087/FCServices/WebServices/ActiveDirectory.asmx/IsUserValid?sUserName=gilsc&sPassword=test&sDomain=flying-cargo.fco')
  //     .toPromise()
  //     .then((data: { Status: string; result: any }) => {
  //       debugger;
  //       if (data.Status === 'OK') {
  //         user = data.result;
  //         return user;
  //       }
  //     });
  // }



  // getLoginUser(userName: string, userPassword: string) {
  //   var user: User;
  //   const requestData = { username: userName, password: userPassword };
  //   const xhr = new XMLHttpRequest();
  //   xhr.onreadystatechange = () => {
  //     if (xhr.readyState === 4) {
  //       if (xhr.status === 200) {
  //         // console.log(xhr.responseText);
  //         return xhr.responseText;
  //         // if (xhr.responseText.Status === 'OK') {
  //         //   user = xhr.responseText.result;
  //         // }
  //       } else {
  //         //  Print Error
  //         console.log(xhr.statusText);
  //         console.log(xhr.responseText);
  //         return 'error';
  //       }
  //     }
  //     //return user;
  //   };
  //   xhr.open('POST', environment.apiBaseUrl + 'User/getLoginUser', true);
  //   xhr.setRequestHeader('Content-type', 'application/json;');
  //   xhr.send(JSON.stringify(requestData));
  // }


  getLoginUser(userName: string, userPassword: string) {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      const requestData = { username: userName, password: userPassword };
      xhr.open('POST', environment.apiBaseUrl + 'User/getLoginUser', true);
      xhr.setRequestHeader('Content-type', 'application/json;');
      xhr.onload = () => {
        if (xhr.status >= 200 && xhr.status < 300) {
          // resolve(xhr.response);
          resolve(JSON.parse(xhr.response));
        } else {
          reject({
            status: xhr.status,
            statusText: xhr.statusText
          });
        }
      };
      xhr.onerror = () => {
        reject({
          status: xhr.status,
          statusText: xhr.statusText
        });
      };
      xhr.send(JSON.stringify(requestData));
    });
  }


  // xhr.setRequestHeader("Access-Control-Allow-Origin", "*")
  // xhr.setRequestHeader("Access-Control-Allow-Methods", "DELETE, POST, GET, OPTIONS")
  // xhr.setRequestHeader("Access-Control-Allow-Headers", "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With")


  GetUserMenus(userId: number, InitPath: string) {
    if (userId === null ){
      return;
      userId = 0;
    }
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      const requestData = { userid: userId, initpaths: InitPath };
      xhr.open('POST', environment.apiBaseUrl + 'User/GetUserMenus', true);
      // xhr.withCredentials = false;
      xhr.setRequestHeader('Content-type', 'application/json;');
      // xhr.setRequestHeader('Access-Control-Allow-Headers', '*');
      xhr.onload = () => {
        if (xhr.status >= 200 && xhr.status < 300) {
           // resolve(xhr.response);
          //  var posts = JSON.parse(xhr.responseText);
          //  posts.forEach(function (post) {
          //    var title = post.title;
          //    var content = post.content;
          //  });
          console.log('in resolve before JSON.parse menu');
          console.log(xhr.response);
          resolve(JSON.parse(xhr.response));
          // resolve({
          //   status: xhr.status,
          //   statusText: xhr.statusText
          // });
        } else {
          reject({
            status: xhr.status,
            statusText: xhr.statusText
          });
        }
      };
      xhr.onerror = () => {
        reject({
          status: xhr.status,
          statusText: xhr.statusText
        });
      };
      xhr.send(JSON.stringify(requestData));
    });
  }


  // sp_General(SpName: string, Params: string) {

  //   return new Promise((resolve, reject) => {
  //     const xhr = new XMLHttpRequest();
  //     const requestData = { spname: SpName, params: Params };
  //     xhr.open('POST', environment.apiBaseUrl + 'User/sp_General', true);
  //     xhr.setRequestHeader('Content-type', 'application/json;');

  //     xhr.onload = () => {
  //       if (xhr.status >= 200 && xhr.status < 300) {
  //         resolve(JSON.parse(xhr.response));

  //       } else {
  //         reject({
  //           status: xhr.status,
  //           statusText: xhr.statusText
  //         });
  //       }
  //     };
  //     xhr.onerror = () => {
  //       reject({
  //         status: xhr.status,
  //         statusText: xhr.statusText
  //       });
  //     };
  //     xhr.send(JSON.stringify(requestData));
  //   });
  // }





}
