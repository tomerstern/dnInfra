import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { ContextmenuDefinitions, ContextmenuProperties } from './Objects/contextmenu-definitions';

// import { MenuItem } from 'primeng/api';


@Component({
  selector: 'dp-contextmenu',
  templateUrl: './contextmenu.component.html',
  styleUrls: ['./contextmenu.component.scss']
})
export class ContextmenuComponent implements OnInit {

  @Input() definition: ContextmenuDefinitions;
  @Input() datasource: any = [];
  @Input() target: HTMLElement;
  // @Input() rowData: any;
  // @Input() columnDefinition: any;

  // items0: MenuItem[];

  constructor() { }

  ngOnInit(): void {


  }

}
