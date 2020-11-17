import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.scss']
})
export class LanguageComponent implements OnInit {

  constructor(public translate: TranslateService) { }

  ngOnInit(): void {

  }

  changeLang(langSelect) {
    if (langSelect === 'he') {
      localStorage.setItem('dDirection', 'rtl');
    }
    else {
      localStorage.setItem('dDirection', 'ltr');
    }
    localStorage.setItem('dpGLang', langSelect);
    window.location.reload();
  }
}
