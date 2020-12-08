import { Component, OnInit } from '@angular/core';
import { TabmenuDefinitions, DpMenuItem } from 'projects/dn-infra/src/lib/dp/components/tabmenu/Objects/tabmenu-definitions';

@Component({
  selector: 'app-tabmenu',
  templateUrl: './tabmenu.component.html',
  styleUrls: ['./tabmenu.component.scss']
})
export class TabmenuComponent implements OnInit {

  constructor() { }

  tabItems: DpMenuItem[];
  tabMenuDefinition: TabmenuDefinitions;

  ngOnInit(): void {
    this.tabItems = [
      { label: 'Open', id: 'decTabOpen', routerLink: 'decTabOpen' },
      { label: 'Declaration', id: 'decTabDeclaration', routerLink: 'decTabDeclaration' },
      { label: 'Declaration 2', id: 'decTabDeclaration2', routerLink: 'decTabDeclaration2' }];

    this.tabMenuDefinition = new TabmenuDefinitions({ activeItem: this.tabItems[1] });
  }
}
