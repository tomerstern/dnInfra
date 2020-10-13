import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { TabmenuDefinitions, DpMenuItem } from 'projects/dn-infra/src/lib/dp/components/tabmenu/Objects/tabmenu-definitions';

@Component({
  selector: 'app-tabmenutest',
  templateUrl: './tabmenutest.component.html',
  styleUrls: ['./tabmenutest.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TabmenutestComponent implements OnInit {


  items1: DpMenuItem[];
  items2: DpMenuItem[];
  items3: DpMenuItem[];

  tabmenuDefinition1: TabmenuDefinitions;
  tabmenuDefinition2: TabmenuDefinitions;
  tabmenuDefinition3: TabmenuDefinitions;
  constructor() { }

  ngOnInit(): void {
    this.getDefinitions();
    this.getData();
  }

  getDefinitions() {
    this.tabmenuDefinition1 = new TabmenuDefinitions({});
    this.tabmenuDefinition2 = new TabmenuDefinitions({});
    // this.tabmenuDefinition2 = new TabmenuDefinitions({activeItem: this.items2[2]});
  }

  getData() {
    this.items1 = [
      { label: 'Tab 1', icon: 'pi pi-fw pi-chart-bar', routerLink: 'page1old' },
      { label: 'Tab 2', icon: 'pi pi-fw pi-calendar', routerLink: 'page2old' },
      { label: 'Tab 3', icon: 'pi pi-fw pi-share-alt', routerLink: 'page3old' }
    ];

    this.items2 = [
      { label: 'Air Import', id: 'idTabmenuItem1', routerLink: 'page1new' },
      { label: 'Ocean Import', id: 'idTabmenuItem2', routerLink: 'page2new' },
      { label: 'Ocean Export', id: 'idTabmenuItem3', routerLink: 'page3new' },

      // { label: 'Drop', id: 'idTabmenuItem4', routerLink: '[{ outlets: { third: ["tabmenulink4"] } }]' },
      // { label: 'aaaa', id: 'aaaa', routerLink: 'page1new(third:tabmenulink4)' },

            // { label: 'Drop', id: 'idTabmenuItem4', routerLink: '[/(third:tabmenulink4)]' },
      // { label: 'Drop', id: 'idTabmenuItem4', url: '/(third:tabmenulink4)' },/*working*/
      // { label: 'Drop', id: 'idTabmenuItem4', routerLink: '(third:tabmenulink4)' },
    ];
  }

}
