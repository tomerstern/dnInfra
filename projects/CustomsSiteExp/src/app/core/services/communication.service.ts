import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CommunicationService {

  constructor() { }

  //  The function always return result
  async sendWebRequest(urlRelativePath: string , dataObject: any) {   
    return await new Promise((resolve, reject) => {
      this.sendWebAPIRequest(urlRelativePath , JSON.stringify(dataObject))
      .then((data: { Status: string; result: any }) => {            
        if (data.Status === 'OK') {          
          resolve(data.result);
        }
        else {
          resolve(data.result);}
        }
    )}
  ); 
  }

  async sendWebAPIRequest(urlRelativePath: string, dataObject: any) {    
    return await new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      // const requestData = { username: userName, password: userPassword };
      xhr.open(
        'POST',
        environment.apiBaseUrl + urlRelativePath,
        true
      );
      xhr.setRequestHeader('Content-type', 'application/json;');
      xhr.onload = () => {
        if (xhr.status >= 200 && xhr.status < 300) {          
          resolve(JSON.parse(xhr.response));
        } else {
          reject({
            Status: xhr.status,
            statusText: xhr.statusText,
          });
        }
      };
      xhr.onerror = () => {
        reject({
          Status: xhr.status,
          statusText: xhr.statusText,
        });
      };
      xhr.send(dataObject);
    });
    
  }



  RunQuery(P1, p2Temp) {

        const P2 = this.deleteUndefinedClassProperties(p2Temp);
        return new Promise((resolve, reject) => {
          const xhr = new XMLHttpRequest();
          const requestData = { p1: P1, p2: JSON.stringify(P2)  };
          xhr.open('POST', environment.apiBaseUrl + 'General/RunQuery', true);
          xhr.setRequestHeader('Content-type', 'application/json;');
          xhr.onload = () => {
            if (xhr.status >= 200 && xhr.status < 300) {          
              console.log('in resolve before JSON.pars');
              console.log(xhr.response);
  
              const data = JSON.parse(xhr.response)
              if (data.Status ==='OK') {
                // check if empty  // result = new object()
                // because Object.keys(new Date()).length === 0;
                // we have to do some additional check
                // Object.keys(obj).length === 0 && obj.constructor === Object
                if(Object.keys(data.result).length === 0 && data.result.constructor === Object) {
                  data.result = undefined;
                  resolve(data);
                }
                else
                {
                  resolve(JSON.parse(xhr.response));
                }
              }
              
    
    
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
    


  convertObjectValueToString(objParam) {
    if (objParam === undefined) {
      return '';
    }
    const typeOfData = typeof objParam;
    if (typeOfData === 'object') {
      const vals = Object.values(objParam);
      let retParams = vals.length ? ("'" + vals.join("','") + "'") : '';
      // retParams = retParams.toString();
      return retParams;
    }
    else {
      return '';
    }
  }



  deleteUndefinedClassProperties(paramList) {
    if (paramList === undefined) {
      return '';
    }
    const typeOfData = typeof paramList;
    if (typeOfData === 'object') {

      Object.keys(paramList).forEach(key => {
        if (paramList[key] === undefined || paramList[key] === '') {
          delete paramList[key];
        }
      });
      return paramList;
    }
    else {
      return '';
    }
  }

}
