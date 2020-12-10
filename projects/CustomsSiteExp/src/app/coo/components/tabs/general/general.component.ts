import { Component, OnInit } from '@angular/core';
import { CooService } from '../../../services/coo.service';
import { InputNumberDefinitions } from 'projects/dn-infra/src/lib/dp/components/inputnumber/objects/inputnumber-definitions';

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.scss']
})
export class GeneralComponent implements OnInit {

  constructor(public cooService : CooService) { }
  headerOpenDate: string;

  ngOnInit(): void {
    //this.headerOpenDate = new Date(Number(this.cooService.cooBox.Header.OpenDate.substr(6))).toDateString();     
  }

}
