import { Component, OnInit, ViewChild } from '@angular/core';
import { CooService } from './services/coo.service';
import '../core/extensions';
import { ToastDefinitions } from 'projects/dn-infra/src/lib/dp/components/toast/Objects/toast-definitions';
import { ActivatedRoute, Router } from '@angular/router';
import { ICooData, CooKey, CooMode, CooBox } from './models/coo';
import { Subject } from 'rxjs';
import { undistributeHeight } from '@fullcalendar/core';
import { ToastComponent } from 'projects/dn-infra/src/public-api';

@Component({
  selector: 'app-coo',
  templateUrl: './coo.component.html',
  styleUrls: ['./coo.component.scss']
  // providers: [CooService]
})
export class CooComponent implements OnInit {

  constructor(public cooService: CooService,private activatedRoute: ActivatedRoute,private route: Router) {}

  showApp: boolean = false;
  cooType: string = '';
  cooMode: CooMode = CooMode.New;
  cooBox: CooBox;
  cooKey: CooKey = new CooKey();
  jsonCooHeader: any = {};
  fetchArr = [];
  eventsSubject: Subject<void> = new Subject<void>();

  @ViewChild('toast') toast: ToastComponent;
  toastDefinition: ToastDefinitions;

  ngOnInit(): void {

    this.toastDefinition = new ToastDefinitions({position: "center"});
   
    this.activatedRoute.params.subscribe( async data =>
      {
        // this.checkErrorPage(data)
        if (data['cooMode'] === undefined)
        {
            // Open error page
            this.route.navigate(['/error']);
        }
        this.cooType = data['cooType']; 
        const mode: string = data['cooMode'].toString();
        this.cooMode = CooMode[mode];

        if (this.cooMode === undefined)
        {
          this.showApp = true;
          this.route.navigate(['/error']);
        }

        switch (this.cooMode) {
         
          case CooMode.New:
          case CooMode.Update:
          case CooMode.Replace:
          {
            
            // this.checkErrorPage(data)
            this.cooKey = this.setAndCheckCooKey(this.cooMode, data['entityNo'], data['ShipmentNumber'],
                        data['DeptCode'], data['CusDecOrder']);
            if (this.cooKey === undefined){
              this.showApp = true;
              this.route.navigate(['/error']);
            }
            
            this.cooService.getCooBoxFromServer(this.cooKey, this.cooMode )
            .then((response: string) => {              
              if(response != '')
              {
                this.showApp = true;
                this.toast.dp_showToast('Error on search data:', '' + response , 'error', 4000);
              }
            });
            this.cooService.cooDataSubject$.subscribe((result: ICooData) => {
              this.setCooReplace()
            });

            this.fetchArr.push(this.cooService.getOperationShipmentData(this.cooKey));
            this.fetchArr.push(this.cooService.getCustomsOfficeList());
            Promise.all(this.fetchArr).then((data: Array<any>) => {
              this.cooService.setOperationShipmentData(data[0]);
              this.cooService.setCustomsOffice(data[1]);
                            
              
              this.showApp = true;

            });

            break;
          }
          
          default: {
            // default
             break;
          }
       }
      
      }
    );

  }

  setCooReplace()
  {
    if ( this.cooService.cooData == undefined )
      return

    if(this.cooService.cooData.CooBoxData.CooMode != CooMode.Replace ) 
      return 

    this.cooService.cooData.CooBoxData.Header.EntityNo = 0;
    this.cooService.cooData.CooBoxData.Header.AgentR_certificateIdToCancel = this.cooService.cooData.CooBoxData.Header.AgentR_certificateID;
    this.cooService.cooData.CooBoxData.Header.AgentR_certificateID = "";
    this.cooService.cooData.CooBoxData.Header.AgentR_replacementReason = this.cooService.cooData.CooBoxData.CooMode;
    this.cooService.cooData.CooBoxData.CooMode = CooMode.Update;
    this.cooService.cooData.CooBoxData.Header.AgentR_internalApplication = "";
    
    return;
  }

  checkErrorPage(data: any){
    if (data['cooMode'] === undefined)
    {
        // Open error page
        this.route.navigate(['/error']);
    }
    this.cooKey = this.setAndCheckCooKey(CooMode.Update, data['entityNo'], data['ShipmentNumber'],
    data['DeptCode'], data['CusDecOrder']);
    if (this.cooKey === undefined){
    this.showApp = true;
    this.route.navigate(['/error']);
}
  }

  setAndCheckCooKey(cooMode: CooMode, entityNo: string, shipmentNumber: string, deptCode: string, cusDecOrder: string){
    
     const result: CooKey = new CooKey();

    if (cooMode === CooMode.New) {
      if ( shipmentNumber === undefined || !shipmentNumber.isNumber)
      {
        return undefined;
      }
      result.ShipmentNumber = +shipmentNumber;
      // if (deptCode === undefined || deptCode.isNullOrEmpty)
      if (deptCode === undefined)
      {
        return undefined;
      }
      result.DeptCode = deptCode;

      if (cusDecOrder === undefined || !cusDecOrder.isNumber)
      {
        return undefined;
      }
      result.CusDecOrder = +cusDecOrder;
    }
   
    if (cooMode === CooMode.Update || cooMode === CooMode.Replace){
      if (entityNo === undefined)
      {
        return undefined;
      }

      if (!entityNo.isNumber)
      {
        return undefined;
      }
      result.EntityNo = +entityNo;

      if (shipmentNumber === undefined || !shipmentNumber.isNumber)
      {
        result.ShipmentNumber = 0;
      }
      else
      {
        result.ShipmentNumber = +shipmentNumber;
      }
      // if (deptCode === undefined || deptCode.isNullOrEmpty)
      if (deptCode === undefined)
      {
        result.DeptCode = '';
      }
      else
      {
        result.DeptCode = deptCode;
      }

      if (cusDecOrder === undefined || !cusDecOrder.isNumber)
      {
        result.CusDecOrder = 0;
      }
      else
      {
        result.CusDecOrder = +cusDecOrder;
      }
    }
    return result;
  }
  
}
