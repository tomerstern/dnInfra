import { Component, OnInit, Injector, ViewEncapsulation } from '@angular/core';
import { MenubarDefinitions, DpMenuItem } from 'projects/dn-infra/src/lib/dp/components/menubar/Objects/menubar-definitions';
import { UserService } from '../../services/user.service';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit {


  // constructor() { }
  constructor(private userService: UserService, private http: HttpClient) { }
  menubarTestDefinition1: MenubarDefinitions;
  menubarDefinition1: MenubarDefinitions;
  itemsTest: DpMenuItem[];
  items: any[];
  itemsTemp: any[];
  strWelcome: string;
  strStreet: string;
  res: any;
  tree: any;
  isRtl = false;
  ngOnInit(): void {

    if (localStorage.getItem('dDirection') !== null && localStorage.getItem('dDirection').toLowerCase() === 'rtl') {
      this.isRtl = true;
    }


    this.getDefinitions();
    this.getTestData();


    this.itemsTemp = [
      { id: '1', parentid: 0, label: '1' },
      { id: '4', parentid: 2, label: '4' },
      { id: '3', parentid: 1, label: '3' },
      { id: '5', parentid: 0, label: '5' },
      { id: '6', parentid: 0, label: '6' },
      { id: '2', parentid: 1, label: '2' },
      { id: '7', parentid: 4, label: '7' },
      { id: '8', parentid: 1, label: '8' }
    ];


    try {


      this.userService.GetUserMenus(895, '9')
        .then((data: { Status: string; result: any }) => {
          if (data.Status === 'OK') {
            if (data.result !== undefined) {
              this.buildTree(data.result);
            }
          }
          else {
            throw new Error(data.Status + ' : ' + data.result);
          }
        });
    }
    catch (error) {
      throw new Error(error);
    }

  }


  getDefinitions() {
    this.menubarTestDefinition1 = new MenubarDefinitions({});
    this.menubarDefinition1 = new MenubarDefinitions({});
  }

  getTestData() {

    this.itemsTest = [
      {
        label: 'Menu',
        items: [
          {
            label: 'Translate Form',
            routerLink: ['test1']
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
          {
            label: 'level 1',
            items: [
              {
                label: 'level 2 1',
              },
              {
                label: 'level 2 2',
                items: [
                  {
                    label: 'level 3 1',
                  },
                  {
                    label: 'level 3 2',
                  },
                ]
              },
            ]
          },
        ],
      }
      ,
      {
        label: 'Another Page',
        routerLink: ['/test3']
      },
      {
        label: 'And Another'
      },
    ];



  }

  buildTree(arr) {
    const treeTemp = [];
    const tree = [];
    const mappedArr = {};
    let arrElem;
    let mappedElem;
    let LocTreepath;
    let LocParentTreepath;
    try {

      for (let i = 0, len = arr.length; i < len; i++) {
        if( arr[i].Name.toLowerCase() === 'cus gte' ) {
          arr[i].label = 'Menu';
        }
        else
        {
          arr[i].label = arr[i].Name;
        }

        LocTreepath = arr[i].TreePath;

        if (arr[i].URL !== undefined && arr[i].URL !== '') {
          arr[i].routerLink = arr[i].URL ;
        }

        if (LocTreepath.indexOf('.') >= 0) {
          LocParentTreepath = LocTreepath.substr(0, LocTreepath.lastIndexOf('.'));
          for (let j = 0; j < arr.length; j++) {
            if (arr[j].TreePath === LocParentTreepath) {
              arr[i].parentid = arr[j].Id;
              break;
            }
          }
        }
        else {
          arr[i].parentid = 0;
        }
      }
      for (let i = 0, len = arr.length; i < len; i++) {
        arrElem = arr[i];
        mappedArr[arrElem.Id] = arrElem;
        mappedArr[arrElem.Id]['items'] = [];
      }

      for (const id in mappedArr) {
        if (mappedArr.hasOwnProperty(id)) {
          mappedElem = mappedArr[id];
          // If the element is not at the root level, add it to its parent array of children.
          if (mappedElem.parentid) {
            mappedArr[mappedElem['parentid']]['items'].push(mappedElem);
          }
          // If the element is at the root level, add it to first level elements array.
          else {
            treeTemp.push(mappedElem);
          }
        }
      }

      const tree2 = JSON.stringify(treeTemp);
      const newstr = tree2.split(',"items":[]').join('');


      this.tree = JSON.parse(newstr);

    } catch (error) {
      throw new Error(error);
      return [];
    }

    //
  }






}



