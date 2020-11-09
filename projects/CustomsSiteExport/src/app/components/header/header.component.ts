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
  ngOnInit(): void {

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


    // this.userService.getLoginUser('FEDEX', 'FEDEX').then(data => {
    //   console.log('gil');
    //   console.log(data);
    // });

    try{



      this.userService.GetUserMenus(895, '9')
        .then((data: { Status: string; result: any }) => {
        if (data.Status === 'OK') {
          debugger;
          this.buildTree(data.result);
        }
          else {
            throw new Error(data.Status + ' : ' + data.result);
          }
      });
    }
    catch (error) {
      throw new Error(error);
    }

      // this.itemsTemp = data;
      // this.tree = this.buildTree(this.itemsTemp);

    // console.log(JSON.stringify(this.tree, null, ' '));

    // console.log(JSON.stringify(tree));
    // document.body.innerHTML = "<pre>" + (JSON.stringify(tree, null, " "))

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
    try {
      //  array to object
      for (let i = 0, len = arr.length; i < len; i++) {
        arrElem = arr[i];
        mappedArr[arrElem.id] = arrElem;
        mappedArr[arrElem.id]['items'] = [];
      }

      console.log('mappedArr');
      console.log(mappedArr);

      for (const id in mappedArr) {
        if (mappedArr.hasOwnProperty(id)) {
          mappedElem = mappedArr[id];
          // remove empty items (children)
          // if (mappedElem.items.length === 0) {
          //   delete mappedElem.items;
          // }

          // If the element is not at the root level, add it to its parent array of children.
          if (mappedElem.parentid) {
            mappedArr[mappedElem['parentid']]['items'].push(mappedElem);
            // mappedArr[mappedElem['parentid']].push(mappedElem);
            // if ( mappedArr[mappedElem['parentid']].items.length === 0) {
            //   // mappedElem.items
            //   delete mappedArr[mappedElem['parentid']].items;
            // }
          }
          // If the element is at the root level, add it to first level elements array.
          else {
            treeTemp.push(mappedElem);
          }
        }
      }

      console.log('treeTemp');
      console.log(treeTemp);

      const tree2 = JSON.stringify(treeTemp);
      const newstr = tree2.split(',"items":[]').join( '');

      console.log('treeTemp');
      console.log(treeTemp);

      this.tree = JSON.parse(newstr);

      // console.log('tree');
      // console.log(this.tree);

      // return  this.tree;
      // return JSON.stringify();
    } catch (error) {
      throw new Error(error);
      return [];
    }

    //
  }






}



