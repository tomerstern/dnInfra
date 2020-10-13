import { Component, OnInit } from '@angular/core';

import {DynamicDialogRef} from 'primeng/dynamicdialog';
import {DynamicDialogConfig} from 'primeng/dynamicdialog';

@Component({
  selector: 'app-dynamicdialogsrc2test',
  templateUrl: './dynamicdialogsrc2test.component.html',
  styleUrls: ['./dynamicdialogsrc2test.component.scss']
})
export class Dynamicdialogsrc2testComponent implements OnInit {

  constructor( public ref: DynamicDialogRef, public config: DynamicDialogConfig) { }

  ngOnInit(): void {
    // console.log(this.config.data);
  }


  funcReturnToPatrent(val) {
    this.ref.close(val);
}

}
