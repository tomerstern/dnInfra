import { Component, OnInit } from '@angular/core';
import { CooService } from './services/coo.service';
import '../core/extensions';
import { ActivatedRoute, Router } from '@angular/router';
import { ICooData, CooKey, CooMode, CooBox, CooOtherDetails } from './models/coo';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-coo',
  templateUrl: './coo.component.html',
  styleUrls: ['./coo.component.scss']
})
export class CooComponent implements OnInit {

  constructor(public cooService: CooService , private activatedRoute: ActivatedRoute, private route: Router) {}
  showApp: boolean = false;
  cooType: string = '';
  cooMode: string = 'New';
  cooBox: CooBox;
  cooOtherDetails: CooOtherDetails = new CooOtherDetails();
  cooKey: CooKey = new CooKey();
  jsonCooHeader: any = {};
  fetchArr = [];
  eventsSubject: Subject<void> = new Subject<void>();

  startSaveData(data)
  {
    alert("start save .this is coo compnent " +data);
    this.eventsSubject.next();
  }

  saveData(data)
  {
      alert("coo comp. saving this data from tab:  " +  JSON.stringify(data));
  }




  ngOnInit(): void {
   
    this.activatedRoute.params.subscribe( async data =>
      {
        
        if (data['cooMode'] === undefined)
        {
            // Open error page
            this.route.navigate(['/error']);
        }

        this.cooMode = data['cooMode'].toString().toUpperCase();

        switch (this.cooMode) {
          case CooMode.New: {
            this.cooKey = this.setAndCheckCooKey(CooMode.New, data['entityNo'], data['ShipmentNumber'], 
                        data['DeptCode'], data['CusDecOrder']);
            if (this.cooKey === undefined){
              this.route.navigate(['/error']);
            }
            break;
          }
          case CooMode.Update:
          {
            this.cooKey = this.setAndCheckCooKey(CooMode.Update, data['entityNo'], data['ShipmentNumber'],
                        data['DeptCode'], data['CusDecOrder']);
            if (this.cooKey === undefined){
              this.showApp = true;
              this.route.navigate(['/error']);
            }
            this.cooService.getCooBoxFromServer(this.cooKey);
            this.cooService.cooDataSubject$.subscribe((result: ICooData) => {
              this.showApp = true;
            });
            break;
          }
          default: {
            // default
             break;
          }
       }

        this.cooKey.EntityNo = data['entityNo'];
        this.cooType = data['cooType'];
        this.cooOtherDetails.CooMode = data['cooMode'];
        this.cooKey.ShipmentNumber = data['ShipmentNumber'];
        this.cooKey.DeptCode = data['DeptCode'];
        this.cooKey.CusDecOrder = data['CusDecOrder'];
      }
    );

    this.cooService.setCooKey(this.cooKey);
    this.cooService.setCooOtherDetails(this.cooOtherDetails);
    this.setHeaderDetails();
  }

  setAndCheckCooKey(cooMode: CooMode, entityNo: string, shipmentNumber: string, deptCode: string, cusDecOrder: string){
     const result: CooKey = new CooKey();
    if (cooMode === CooMode.New) {
      if (!shipmentNumber.isNumber)
      {
        return undefined;
      }
      result.ShipmentNumber = +shipmentNumber;

      if (deptCode.isNullOrEmpty)
      {
        return undefined;
      }
      result.DeptCode = deptCode;

      if (!cusDecOrder.isNumber)
      {
        return undefined;
      }
      result.CusDecOrder = +cusDecOrder;
    }
   
    if (cooMode === CooMode.Update || cooMode === CooMode.Replace){
      if (!entityNo.isNumber)
      {
        return undefined;
      }
      result.EntityNo = +entityNo;
    }
    return result;
  }
  
  setHeaderDetails() {
   
      this.fetchArr.push(this.cooService.getCooBoxByEntityNo(this.cooKey))
      this.fetchArr.push(this.cooService.getCountriesList());
      this.fetchArr.push(this.cooService.getCustomsOfficeList());

      Promise.all(this.fetchArr).then((data: Array<any>) => {

        this.cooService.setCooBox(data[0]);
        this.cooService.setCountries(data[1]);
        this.cooService.setCustomsOffice(data[2]);

        this.showApp = true;

        //alert(this.cooService.cooBox.Header.COO_IssuingCountry)
        this.jsonCooHeader = {
          entityNo: this.cooKey.EntityNo,
          cooStatus: this.cooMode,
          cooType: this.cooService.cooBox.Header.AgentR_certificateOfOriginTypeName,
          CUSDECFile: this.cooKey.DeptCode + '-' + this.cooKey.ShipmentNumber + '/' + this.cooKey.CusDecOrder,
          destination: '',
          shipper: '',
          ETD: '',
          ATD: '',
          CUSGTW: ''
        };

      }).catch(err => {
        console.log(err);
      });
  };


}
