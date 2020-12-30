import { Component, OnInit,Output,EventEmitter, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-cootype-button',
  templateUrl: './cootype-button.component.html',
  styleUrls: ['./cootype-button.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CootypeButtonComponent implements OnInit {

  @Output() notifyButtonType: EventEmitter <string> = new EventEmitter <string>();
  constructor() { }

  btnNewDef : any = {'label' : 'New'} ;
  btnUpdateDef : any = {'label' : 'Update'} ;
  btnViewDef : any = {'label' : 'View'} ;
  btnReplaceDef : any = {'label' : 'Replace'} ;
  btnCancelDef : any = {'label' : 'Cancel'} ;

  ngOnInit(): void {
  }

  async ClickBtn(sButtonType:string){
  this.notifyButtonType.emit(sButtonType);
  }

}
