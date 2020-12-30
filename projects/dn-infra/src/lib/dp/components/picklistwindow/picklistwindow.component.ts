import { Component, OnInit, Input, Output, OnDestroy, EventEmitter, OnChanges } from '@angular/core';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { DynamicDialogConfig } from 'primeng/dynamicdialog';
import { DpDynamicDialogRef } from '../dynamicdialog/Objects/dynamicdialog-definitions';
import { PicklistComponent } from '../picklist/picklist.component';

@Component({
  selector: 'dp-picklistwindow',
  templateUrl: './picklistwindow.component.html'
   ,providers: [PicklistComponent]
})
export class PicklistWindowComponent implements OnInit,OnDestroy {

  constructor(public ref: DpDynamicDialogRef, public config: DynamicDialogConfig) { }
  ngOnDestroy(): any {
    this.config.data.targetList = this.DialogTargetList;
    return this.DialogTargetList;
  }
  
  // ngOnChanges(): any{
  //   return this.DialogTargetList;
  // }
  isUndo: boolean = false;
  @Output('onChangeTarget') targetListOutput = new EventEmitter<any[]>();
  DialogSourceList: any[] = [];
  DialogTargetList: any[] = [];

  ngOnInit(): void {
      this.DialogSourceList = this.config.data.sourceList;
      this.DialogTargetList = this.config.data.targetList;
  }

  updateTarget(target)
  {
    this.DialogTargetList = target;
    this.targetListOutput.emit(target);
  }

  undoChanges(){
    this.isUndo = true;
    this.DialogSourceList = this.config.data.sourceList;
    this.DialogTargetList = this.config.data.targetList;
    debugger
  }
  
  

  funcReturnToParent() {
    this.ref.close(this.DialogTargetList);
  }
  

}
