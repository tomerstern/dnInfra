import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { GlobalFunctionsService } from '../../services/global-functions.service';

@Component({
  selector: 'app-globalfunctionstest',
  templateUrl: './globalfunctionstest.component.html',
  styleUrls: ['./globalfunctionstest.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class GlobalfunctionstestComponent implements OnInit {

  constructor(private gf: GlobalFunctionsService) { }
  uuid1: string;
  uuid2: string;
  uuid3: string;
  uuid4: string;

  ngOnInit(): void {

    this.uuid1 = this.gf.dpUuid();
    this.uuid2 = this.gf.dpUuid('', 5);
    this.uuid3 = this.gf.dpUuid('', 22);
    this.uuid4 = this.gf.dpUuid('table');

  }

}
