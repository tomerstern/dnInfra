import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-form-button',
  templateUrl: './form-button.component.html',
  styleUrls: ['./form-button.component.scss']
})
export class FormButtonComponent implements OnInit {

  @Output() notifyButtonType: EventEmitter <string> = new EventEmitter <string>();
  constructor() { }

  btnNewDef : any = {'label' : 'New'} ;
  btnUpdateDef : any = {'label' : 'Update'} ;
  btnReplaceDef : any = {'label' : 'Replace'} ;
  btnCancelDef : any = {'label' : 'Cancel'} ;

  ngOnInit(): void {
  }

  async ClickBtn(sButtonType:string){
  this.notifyButtonType.emit(sButtonType);
  }

}

