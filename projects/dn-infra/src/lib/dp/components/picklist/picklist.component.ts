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
  @Input() tableId: string; 


  ngOnInit() {
    //alert('tableId in Picklist :' + this.tableId);
     if( this.tableId+"_src" in localStorage)
     {

       this.sourceList = JSON.parse(localStorage.getItem(this.tableId+"_src"));   

     }


  }

  saveInLocalStorage(event)
  {
    //alert('event :' + event);
    // update localStorage value
    localStorage.setItem(this.tableId+"_src", JSON.stringify(this.sourceList));
    localStorage.setItem(this.tableId+"_trgt", JSON.stringify(this.targetList));

    

  }

}
