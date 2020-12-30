import { Component, OnInit, ViewChild } from '@angular/core';
import { CooService } from './services/coo.service';
import '../core/extensions';
import { ToastDefinitions } from 'projects/dn-infra/src/lib/dp/components/toast/Objects/toast-definitions';
import { ActivatedRoute, Router } from '@angular/router';
import { ICooData, CooKey, CooMode, CooBox } from './models/coo';
import { Subject } from 'rxjs';
import { undistributeHeight } from '@fullcalendar/core';
import { ToastComponent } from 'projects/dn-infra/src/public-api';
import { DpDialogService } from 'projects/dn-infra/src/lib/dp/components/dynamicdialog/Objects/dynamicdialog-definitions';

@Component({
  selector: 'app-coo',
  templateUrl: './coo.component.html',
  styleUrls: ['./coo.component.scss'],
  providers: [DpDialogService]
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
        this.checkErrorPage(data)
        // if (data['cooMode'] === undefined)
        // {
        //     // Open error page
        //     this.route.navigate(['/error']);
        // }
        // this.cooType = data['cooType']; 
        // const mode: string = data['cooMode'].toString();
        // this.cooMode = CooMode[mode];

        // if (this.cooMode === undefined)
        // {
        //   this.showApp = true;
        //   this.route.navigate(['/error']);
        // }

        // switch (this.cooMode) {
         
        //   case CooMode.New:
        //   case CooMode.Update:
        //   case CooMode.View:
        //   case CooMode.Replace:
        //   {
            
            // this.checkErrorPage(data)
            // this.cooKey = this.setAndCheckCooKey(this.cooMode, data['entityNo'], data['ShipmentNumber'],
            //             data['DeptCode'], data['CusDecOrder']);
            // if (this.cooKey === undefined){
            //   this.showApp = true;
            //   this.route.navigate(['/error']);
            // }
            
            this.cooService.getCooBoxFromServer(this.cooKey, this.cooMode, data['UserID'] )
            .then((response: string) => {            
              if(response != '')
              {
                this.showApp = true;
                this.toast.dp_showToast('Error on search data:', '' + response , 'error', 4000);
              }
            });
            this.cooService.cooDataSubject$.subscribe((result: ICooData) => {
              this.retrieveData();
            });
            
            // break;
          // }
          
          // default: {
            //  break;
          // }
      //  }
      
      }
    );

  }

  retrieveData()
  {  
    if ( this.cooService.cooData != undefined )
        this.showApp = true;
    
    this.fetchArr.push(this.cooService.getOperationShipmentData(this.cooKey));
    this.fetchArr.push(this.cooService.getOperationGoodDetailsData(this.cooKey));
    this.fetchArr.push(this.cooService.getOperationInvoiceData(this.cooKey));
    this.fetchArr.push(this.cooService.getCustomsOfficeList());
    this.fetchArr.push(this.cooService.getCitesList());
    Promise.all(this.fetchArr).then((data: Array<any>) => {
      this.cooService.setOperationShipmentData(data[0]);
      this.cooService.setOperationGoodDetailsData(data[1]);
      this.cooService.setOperationInvoiceData(data[2]);
      this.cooService.setCustomsOffice(data[3]);
      this.cooService.setCities(data[4]);
    });
  }

  checkErrorPage(data: any){
    debugger
    //cooMode
    if (data['cooMode'] === undefined)
        this.route.navigate(['/error']);// Open error page
    
    const mode: string = data['cooMode'].toString();
    this.cooMode = CooMode[mode];

    if (this.cooMode === undefined)
      this.route.navigate(['/error']);// Open error page

    this.cooType = data['cooType']; 
    this.cooKey = this.setAndCheckCooKey(this.cooMode, 
                                        data['entityNo'], 
                                        data['ShipmentNumber'],
                                        data['DeptCode'], 
                                        data['CusDecOrder']);
    if (this.cooKey === undefined)
      this.route.navigate(['/error']);
  }

  setAndCheckCooKey(cooMode: CooMode, entityNo: string, shipmentNumber: string, deptCode: string, cusDecOrder: string){
    debugger
     const result: CooKey = new CooKey();

    if (cooMode === CooMode.New) {
      if ( shipmentNumber === undefined || !shipmentNumber.isNumber)
      {
        return undefined;
      }
      result.ShipmentNumber =+ shipmentNumber;
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
      result.CusDecOrder =+ cusDecOrder;
    }
   
    if (cooMode === CooMode.View ) {
      this.cooService.isDisabled = true;
    }

    if (cooMode === CooMode.Update || cooMode === CooMode.Replace || cooMode === CooMode.View){
      
      if (entityNo === undefined)
      {
        return undefined;
      }

      if (!entityNo.isNumber)
      {
        return undefined;
      }
      result.EntityNo =+ entityNo;

      if (shipmentNumber === undefined || !shipmentNumber.isNumber)
      {
        result.ShipmentNumber = 0;
      }
      else
      {
        result.ShipmentNumber =+ shipmentNumber;
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
        result.CusDecOrder =+ cusDecOrder;
      }
    }
    return result;
  }
  
}
