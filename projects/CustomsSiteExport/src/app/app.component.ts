
import { Component, OnInit } from '@angular/core';
import { CalendarDefinitions } from 'projects/dn-infra/src/lib/dp/components/calendar/objects/calendar-definitions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'CustomsSiteExport';

  calendarData1: Date;
  calendarDefinitions: CalendarDefinitions;

  ngOnInit(): void {

    this.calendarDefinitions = new CalendarDefinitions({
      minDate: new Date(2019, 6, 12), showTime: false
    });
    this.calendarData1 = new Date();
  }


}
