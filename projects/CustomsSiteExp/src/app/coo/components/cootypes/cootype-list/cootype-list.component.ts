import { Component, OnInit,Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-cootype-list',
  templateUrl: './cootype-list.component.html',
  styleUrls: ['./cootype-list.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CootypeListComponent implements OnInit {

  @Input() gridData: any[] ;
  @Output() notifyCOOType: EventEmitter <string> = new EventEmitter <string>();
  constructor() {}

  cooTypeSelected: boolean = false;
  ngOnInit(): void {

    for (let i = 0; i < this.gridData.length; i++)
    {
        this.gridData[i].display = false;
    }
    
  }

  RowClick(sCooType : string):void{

    for (let i = 0; i < this.gridData.length; i++)
    {
      if( sCooType == this.gridData[i].code )
      {
        //this.gridData[i].name = "kuku";
        this.gridData[i].display = true;
      }
        

      else
      {
        this.gridData[i].display = false;

      }
    }
    console.log(this.gridData)


    this.notifyCOOType.emit(sCooType);

    
  }
  

}
