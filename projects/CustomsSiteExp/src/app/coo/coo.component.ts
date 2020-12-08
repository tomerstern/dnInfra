import { Component, OnInit } from '@angular/core';
import { CooService } from './services/coo.service';
import '../core/extensions';
import { ActivatedRoute, Router } from '@angular/router';
import { ICooData, CooKey, CooMode,CooBox } from './models/coo';

@Component({
  selector: 'app-coo',
  templateUrl: './coo.component.html',
  styleUrls: ['./coo.component.scss']
})
export class CooComponent implements OnInit {

  constructor(public cooService: CooService , private activatedRoute: ActivatedRoute, private route: Router) {}
  key: CooKey;
  showApp: boolean = false;
  cooType: string = '';
  cooMode: string = 'New';
  cooBox: CooBox;
  jsonCooHeader: any = {};
  cooKey: CooKey = new CooKey();
  fetchArr = [];

  ngOnInit(): void {
   
    //this.activatedRoute.params.subscribe( async data =>
      //{
        
        // if (data['cooMode'] === undefined)
        // {
        //     // Open error page
        //     this.route.navigate(['/error']);
        // }

      //   this.cooMode = data['cooMode'].toString().toUpperCase();

      //   switch (this.cooMode) {
      //     case CooMode.New: {
      //       this.key = this.setAndCheckCooKey(CooMode.New, data['entityNo'], data['ShipmentNumber'], 
      //                   data['DeptCode'], data['CusDecOrder']);
      //       if (this.key === undefined){
      //         this.route.navigate(['/error']);
      //       }
      //       break;
      //     }
      //     case CooMode.Update:
      //     {
      //       this.key = this.setAndCheckCooKey(CooMode.Update, data['entityNo'], data['ShipmentNumber'],
      //                   data['DeptCode'], data['CusDecOrder']);
      //       if (this.key === undefined){
      //         this.showApp = true;
      //         this.route.navigate(['/error']);
      //       }
      //       this.cooService.getCooBoxFromServer(this.key);
      //       this.cooService.cooDataSubject$.subscribe((result: ICooData) => {
      //         this.showApp = true;
      //       });
      //       break;
      //     }
      //     default: {
      //       // default
      //        break;
      //     }
      //  }
      
    //     this.key.EntityNo = data['entityNo'];
    //     this.cooType = data['cooType'];
    //     this.cooMode = data['cooMode'];
    //     this.key.ShipmentNumber = data['ShipmentNumber'];
    //     this.key.DeptCode = data['DeptCode'];
    //     this.key.CusDecOrder = data['CusDecOrder'];
    //   }
    // );

    this.activatedRoute.params.subscribe( async data =>
      {
        this.cooKey.EntityNo = data['entityNo'];
        this.cooType = data['cooType'];
        this.cooMode = data['cooMode'];
        this.cooKey.ShipmentNumber = data['ShipmentNumber'];
        this.cooKey.DeptCode = data['DeptCode'];
        this.cooKey.CusDecOrder = data['CusDecOrder'];
      }
    );
    
    this.cooService.setCooKey(this.cooKey)
    this.setHeaderDetails();
  }

  setAndCheckCooKey(cooMode: CooMode, entityNo: string, shipmentNumber: string, deptCode: string, cusDecOrder: string){
     const result: CooKey = new CooKey();
    // if (cooMode === CooMode.New) {
    //   if (!shipmentNumber.isNumber)
    //   {
    //     return undefined;
    //   }
    //   result.ShipmentNumber = +shipmentNumber;

    //   if (deptCode.isNullOrEmpty)
    //   {
    //     return undefined;
    //   }
    //   result.DeptCode = deptCode;

    //   if (!cusDecOrder.isNumber)
    //   {
    //     return undefined;
    //   }
    //   result.CusDecOrder = +cusDecOrder;
    // }
   
    // if (cooMode === CooMode.Update || cooMode === CooMode.Replace){
    //   if (!entityNo.isNumber)
    //   {
    //     return undefined;
    //   }
    //   result.EntityNo = +entityNo;
    // }
    return result;
  }
  
  setHeaderDetails(){
    if (this.cooKey.ShipmentNumber == undefined )
    {
      this.jsonCooHeader = { 
                            entityNo: 585895 , 
                            cooStatus: 'New' ,
                            cooNo: 'CUS5555' ,
                            cooType: 'ERU-1' ,
                            CUSDECFile: '1-202564/2' ,
                            destination: 'NL - Nederland',
                            shipper: 'CARMEL OLEFINS LTD.',
                            ETD: '10/12/2020',
                            ATD: '10/12/2020' ,
                            CUSGTW: 'N'
                          };
     }
  else{
    
    this.fetchArr.push(this.cooService.getCooBoxByEntityNo(this.cooKey))
    this.fetchArr.push(this.cooService.getCountriesList());
    this.fetchArr.push(this.cooService.getCustomsOfficeList());
    
    Promise.all(this.fetchArr).then((data: Array<any>) => {
      
      this.cooService.setCooBox( data[0] );
      this.cooService.setCountries( data[1] );
      this.cooService.setCustomsOffice( data[2] );
      
      //alert(this.cooService.cooBox.Header.COO_IssuingCountry)
      this.jsonCooHeader = {
        entityNo: this.cooKey.EntityNo ,
        cooStatus: this.cooMode,
        cooType: this.cooService.cooBox.Header.AgentR_certificateOfOriginTypeName,
        CUSDECFile: this.cooKey.DeptCode + '-' + this.cooKey.ShipmentNumber + '/' + this.cooKey.CusDecOrder,
        destination: '',
        shipper: '' ,
        ETD: '',
        ATD: '' ,
        CUSGTW: ''
       };

    }).catch(err => {
      console.log(err);
    });


        }
  };


}
