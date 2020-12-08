import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {
  positionDpToast, severityDpToast,
  ToastDefinitions
} from 'projects/dn-infra/src/lib/dp/components/toast/Objects/toast-definitions';
import { ToastComponent } from 'projects/dn-infra/src/public-api';


@Component({
  selector: 'app-toasttest',
  templateUrl: './toasttest.component.html',
  styleUrls: ['./toasttest.component.css']/*,
  providers: [ToastComponent]*/
})
export class ToasttestComponent implements OnInit {

  @ViewChild('toast10') toast10: ToastComponent;


  toastDefinition1: ToastDefinitions;
  toastDefinition2: ToastDefinitions;
  toastDefinition3: ToastDefinitions;
  toastDefinition4: ToastDefinitions;
  toastDefinition5: ToastDefinitions;

  toastDefinition10: ToastDefinitions;
  toastDefinition11: ToastDefinitions;
  toastDefinition12: ToastDefinitions;
  // constructor(showMsg: ToastComponent) { }
  constructor() { }
  ngOnInit(): void {
    /*this.toastDefinition1 = new ToastDefinitions({key: 'abcd12' });*/ /* gil 123 */

    this.toastDefinition1 = new ToastDefinitions({});
    this.toastDefinition2 = new ToastDefinitions({ severity: severityDpToast.success, position: positionDpToast.bottomCenter });
    this.toastDefinition3 = new ToastDefinitions({ severity: severityDpToast.info, position: positionDpToast.center });
    this.toastDefinition4 = new ToastDefinitions({ severity: severityDpToast.warn, position: 'top-left' });
    this.toastDefinition5 = new ToastDefinitions({ severity: severityDpToast.error, position: positionDpToast.bottomRight });


    const toastDefinition6 = new ToastDefinitions({ severity: severityDpToast.success });

    this.toastDefinition10 = new ToastDefinitions({});

    this.toastDefinition11 = new ToastDefinitions({});
    this.toastDefinition12 = new ToastDefinitions({});
    // this.toastDefinition = new ToastDefinitions('summary text', 'context ... ');
  }

  ShowgMsg() {
   this.toast10.dp_showToast( 'header 1', 'text 1', 'success');

    // const element = document.querySelector(input[formControlName='txtID']);
    // this.toast1.dp_showToast(this.toastDefinition1)

    // debugger;
    // this.ShowgMsg.
    // ;

    // this.toastDefinition10 = new ToastDefinitions({
    //   header: 'header 10 ...'
    //   , body: ' body text 10 ...'
    //   //   , func123: (index) => {

    //   //  }
    // });


    // this.toastDefinition10.dpToastFunc(this.toastDefinition10);
    // const toastDefinition10: ToastDefinitions = new ToastDefinitions({severity: severityDpToast.success
    //   // , dpToastFunc: (this) => {
    //   //   //alert('in dpDialogFunc dialogDefinition8 , index=' + index);

    //   // }
    // });



   // this.toastDefinition10.dpToastFunc(this.toastDefinition10);

    // this.dpToastFunc(toastDefinition10)
    // toastDefinition10.dpToastFunc();
    // this.messageService.add({key: 'myKey1', severity:'success', summary: 'Summary Text', detail: 'Detail Text'});


    // toastDefinition10.dpToastFunc();
  }



  stockValueChanged() {
    // this.stockValueChange.emit({ id: this.productId, updatdstockvalue: this.updatedstockvalue });
    // this.updatedstockvalue = null;
  }
}
