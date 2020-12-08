import { Component, OnInit } from '@angular/core';
import { TabmenuDefinitions, DpMenuItem } from 'projects/dn-infra/src/lib/dp/components/tabmenu/Objects/tabmenu-definitions';

@Component({
  selector: 'app-declaration-tab',
  templateUrl: './declaration-tab.component.html',
  styleUrls: ['./declaration-tab.component.scss']
})
export class DeclarationTabComponent implements OnInit {

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
