import { Component, OnInit } from '@angular/core';
import { GlobalFunctionsService } from '../../services/global-functions.service';

@Component({
  selector: 'app-globalfunctionstest',
  templateUrl: './globalfunctionstest.component.html',
  styleUrls: ['./globalfunctionstest.component.scss']
})
export class GlobalfunctionstestComponent implements OnInit {

  constructor(private gf: GlobalFunctionsService) { }

  ngOnInit(): void {

    const GlobalFunctionRetValue = this.gf.getGlobalVal();
    console.log('GlobalFunctionRetValue =' + GlobalFunctionRetValue);

  }

}
