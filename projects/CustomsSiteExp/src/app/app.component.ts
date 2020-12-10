import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'CustomsSiteExp';
  isRtl = false;

  ngOnInit(): void {

    if (localStorage.getItem('dDirection') !== null && localStorage.getItem('dDirection').toLowerCase() === 'rtl') {
      this.isRtl = true;
    }

  }


}


