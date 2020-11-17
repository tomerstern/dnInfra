
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

  username = 'gil';
  password = 'test123';
  loginUsername = '';


  btnLoginDef: ButtonDefinitions;
  ngOnInit(): void {
    sessionStorage.setItem('dpUserID', '');

    this.btnLoginDef = new ButtonDefinitions({ label: 'LOGIN' });
  }





  login() {
    // debugger;
    // const res = this.userService.getLoginUser('gil', 'pass');
    this.userService.getLoginUser(this.username, this.password)
      // .then(data => {
      .then((data: { Status: string; result: any }) => {
        // debugger
        if (data.Status !== 'OK') {
          return;
        }

        sessionStorage.setItem('dpUserID', data.result.UserId);

        const Currentlang = this.setLang(data.result.Language);

        this.translate.use(Currentlang).subscribe(() => {
          this.router.navigate(['/home']); /* Success */
        }, err => {
          console.error(`Problem Init '${Currentlang}' language'`);
        }, () => {
          // resolve(null);
        });

      });




    // let Currentlang = 'en';
    // if (this.loginUsername === 'user_ru') {
    //   localStorage.setItem('dpGLang', 'ru');
    //   Currentlang = 'ru';
    // }
    // else if (this.loginUsername === 'user_he') {
    //   localStorage.setItem('dpGLang', 'he');
    //   Currentlang = 'he';
    // }
    // else {
    //   localStorage.setItem('dpGLang', 'en');
    // }

    // this.translate.use(Currentlang).subscribe(() => {
    //   this.router.navigate(['/test1']); /* Success */
    // }, err => {
    //   console.error(`Problem Init '${Currentlang}' language'`);
    // }, () => {
    //   // resolve(null);
    // });

  }



  setLang(TempLanguage): string {
    let Currentlang = 'he';
    if (TempLanguage !== undefined) {
      TempLanguage = TempLanguage.toLowerCase();
    }
    if (TempLanguage === undefined || TempLanguage === '' || TempLanguage === 'he' || TempLanguage === 'he-il') {
      localStorage.setItem('dpGLang', 'he');
      Currentlang = 'he';
    }
    else if (TempLanguage === 'en' || TempLanguage === 'en-us') {
      localStorage.setItem('dpGLang', 'en');
      Currentlang = 'en';
    }
    else if (TempLanguage === 'ru') {
      localStorage.setItem('dpGLang', 'ru');
      Currentlang = 'ru';
    }
    else {
      localStorage.setItem('dpGLang', 'he');
      Currentlang = 'he';
    }
    return Currentlang;
  }


}




