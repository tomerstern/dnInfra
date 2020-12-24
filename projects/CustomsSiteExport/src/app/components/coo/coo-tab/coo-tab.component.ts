import { Component, OnInit } from '@angular/core';
import { TabmenuDefinitions, DpMenuItem } from 'projects/dn-infra/src/lib/dp/components/tabmenu/Objects/tabmenu-definitions';

@Component({
  selector: 'app-coo-tab',
  templateUrl: './coo-tab.component.html',
  styleUrls: ['./coo-tab.component.scss']
})
export class CooTabComponent implements OnInit {

  constructor() { }

  tabItems: DpMenuItem[];
  tabMenuDefinition: TabmenuDefinitions;

  ngOnInit(): void {
    this.tabItems = [
      { label: 'General', id: 'any', routerLink: 'general'},
      { label: 'Header', id: 'header', routerLink: 'header' }];

    this.tabMenuDefinition = new TabmenuDefinitions({ activeItem: this.tabItems[0] });
  }
}
