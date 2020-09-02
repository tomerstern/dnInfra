import { Component, OnInit } from '@angular/core';

// import { ToastComponent } from '../../components/toast/toast.component';
import { ToastDefinitions } from 'projects/dn-infra/src/lib/dp/components/toast/Objects/toast-definitions';


@Component({
  selector: 'app-toasttest',
  templateUrl: './toasttest.component.html',
  styleUrls: ['./toasttest.component.css']/*,
  providers: [ToastComponent]*/
})
export class ToasttestComponent implements OnInit {

  toastDefinition: ToastDefinitions;

  // constructor(showMsg: ToastComponent) { }
  constructor() { }
  ngOnInit(): void {

    this.toastDefinition = new ToastDefinitions('summary text', 'context ... ');

  }
  func1()
  {
    // debugger;
    this.toastDefinition = new ToastDefinitions('summary text 222', 'context 222 ... ');
   
  }
 
  ShowgMsg()
  {
   //this.ShowgMsg.
  }

  

  stockValueChanged() {
    // this.stockValueChange.emit({ id: this.productId, updatdstockvalue: this.updatedstockvalue });
    // this.updatedstockvalue = null;
}
}
