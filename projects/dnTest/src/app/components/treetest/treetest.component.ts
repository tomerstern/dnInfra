import { Component, OnInit } from '@angular/core';
import { TreeDefinitions } from 'projects/dn-infra/src/lib/dp/components/tree/Objects/tree-definitions';

@Component({
  selector: 'app-treetest',
  templateUrl: './treetest.component.html',
  styleUrls: ['./treetest.component.scss']
})
export class TreetestComponent implements OnInit {

  constructor() { }

  treeItems1: any[];
  treeSelected1: any;
  treeDefinitions1: TreeDefinitions;

  ngOnInit(): void {
    this.getDefinitions();

    this.treeItems1 = this.getData();
  }



  getDefinitions() {
    // this.items1 = this.getItems();
    this.treeDefinitions1 = new TreeDefinitions({});
  }



  getData() {
    const treeItems =  [
      {
          'label': 'Documents',
          'data': 'Documents Folder',
          'expandedIcon': 'pi pi-folder-open',
          'collapsedIcon': 'pi pi-folder',
          'children': [{
                  'label': 'Work',
                  'data': 'Work Folder',
                  'expandedIcon': 'pi pi-folder-open',
                  'collapsedIcon': 'pi pi-folder',
                  'children': [{'label': 'Expenses.doc', 'icon': 'pi pi-file', 'data': 'Expenses Document'}, {'label': 'Resume.doc', 'icon': 'pi pi-file', 'data': 'Resume Document'}]
              },
              {
                  'label': 'Home',
                  'data': 'Home Folder',
                  'expandedIcon': 'pi pi-folder-open',
                  'collapsedIcon': 'pi pi-folder',
                  'children': [{'label': 'Invoices.txt', 'icon': 'pi pi-file', 'data': 'Invoices for this month'}]
              }]
      },
      {
          'label': 'Pictures',
          'data': 'Pictures Folder',
          'expandedIcon': 'pi pi-folder-open',
          'collapsedIcon': 'pi pi-folder',
          'children': [
              {'label': 'barcelona.jpg', 'icon': 'pi pi-image', 'data': 'Barcelona Photo'},
              {'label': 'logo.jpg', 'icon': 'pi pi-file', 'data': 'PrimeFaces Logo'},
              {'label': 'primeui.png', 'icon': 'pi pi-image', 'data': 'PrimeUI Logo'}]
      },
      {
          'label': 'Movies',
          'data': 'Movies Folder',
          'expandedIcon': 'pi pi-folder-open',
          'collapsedIcon': 'pi pi-folder',
          'children': [{
                  'label': 'Al Pacino',
                  'data': 'Pacino Movies',
                  'children': [{'label': 'Scarface', 'icon': 'pi pi-video', 'data': 'Scarface Movie'}, {'label': 'Serpico', 'icon': 'pi pi-file-video', 'data': 'Serpico Movie'}]
              },
              {
                  'label': 'Robert De Niro',
                  'data': 'De Niro Movies',
                  'children': [{'label': 'Goodfellas', 'icon': 'pi pi-video', 'data': 'Goodfellas Movie'}, {'label': 'Untouchables', 'icon': 'pi pi-video', 'data': 'Untouchables Movie'}]
              }]
      }
    ];
    return treeItems;
  }

}





