import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MenubarDefinitions, DpMenuItem } from 'projects/dn-infra/src/lib/dp/components/menubar/Objects/menubar-definitions';

@Component({
  selector: 'app-menubartest',
  templateUrl: './menubartest.component.html',
  styleUrls: ['./menubartest.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MenubartestComponent implements OnInit {

  constructor() { }

  menubarDefinition1: MenubarDefinitions;
  menubarDefinition2: MenubarDefinitions;
  menubarDefinition3: MenubarDefinitions;


  items0: DpMenuItem[];
  items1: DpMenuItem[];
  items2: DpMenuItem[];
  items3: DpMenuItem[];

  ngOnInit(): void {
    this.getDefinitions();
    this.getData();
  }

  getDefinitions() {
    // this.items1 = this.getItems();
    this.menubarDefinition1 = new MenubarDefinitions({});
    this.menubarDefinition2 = new MenubarDefinitions({});
    this.menubarDefinition3 = new MenubarDefinitions({});
  }

  getData() {

    this.items1 = [
      {
        label: 'File',
        icon: 'pi pi-file',
        items: [{
          label: 'New',
          icon: 'pi pi-fw pi-plus',
          items: [
            { label: 'Project' },
            { label: 'Other' },
          ]
        },
        { label: 'Open' },
        { label: 'Quit' }
        ]
      },
      {
        label: 'Edit',
        icon: 'pi pi-fw pi-pencil',
        items: [
          { label: 'Delete', icon: 'pi pi-fw pi-trash' },
          { label: 'Refresh', icon: 'pi pi-fw pi-refresh' }
        ]
      }
    ];


    this.items2 = [
      {
        label: 'Menu',
        items: [
          {
            label: 'Open',
            items: [
              { label: 'Open Shipment' },
              { label: 'Open Shipment' },
              { label: 'Air Import Desktop' }
            ]
          },
          {
            label: 'Tariff',
            items: [
              {
                label: 'Air Tariff',
                items: [
                  {
                    label: 'Buying Tariff',
                    items: [
                      { label: 'O.C. Buying Rates' }
                    ]
                  }
                ]
              },
              { label: 'Domestic Tariff' },
              { label: 'Surcharges' },
              { label: 'Local Charges' },
              { label: 'Brokerage (Amilut)' },
              { label: 'Airline Commission' }
            ]
          },
          { label: 'Forwarding' },
          { label: 'Brokerage' },
          { label: 'Brokerage New' },
          { label: 'Ocean' },
          { label: 'P.O. Follow-UP' },
          { label: 'OCR' },
          { label: 'Entities Management' }
        ]
      }
    ];


    this.items3 = [
      {
        label: 'url',
        styleClass: 'mItem_1_0',
        url: 'http://www.primefaces.org/primeng'
      },
      {
        label: 'routerLink',
        styleClass: 'mItem_2_0',
        routerLink: ['/page1']
      },
      {
        label: 'command', styleClass: 'mItem_3_0', command: (event) => {
          // console.log(event.originalEvent); //Browser event
          // console.log(event.item); // menuitem metadata
          // this.router.navigateByUrl(`/page1/${param.id}`);
          alert('execute ...');
        }
      },
      {
        label: 'Images',
        styleClass: 'mItem_4_0',
        items: [

          { label: 'link_4_1', styleClass: 'mItem_4_1' },
          { label: 'link_4_2', styleClass: 'mItem_4_2' },
          { label: 'link_4_3', styleClass: 'mItem_4_3' }
        ]
      }
    ];

  }
}
