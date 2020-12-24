import { Component, OnInit, Output,EventEmitter, ViewChild } from '@angular/core';
import { CooService } from '../../services/coo.service';
import { ToastDefinitions } from 'projects/dn-infra/src/lib/dp/components/toast/Objects/toast-definitions';
import { ActivatedRoute, Router } from '@angular/router';
//import { EventEmitter } from 'protractor';
//import { SSL_OP_ALLOW_UNSAFE_LEGACY_RENEGOTIATION } from 'constants';
import { DpDialogService, DpDynamicDialogRef } from 'projects/dn-infra/src/lib/dp/components/dynamicdialog/Objects/dynamicdialog-definitions';
// import { Dynamicdialogsrc1testComponent } from '../dynamicdialogsrc1test/dynamicdialogsrc1test.component';
import { TransmissionlogComponent } from '../../../components/transmission/transmissionlog/transmissionlog.component';
import { ToastComponent } from 'projects/dn-infra/src/lib/dp/components/toast/toast.component';



@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
  providers: [DpDialogService]
})
export class ToolbarComponent implements OnInit {
  @ViewChild('toast') toast: ToastComponent;
  toastDefinition: ToastDefinitions;

  constructor(public cooService: CooService, private route: Router, public dialogService: DpDialogService) { }
  
  ref1: DpDynamicDialogRef;

  ngOnInit(): void {
      this.toastDefinition = new ToastDefinitions({ position: "center" });
}

  saveData()
  {
    this.cooService.updateCooData().then((data) => {
      //alert(data);
      if (data === 'OK') {
        this.toast.dp_showToast('Saving:', 'Successfully' , 'info', 1600);
      }
      else {
        this.toast.dp_showToast('Saving Error:', '' + data , 'error', 4000);
      }
    });    
  }

  tansmissionLog(){
    // this.route.navigate(['/transmission']);
    this.ref1 = this.dialogService.open(TransmissionlogComponent, {
      header: 'Tansmission Log ... ',
      width: '80%',
      height: '80%'
    });

    this.ref1.onClose.subscribe((retVals) => {
      // console.log(retVals)
    });
  }

}
