import { Component, OnInit, Input } from '@angular/core';
import { TabmenuDefinitions } from './Objects/tabmenu-definitions';

@Component({
  selector: 'dp-tabmenu',
  templateUrl: './tabmenu.component.html',
  styleUrls: ['./tabmenu.component.scss']
})
export class TabmenuComponent implements OnInit {

  @Input() definition: TabmenuDefinitions;
  @Input() datasource: any = [];

  constructor() { }

  ngOnInit(): void {
  }

}
