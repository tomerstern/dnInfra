import { Component, OnInit } from '@angular/core';
import {
  TabmenuDefinitions,
  DpMenuItem
} from 'projects/dn-infra/src/lib/dp/components/tabmenu/Objects/tabmenu-definitions';

@Component({
  selector: 'app-tabmenu',
  templateUrl: './tabmenu.component.html',
  styleUrls: ['./tabmenu.component.scss']
})
export class TabmenuComponent implements OnInit {
  constructor() {}

  tabItems: DpMenuItem[];
  tabMenuDefinition: TabmenuDefinitions;

  ngOnInit(): void {
    this.tabItems = [
      { label: 'General', id: 'general', routerLink: 'general' },
      { label: 'Header', id: 'header', routerLink: 'header' },
      { label: 'Details', id: 'details', routerLink: 'details' },
      { label: 'Goods', id: 'goods', routerLink: 'goods' },
      { label: 'Signature', id: 'signature', routerLink: 'signature' },
      { label: 'Non Manip Cert', id: 'nonManipCer', routerLink: 'nonManipCer' }
      
    ];

    this.tabMenuDefinition = new TabmenuDefinitions({
      activeItem: this.tabItems[0]
    });
  }
}
