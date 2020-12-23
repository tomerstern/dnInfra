import { Component, OnInit } from '@angular/core';
import { TabmenuDefinitions, DpMenuItem } from 'projects/dn-infra/src/lib/dp/components/tabmenu/Objects/tabmenu-definitions';
import { Subject } from 'rxjs';
@Component({
  selector: 'app-tabmenu',
  templateUrl: './tabmenu.component.html',
  styleUrls: ['./tabmenu.component.scss']
})
export class TabmenuComponent implements OnInit {

  constructor() { }

  eventsSubject: Subject<void> = new Subject<void>();
  direction: string;

  ngOnInit(): void {
    this.direction = localStorage.getItem('dDirection');    
  }
  saveData(data)
  {
      alert("coo comp. saving this data from tab:  " +  JSON.stringify(data));
  }
}
