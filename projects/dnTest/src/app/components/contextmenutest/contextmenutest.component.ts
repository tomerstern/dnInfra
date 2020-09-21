import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ContextmenuDefinitions, DpMenuItem } from 'projects/dn-infra/src/lib/dp/components/contextmenu/Objects/contextmenu-definitions';

@Component({
  selector: 'app-contextmenutest',
  templateUrl: './contextmenutest.component.html',
  styleUrls: ['./contextmenutest.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ContextmenutestComponent implements OnInit {


  // items0: MenuItem[];
  items0: DpMenuItem[]; /* for global*/
  items1: DpMenuItem[];
  items2: DpMenuItem[];
  items3: DpMenuItem[];

  contextmenuDefinition0: ContextmenuDefinitions;
  contextmenuDefinition1: ContextmenuDefinitions;
  contextmenuDefinition2: ContextmenuDefinitions;
  contextmenuDefinition3: ContextmenuDefinitions;
  constructor() { }

  ngOnInit(): void {
    this.getDefinitions();
    this.getData();
  }

  getDefinitions() {


  this.contextmenuDefinition0 = new ContextmenuDefinitions({global: true});

  this.contextmenuDefinition1 = new ContextmenuDefinitions({});

  this.contextmenuDefinition2 = new ContextmenuDefinitions({});

  this.contextmenuDefinition3 = new ContextmenuDefinitions({});
}

getData() {

  this.items1 = [
    {
        label: 'url',
        icon: 'pi pi-fw pi-users',
        url: 'http://www.primefaces.org/primeng'
    },
    {
        label: 'routerLink',
        icon: 'pi pi-fw pi-briefcase',
        routerLink: ['/page1'], queryParams: {'recent': 'true'}
    },
    {
      label: 'command', icon: 'pi pi-fw pi-pencil', command: (event) => {
        // console.log(event.originalEvent); //Browser event
        // console.log(event.item); // menuitem metadata
        alert('execute ...');
    }}
  ];


  this.items2 = [
    {label: 'flag 1', styleClass: 'mItem_2_1'
    , items: [{
      label: 'New',
      icon: 'pi pi-fw pi-plus',
  }]
  },
    {label: 'flag 2', styleClass: 'mItem_2_2'},
    {label: 'flag 3', styleClass: 'mItem_2_3'}
  ];

  this.items3 = [
    {label: 'flag 1', styleClass: 'mItem_3_1'},
    {label: 'flag 2', styleClass: 'mItem_3_2'},
    {label: 'flag 3', styleClass: 'mItem_3_3'}
  ];

  this.items0 = [
    {
      label: 'File',
      icon: 'pi pi-fw pi-file',
      items: [{
        label: 'New',
        icon: 'pi pi-fw pi-plus',
        items: [
          { label: 'Project' },
          { label: 'Other' },
        ]
      },
      { label: 'Open' },
      { separator: true },
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
    },
    {
      label: 'Help',
      icon: 'pi pi-fw pi-question',
      items: [
        {
          label: 'Contents'
        },
        {
          label: 'Search',
          icon: 'pi pi-fw pi-search',
          items: [
            {
              label: 'Text',
              items: [
                {
                  label: 'Workspace'
                }
              ]
            },
            {
              label: 'File'
            }
          ]
        }
      ]
    },
    {
      label: 'Actions',
      icon: 'pi pi-fw pi-cog',
      items: [
        {
          label: 'Edit',
          icon: 'pi pi-fw pi-pencil',
          items: [
            { label: 'Save', icon: 'pi pi-fw pi-save' },
            { label: 'Update', icon: 'pi pi-fw pi-save' },
          ]
        },
        {
          label: 'Other',
          icon: 'pi pi-fw pi-tags',
          items: [
            { label: 'Delete', icon: 'pi pi-fw pi-minus' }
          ]
        }
      ]
    },
    { separator: true },
    {
      label: 'Quit', icon: 'pi pi-fw pi-times'
    }
  ];



}

}
