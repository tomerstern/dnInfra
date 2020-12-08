import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { MenubarDefinitions } from './Objects/menubar-definitions';

@Component({
  selector: 'dp-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.scss']
})
export class MenubarComponent implements OnInit {

  constructor() { }
  // items: MenuItem[];

  @Input() datasource: any = [];
  @Input() definition: MenubarDefinitions;

  ngOnInit(): void {
  }

}
