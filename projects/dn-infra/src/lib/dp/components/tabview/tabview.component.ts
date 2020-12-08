import { Component, OnInit, Input, ViewEncapsulation, Output, EventEmitter } from '@angular/core';
import { TabviewDefinitions, TabpanelDefinitions } from './Objects/tabview-definitions';

@Component({
  selector: 'dp-tabview',
  templateUrl: './tabview.component.html',
  styleUrls: ['./tabview.component.scss']
})
export class TabviewComponent implements OnInit {

  @Input() TabViewDefinition: TabviewDefinitions;
  @Input() TabPanelDefinition: TabpanelDefinitions;

  constructor() { }

  ngOnInit(): void {
  }

}
