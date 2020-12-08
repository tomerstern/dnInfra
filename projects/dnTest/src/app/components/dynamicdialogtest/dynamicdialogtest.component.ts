import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api'; /* only for showing return value */
import { DpDialogService, DpDynamicDialogRef } from 'projects/dn-infra/src/lib/dp/components/dynamicdialog/Objects/dynamicdialog-definitions';

// import { DialogService } from 'primeng/dynamicdialog';
// import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { Dynamicdialogsrc1testComponent } from '../dynamicdialogsrc1test/dynamicdialogsrc1test.component';
import { Dynamicdialogsrc2testComponent } from '../dynamicdialogsrc2test/dynamicdialogsrc2test.component';

@Component({
  selector: 'app-dynamicdialogtest',
  templateUrl: './dynamicdialogtest.component.html',
  styleUrls: ['./dynamicdialogtest.component.scss'],
  providers: [DpDialogService, MessageService]
})
export class DynamicdialogtestComponent implements OnInit {

  constructor(public dialogService: DpDialogService, public messageService: MessageService) { }

  ref1: DpDynamicDialogRef;
  ref2: DpDynamicDialogRef;

  ngOnInit(): void {
  }

  showDynamicdialog1() {
    this.ref1 = this.dialogService.open(Dynamicdialogsrc1testComponent, {
      header: 'Choose a Car',
      width: '70%'
    });

    this.ref1.onClose.subscribe((car) => {
      if (car) {
        this.messageService.add({ severity: 'info', summary: 'Car Selected', detail: 'Vin:' + car.vin });
      }
    });
  }

  showDynamicdialog2() {
    this.ref2 = this.dialogService.open(Dynamicdialogsrc2testComponent, {
      header: 'Choose Something',
      width: '70%',
      dismissableMask: false,
      modal: true,
      footer: 'footer text',
      data: {
        id: '4531'
      },
      // , closable: false
      // , showHeader: false
    });

    this.ref2.onClose.subscribe((val) => {
      if (val) {
        this.messageService.add({ severity: 'info', summary: 'Button Clickes', detail: 'Return Val: ' + val });
      }
    });
  }


  // tslint:disable-next-line: use-lifecycle-interface
  ngOnDestroy() {
    if (this.ref1) {
      this.ref1.close();
    }
    if (this.ref2) {
      this.ref2.close();
    }
  }

}
