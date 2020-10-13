import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
// import { appInitializerFactory } from '../../app.module';
// import { Injector, APP_INITIALIZER } from '@angular/core';
// import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  // , translate: TranslateService, injector: Injector
  constructor(private router: Router, public translate: TranslateService) { }
  loginUsername = '';
  ngOnInit(): void {
  }

  login() {
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
