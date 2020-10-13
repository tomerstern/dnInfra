import { Component, OnInit, Injector, ViewEncapsulation } from '@angular/core';
import { MenubarDefinitions, DpMenuItem } from 'projects/dn-infra/src/lib/dp/components/menubar/Objects/menubar-definitions';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit {


  // constructor() { }
  constructor() { }
  menubarDefinition1: MenubarDefinitions;
  items1: DpMenuItem[];
  strWelcome: string;
  strStreet: string;
  res: any;
  ngOnInit(): void {

    this.getDefinitions();
    this.getData();


  }


  getDefinitions() {
    this.menubarDefinition1 = new MenubarDefinitions({});
  }

  getData() {

    this.items1 = [
      {
        label: 'Menu',
        items: [
          {
            label: 'Translate Form',
            routerLink: ['/test1']
          },
          {
            label: 'Translate Table',
            routerLink: ['/test2']
          },
          {
            label: 'zeplin Design',
            routerLink: ['/test3']
          },
          {
            label: 'fontawesome',
            routerLink: ['/test4']
          },
        ],
      }
      ,
      {
          label: 'Another Page',
          routerLink: ['/test3']
      },
      {
        label: 'And Another',
        routerLink: ['/test3']
    },
    ];

  }


}



