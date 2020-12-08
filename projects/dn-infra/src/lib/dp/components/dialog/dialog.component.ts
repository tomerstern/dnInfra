import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { DialogDefinitions } from './Objects/dialog-definitions';
// import {DialogModule} from 'primeng/dialog';

@Component({
  selector: 'dp-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

  @Input() definition: DialogDefinitions;

  constructor() { }

  ngOnInit(): void {

  }

  dp_showDialog() {
    this.definition.visible = true;
  }

  dpDialogFunc(index) {
    this.definition.dpDialogFunc(index);
  }

}
