import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-test1',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.scss']
})
export class Test1Component implements OnInit {

  user: { firstName: string, lastName: string };
  strWelcome: string;
  strCity: string;
  strStreet: string;
  constructor(public translate: TranslateService) { }

  ngOnInit(): void {

    this.strWelcome = this.translate.instant('welcomeMessage');

    this.translate.get(['login.city', 'login.street'])
      .subscribe(translations => {
        this.strCity = translations['login.city'];
        this.strStreet = translations['login.street'];
      });


  }

}
