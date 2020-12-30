import { Component, OnInit, Input, Type, Output, EventEmitter, OnChanges } from '@angular/core';

@Component({
  selector: 'dp-picklist',
  templateUrl: './picklist.component.html',
  styleUrls: ['./picklist.component.scss']
})
export class PicklistComponent implements OnInit, OnChanges {

  constructor() { }
  @Input() sourceList: any[] = [];
  @Input() targetList: any[] = [];
  @Input() tableId: string; 

  public sourceListCopy: any[] = [];
  public targetListCopy: any[] = [];
  @Input() isUndo: boolean = false;
  @Output('onTargetListChange') targetListOutput = new EventEmitter<any[]>();


  ngOnInit() {
    if (this.tableId != null){
      if( this.tableId+"_src" in localStorage)
      {
        this.sourceList = JSON.parse(localStorage.getItem(this.tableId+"_src"));   
      }
    }
    else{
      this.sourceList = this.sourceList.filter(n => !this.targetList.includes(n))
    }
    this.initData();
  }

  ngOnChanges(){debugger
    if (this.isUndo){
      this.initData();
      this.isUndo = false;
    }
    
  }

  initData(){
    
    this.sourceListCopy = [...this.sourceList];
    this.targetListCopy = [...this.targetList];
  }

  changeTarget(event)
  {
    // update localStorage value
    if (this.tableId != null){
      localStorage.setItem(this.tableId+"_src", JSON.stringify(this.sourceListCopy));
      localStorage.setItem(this.tableId+"_trgt", JSON.stringify(this.targetListCopy));
    }
    else{
      this.targetListOutput.emit(this.targetListCopy);
    }
  }
}
