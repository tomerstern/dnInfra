
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { ButtonDefinitions } from 'projects/dn-infra/src/lib/dp/components/button/objects/button-definitions';
import { UserService } from '../../services/user.service';
// import { appInitializerFactory } from '../../app.module';
// import { Injector, APP_INITIALIZER } from '@angular/core';
// import { TranslateService } from '@ngx-translate/core';

import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {
  // , translate: TranslateService, injector: Injector

  constructor(private router: Router, public translate: TranslateService, private userService: UserService, private http: HttpClient) { }

  loginUsername = '';
  btnLoginDef: ButtonDefinitions;
  ngOnInit(): void {
    this.btnLoginDef = new ButtonDefinitions({ label: 'LOGIN' });
  }





  login() {
    // debugger;
    // const res = this.userService.getLoginUser('gil', 'pass');
    this.userService.getLoginUser('FEDEX', 'FEDEX').then(data => {
      console.log('gil');
      console.log(data);
    });

    // if (LoginUser === undefined) {
    //   alert('No Permission');
    //   return;
    // }
 
    let Currentlang = 'en';
    if (this.loginUsername === 'user_ru') {
      localStorage.setItem('dpGLang', 'ru');
      Currentlang = 'ru';
    }
    else if (this.loginUsername === 'user_he') {
      localStorage.setItem('dpGLang', 'he');
      Currentlang = 'he';
    }
    else {
      localStorage.setItem('dpGLang', 'en');
    }

    this.translate.use(Currentlang).subscribe(() => {
      this.router.navigate(['/test1']); /* Success */
    }, err => {
      console.error(`Problem Init '${Currentlang}' language'`);
    }, () => {
      // resolve(null);
    });

  }


}

  // test4() {

  //   const xhr = new XMLHttpRequest();
  //   xhr.onreadystatechange = () => {
  //     if (xhr.readyState === 4) {
  //       if (xhr.status === 200) {
  //         console.log(xhr.responseText);
  //       } else {
  //          console.log(xhr.statusText);
  //          console.log(xhr.responseText);
  //       }
  //     }
  //   };
  //   const params = {sUserName : 'test', sPassword : 'test', sDomain: 'flying-cargo.fco'};
  //   xhr.open('POST', 'http://import-iis-dev:8087/FCServices/WebServices/ActiveDirectory.asmx/IsUserValid', true);
  //   xhr.setRequestHeader('Content-type', 'application/json;');
  //   xhr.send(JSON.stringify(params));
  // }





