import { Component, OnInit } from '@angular/core';
import { CooService } from '../../../services/coo.service';
import { CooMode } from '../../../models/coo';
import { InputNumberDefinitions } from 'projects/dn-infra/src/lib/dp/components/inputnumber/objects/inputnumber-definitions';

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.scss']
})
export class GeneralComponent implements OnInit {

  replaceCooCollapsed: boolean = false;
  headerOpenDate: string;
  dateOpen: string;

  constructor(public cooService : CooService) { 
    cooService.cooDataSubject$.subscribe(data => {
      
      if(data != undefined)
      {
        this.retrieveData();
        console.log(data);
      }
      
    })
  }

  retrieveData()
  {
    if ( this.cooService.cooData == undefined )
      return
    this.setCooNew();
    this.setCooReplace();
    this.dateOpen = this.cooService.fixDate(this.cooService.cooData.CooBoxData.Header.OpenDate);
    //this.dateOpen = new Date(parseInt(this.cooService.cooData.CooBoxData.Header.OpenDate.substr(6))).toISOString().slice(0,10);
    
  }

  setCooNew()
  {
    this.cooService.cooData.CooBoxData.Header.OpenedBy = this.cooService.cooData.CooBoxData.UserID ;
  }

  setCooReplace()
  {

    if(this.cooService.cooData.CooBoxData.CooMode != CooMode.Replace ) 
    {
      this.replaceCooCollapsed = true;
      return 
    }

    this.cooService.cooData.CooBoxData.Header.EntityNo = 0;
    this.cooService.cooData.CooBoxData.Header.AgentR_certificateIdToCancel = this.cooService.cooData.CooBoxData.Header.AgentR_certificateID;
    this.cooService.cooData.CooBoxData.Header.AgentR_certificateID = "";
    this.cooService.cooData.CooBoxData.Header.AgentR_replacementReason = this.cooService.cooData.CooBoxData.CooMode;
    this.cooService.cooData.CooBoxData.CooMode = CooMode.New;
    this.cooService.cooData.CooBoxData.Header.AgentR_internalApplication = "";
    
    return;
  }

  ngOnInit(): void {}

}
