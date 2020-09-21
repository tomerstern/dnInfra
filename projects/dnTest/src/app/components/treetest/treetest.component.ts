import { Component, OnInit, ViewEncapsulation } from '@angular/core';
// tslint:disable-next-line: max-line-length
import { TreeDefinitions, selectionModeDpTree, typeDpTreeNode } from 'projects/dn-infra/src/lib/dp/components/tree/Objects/tree-definitions';

@Component({
  selector: 'app-treetest',
  templateUrl: './treetest.component.html',
  styleUrls: ['./treetest.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TreetestComponent implements OnInit {

  constructor() { }

  treeItems1: any[];
  treeSelected1: any;
  treeDefinitions1: TreeDefinitions;

  treeItems2: any[];
  treeSelected2: any;
  treeDefinitions2: TreeDefinitions;

  treeItems3: any[];
  treeSelected3: any;
  treeDefinitions3: TreeDefinitions;

  ngOnInit(): void {
    this.getDefinitions();
    this.treeItems1 = this.getData1();
    this.treeItems2 = this.getData2();
    this.treeItems3 = this.getData3();
  }


  getDefinitions() {
    // this.items1 = this.getItems();
    this.treeDefinitions1 = new TreeDefinitions({
      selectionMode: selectionModeDpTree.single
    });

    this.treeDefinitions2 = new TreeDefinitions({
      selectionMode: selectionModeDpTree.multiple
    });

    this.treeDefinitions3 = new TreeDefinitions({
      selectionMode: selectionModeDpTree.checkbox,
    });
  }


  getData3() {
    const treeItems = [
    {
        label: 'All',
        expanded: true,
        data: '',
        children: [
        {
          label: 'ABC WW',
          data: '',
          expandedIcon: 'pi pi-folder-open',
          collapsedIcon: 'pi pi-folder',
          children: [{
            label: 'Africa',
            data: '',
            expandedIcon: 'pi pi-folder-open',
            collapsedIcon: 'pi pi-folder',
            children: [
              { label: 'ABC Auganda',  data: '', expandedIcon: 'pi pi-folder-open', collapsedIcon: 'pi pi-folder',
              children: [
                { label: 'Type A',  data: '', expandedIcon: 'pi pi-folder-open', collapsedIcon: 'pi pi-folder',
                children: [
                  { label: '11112',  data: '11112', icon: 'pi pi-file'},
                  { label: '11113',  data: '11113', icon: 'pi pi-file'},
                  { label: '11114',  data: '11114', icon: 'pi pi-file'},
                  { label: '11115',  data: '11115', icon: 'pi pi-file'},
                ]},
                { label: 'Type B',  data: '', expandedIcon: 'pi pi-folder-open', collapsedIcon: 'pi pi-folder',
                children: [
                  { label: '17112',  data: '17112', icon: 'pi pi-file'},
                  { label: '17113',  data: '17113', icon: 'pi pi-file'},
                  { label: '17114',  data: '17114', icon: 'pi pi-file'},
                  { label: '17115',  data: '17115', icon: 'pi pi-file'},
                ]},
              ]
              },
              { label: 'ABC Cameron',  data: '', expandedIcon: 'pi pi-folder-open', collapsedIcon: 'pi pi-folder',
              children: [
                { label: 'Type A',  data: '', expandedIcon: 'pi pi-folder-open', collapsedIcon: 'pi pi-folder',
                children: [
                  { label: '21112',  data: '21112', icon: 'pi pi-file'},
                  { label: '21113',  data: '21113', icon: 'pi pi-file'},
                  { label: '21114',  data: '21114', icon: 'pi pi-file'},
                  { label: '21115',  data: '21115', icon: 'pi pi-file'},
                ]},
                { label: 'Type B',  data: '', expandedIcon: 'pi pi-folder-open', collapsedIcon: 'pi pi-folder',
                children: [
                  { label: '27112',  data: '27112', icon: 'pi pi-file'},
                  { label: '27113',  data: '27113', icon: 'pi pi-file'},
                  { label: '27114',  data: '27114', icon: 'pi pi-file'},
                  { label: '27115',  data: '27115', icon: 'pi pi-file'},
                ]},
              ]
              },
              { label: 'ABC Zambia',  data: '', expandedIcon: 'pi pi-folder-open', collapsedIcon: 'pi pi-folder',
              children: [
                { label: 'Type A',  data: '', expandedIcon: 'pi pi-folder-open', collapsedIcon: 'pi pi-folder',
                children: [
                  { label: '511112',  data: '511112', icon: 'pi pi-file'},
                  { label: '511113',  data: '511113', icon: 'pi pi-file'},
                  { label: '511114',  data: '511114', icon: 'pi pi-file'},
                  { label: '511115',  data: '511115', icon: 'pi pi-file'},
                ]},
                { label: 'Type B',  data: '', expandedIcon: 'pi pi-folder-open', collapsedIcon: 'pi pi-folder',
                children: [
                  { label: '617112',  data: '617112', icon: 'pi pi-file'},
                  { label: '617113',  data: '617113', icon: 'pi pi-file'},
                  { label: '617114',  data: '617114', icon: 'pi pi-file'},
                  { label: '617115',  data: '617115', icon: 'pi pi-file'},
                ]},
              ]
              },
            ]
            }
          ]
        },
        {
          label: 'DEF WW',
          data: '',
          expandedIcon: 'pi pi-folder-open',
          collapsedIcon: 'pi pi-folder',
          children: [{
            label: 'Africa',
            data: '',
            expandedIcon: 'pi pi-folder-open',
            collapsedIcon: 'pi pi-folder',
            children: [
              { label: 'DEF Auganda',  data: '', expandedIcon: 'pi pi-folder-open', collapsedIcon: 'pi pi-folder',
              children: [
                { label: 'Type A',  data: '', expandedIcon: 'pi pi-folder-open', collapsedIcon: 'pi pi-folder',
                children: [
                  { label: '81112',  data: '81112', icon: 'pi pi-file'},
                  { label: '81113',  data: '81113', icon: 'pi pi-file'},
                  { label: '81114',  data: '81114', icon: 'pi pi-file'},
                  { label: '81115',  data: '81115', icon: 'pi pi-file'},
                ]},
                { label: 'Type B',  data: '', expandedIcon: 'pi pi-folder-open', collapsedIcon: 'pi pi-folder',
                children: [
                  { label: '87112',  data: '87112', icon: 'pi pi-file'},
                  { label: '87113',  data: '87113', icon: 'pi pi-file'},
                  { label: '87114',  data: '87114', icon: 'pi pi-file'},
                  { label: '87115',  data: '87115', icon: 'pi pi-file'},
                ]},
              ]
              },
              { label: 'DEF Cameron',  data: '', expandedIcon: 'pi pi-folder-open', collapsedIcon: 'pi pi-folder',
              children: [
                { label: 'Type A',  data: '', expandedIcon: 'pi pi-folder-open', collapsedIcon: 'pi pi-folder',
                children: [
                  { label: '91112',  data: '91112', icon: 'pi pi-file'},
                  { label: '91113',  data: '91113', icon: 'pi pi-file'},
                  { label: '91114',  data: '91114', icon: 'pi pi-file'},
                  { label: '91115',  data: '91115', icon: 'pi pi-file'},
                ]},
                { label: 'Type B',  data: '', expandedIcon: 'pi pi-folder-open', collapsedIcon: 'pi pi-folder',
                children: [
                  { label: '97112',  data: '97112', icon: 'pi pi-file'},
                  { label: '97113',  data: '97113', icon: 'pi pi-file'},
                  { label: '97114',  data: '97114', icon: 'pi pi-file'},
                  { label: '97115',  data: '97115', icon: 'pi pi-file'},
                ]},
              ]
              },
              { label: 'DEF Zambia',  data: '', expandedIcon: 'pi pi-folder-open', collapsedIcon: 'pi pi-folder',
              children: [
                { label: 'Type A',  data: '', expandedIcon: 'pi pi-folder-open', collapsedIcon: 'pi pi-folder',
                children: [
                  { label: '3381112',  data: '3381112', icon: 'pi pi-file'},
                  { label: '3381113',  data: '3381113', icon: 'pi pi-file'},
                  { label: '3381114',  data: '3381114', icon: 'pi pi-file'},
                  { label: '3381115',  data: '3381115', icon: 'pi pi-file'},
                ]},
                { label: 'Type B',  data: '', expandedIcon: 'pi pi-folder-open', collapsedIcon: 'pi pi-folder',
                children: [
                  { label: '4487112',  data: '4487112', icon: 'pi pi-file'},
                  { label: '4487113',  data: '4487113', icon: 'pi pi-file'},
                  { label: '4487114',  data: '4487114', icon: 'pi pi-file'},
                  { label: '4487115',  data: '4487115', icon: 'pi pi-file'},
                ]},
              ]
              },
            ]
            },
          ]
        },
      ]
    }];

    return treeItems;
  }


  getData2() {
    const treeItems = [
      {
        label: 'Documents',
        data: 'Documents Folder',
        expandedIcon: 'pi pi-folder-open',
        collapsedIcon: 'pi pi-folder',
        children: [{
          label: 'Work',
          data: 'Work Folder',
          expandedIcon: 'pi pi-folder-open',
          collapsedIcon: 'pi pi-folder',
          children: [
            { label: 'Expenses.doc', icon: 'pi pi-file', data: 'Expenses Document' },
            { label: 'Resume.doc', icon: 'pi pi-file', data: 'Resume Document' }
          ]
        },
        {
          label: 'Home',
          data: 'Home Folder',
          expandedIcon: 'pi pi-folder-open',
          collapsedIcon: 'pi pi-folder',
          children: [{ label: 'Invoices.txt', icon: 'pi pi-file', data: 'Invoices for this month' }]
        }]
      },
      {
        label: 'Pictures',
        data: 'Pictures Folder',
        expandedIcon: 'pi pi-folder-open',
        collapsedIcon: 'pi pi-folder',
        children: [
          { label: 'barcelona.jpg', icon: 'pi pi-image', data: 'Barcelona Photo' },
          { label: 'logo.jpg', icon: 'pi pi-file', data: 'PrimeFaces Logo' },
          { label: 'primeui.png', icon: 'pi pi-image', data: 'PrimeUI Logo' }]
      },
      {
        label: 'Movies',
        data: 'Movies Folder',
        expandedIcon: 'pi pi-folder-open',
        collapsedIcon: 'pi pi-folder',
        children: [{
          label: 'Al Pacino',
          data: 'Pacino Movies',
          children: [{ label: 'Scarface', icon: 'pi pi-video', data: 'Scarface Movie' }, { label: 'Serpico', icon: 'pi pi-file-video', data: 'Serpico Movie' }]
        },
        {
          label: 'Robert De Niro',
          data: 'De Niro Movies',
          children: [
            { label: 'Goodfellas', icon: 'pi pi-video', data: 'Goodfellas Movie' },
            { label: 'Untouchables', icon: 'pi pi-video', data: 'Untouchables Movie' }
          ]
        }]
      }
    ];

    return treeItems;
  }


  getData1() {

    const treeItems = [
      {
      key: 'g',
      label: 'בקשות למכס',
      styleClass: 'clsTreestyleClass_main',
      expanded: true,
        children: [
          {
            key: '0',
            label: 'לקוחות (routerLink)',
            styleClass: 'clsTreestyleClass_0',
            children: [
              { key: '0-0', label: 'פתיחה מהירה של לקוחות', data: '/page1', type: 'routerLink' },
              { key: '0-1', label: 'הוספת לקוח - עם נתוני חובה', data: '/page2', type: typeDpTreeNode.routerLink },
              { key: '0-2', label: 'הוספת/עדכון/ביטול כתובת לקוח',
                  data: '/page3', type: typeDpTreeNode.routerLink }
            ]
          },
          {
            key: '1',
            label: 'ספקים (external url)',
            styleClass: 'clsTreestyleClass_1',
            children: [
              { key: '1-0', label: 'פרמטרים לחיפוש/ ספק', data: 'https://angular.io', type: 'url' },
              { key: '1-1', label: 'הוספת ספק - עם נתוני חובה', data: 'https://angular.io/guide/setup-local', type: typeDpTreeNode.url},
              { key: '1-2', label: 'הוספת/עדכון/ביטול כתובת ספק',
                  data: 'https://angular.io/guide/architecture', type: typeDpTreeNode.url }
            ]
          },
          {
            key: '2',
            label: 'מערכת (external url)',
            styleClass: 'clsTreestyleClass_2',
            children: [
              { key: '2-0', label: 'שליפת טבלאות מערכת', data: 'https://angular.io', type: 'url' },
              { key: '2-1', label: 'שחזור כלשהו', data: 'https://angular.io/guide/setup-local', type: typeDpTreeNode.url },
              { key: '2-2', label: 'שערי מטבע',
                  data: 'https://angular.io/guide/architecture', type: 'url' }
            ]
          },
          {
            key: '3',
            label: 'מנהל תשלומים (show data)',
            styleClass: 'clsTreestyleClass_3',
            children: [
              { key: '3-0', label: 'מנהל תשלומים 1', data: 'מנהל תשלומים 1'},
              { key: '3-1', label: 'מנהל תשלומים 2', data: 'מנהל תשלומים 2' , type: typeDpTreeNode.default},
              { key: '3-2', label: 'מנהל תשלומים 3',
                  data: 'מנהל תשלומים 3', type: 'default' }
            ]
          }
        ]
      }
    ];
    return treeItems;
  }

}





