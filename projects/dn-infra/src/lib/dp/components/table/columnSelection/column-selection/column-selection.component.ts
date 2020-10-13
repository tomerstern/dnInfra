import { Component, OnInit, Input } from '@angular/core';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { DynamicDialogConfig } from 'primeng/dynamicdialog';
@Component({
  selector: 'dp-column-selection',
  templateUrl: './column-selection.component.html',
  styleUrls: ['./column-selection.component.scss']
  // ,providers: [DynamicDialogRef, DynamicDialogConfig]
})
export class ColumnSelectionComponent implements OnInit {

  constructor(public ref: DynamicDialogRef, public config: DynamicDialogConfig) { }

  //@Input() 
  DialogSourceList: any[] = [];
  DialogTargetList: any[] = [];

  ngOnInit(): void {

    //debugger
    this.DialogSourceList = this.config.data.sourceList;
    this.DialogTargetList = this.config.data.targetList;
    //let a = this.config.data;

    // let b =3
    //alert(this.targetList)
  }

  funcReturnToParent(val) {
    debugger
    this.ref.close(this.DialogTargetList);
  }

}
