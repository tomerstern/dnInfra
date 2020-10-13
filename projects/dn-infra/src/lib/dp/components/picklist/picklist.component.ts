import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'dp-picklist',
  templateUrl: './picklist.component.html',
  styleUrls: ['./picklist.component.scss']
})
export class PicklistComponent implements OnInit {

  constructor() { }
  @Input() sourceList: any[] = [];
  @Input() targetList: any[] = [];

  ngOnInit() {

  }

}
