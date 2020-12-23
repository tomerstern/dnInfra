import { Component, OnInit, ViewChild } from '@angular/core';
import { CooService } from './services/coo.service';
import '../core/extensions';
import { ToastDefinitions } from 'projects/dn-infra/src/lib/dp/components/toast/Objects/toast-definitions';
import { ActivatedRoute, Router } from '@angular/router';
import { ICooData, CooKey, CooMode, CooBox, CooOtherDetails } from './models/coo';
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
  cooMode: string = 'New';
  cooBox: CooBox;
  cooOtherDetails: CooOtherDetails = new CooOtherDetails();
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
        this.cooMode = data['cooMode'].toString().toUpperCase();

        switch (this.cooMode) {
          // case CooMode.New: {
            
          //   // this.checkErrorPage(data)
          //   this.cooKey = this.setAndCheckCooKey(CooMode.New, data['entityNo'], data['ShipmentNumber'], 
          //               data['DeptCode'], data['CusDecOrder']);
          //   if (this.cooKey === undefined){
          //     this.showApp = true;
          //     this.route.navigate(['/error']);
          //   }
            
          //   this.cooService.getAdressFromOperationShipment(this.cooKey)
          //   .then((response: string) => {              
          //     if(response != '')
          //     {
          //       console.log(response)
          //       this.showApp = true;
          //       this.toast.dp_showToast('Error on search data:', '' + response , 'error', 4000);
          //     }
          //   });
          //   this.showApp = true;
          //   break;
          // }

          case CooMode.Update:
          case CooMode.New:
          {
            
            // this.checkErrorPage(data)
            this.cooKey = this.setAndCheckCooKey(this.cooMode, data['entityNo'], data['ShipmentNumber'],
                        data['DeptCode'], data['CusDecOrder']);
            if (this.cooKey === undefined){
              this.showApp = true;
              this.route.navigate(['/error']);
            }
            
            this.cooService.getCooBoxFromServer(this.cooKey)
            .then((response: string) => {              
              if(response != '')
              {
                this.showApp = true;
                this.toast.dp_showToast('Error on search data:', '' + response , 'error', 4000);
              }
            });
            this.cooService.cooDataSubject$.subscribe((result: ICooData) => {              
              //this.cooService.getCountriesList();
              //this.cooService.getCustomsOfficeList();
              this.fetchArr.push(this.cooService.getCustomsOfficeList());
              Promise.all(this.fetchArr).then((data: Array<any>) => {
                //this.cooService.setCountries(data[0]);
                this.cooService.setCustomsOffice(data[0]);
                //console.log(this.cooMode)
                //this.cooService.cooData.CooBoxData.Header.CooMode = this.cooMode;
                this.showApp = true;
              });
                            
            });
            break;
          }
          
          default: {
            // default
             break;
          }
       }
      
        //this.cooKey.EntityNo = data['entityNo'];
        
        //this.cooOtherDetails.CooMode = data['cooMode'];
        // this.cooKey.ShipmentNumber = data['ShipmentNumber'];
        // this.cooKey.DeptCode = data['DeptCode'];
        // this.cooKey.CusDecOrder = data['CusDecOrder'];
        //console.log(this.cooKey)
      }
    );

      // this.cooService.setCooKey(this.cooKey);
      // this.cooService.setCooOtherDetails(this.cooOtherDetails);
      // this.setHeaderDetails();
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

      // if (deptCode == undefined || deptCode.isNullOrEmpty)
      // {
      //   return undefined;
      // }
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
      
      if (deptCode == undefined || deptCode.isNullOrEmpty)
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
  
  setHeaderDetails() {
   
      this.fetchArr.push(this.cooService.getCooBoxByEntityNo(this.cooKey))
      this.fetchArr.push(this.cooService.getCountriesList());
      this.fetchArr.push(this.cooService.getCustomsOfficeList());

      Promise.all(this.fetchArr).then((data: Array<any>) => {
        console.log(data[0])
        this.cooService.setCooBox(data[0]);
        this.cooService.setCountries(data[1]);
        this.cooService.setCustomsOffice(data[2]);

        this.cooService.cooDataSubject$.subscribe((result: ICooData) => {
             this.showApp = true;
             //alert(result.CooBoxData.Header.CustomerName)
       });

        //this.showApp = true;

        //alert(this.cooService.cooBox.Header.COO_IssuingCountry)
        // this.jsonCooHeader = {
        //   entityNo: this.cooKey.EntityNo,
        //   cooStatus: this.cooMode,
        //   cooType: this.cooService.cooBox.Header.AgentR_certificateOfOriginTypeName,
        //   CUSDECFile: this.cooKey.DeptCode + '-' + this.cooKey.ShipmentNumber + '/' + this.cooKey.CusDecOrder,
        //   destination: '',
        //   shipper: '',
        //   ETD: '',
        //   ATD: '',
        //   CUSGTW: ''
        // };

      }).catch(err => {
        console.log(err);
      });
  };


}
