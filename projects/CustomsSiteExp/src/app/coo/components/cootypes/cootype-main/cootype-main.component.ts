import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GridDefinitions } from 'projects/dn-infra/src/lib/dp/components/table/objects/grid-definitions';
import { CooService } from '../../../services/coo.service';
import { CooKey , CooHeader , ICooHeadersData} from '../../../models/coo';

@Component({
  selector: 'app-cootype-main',
  templateUrl: './cootype-main.component.html',
  styleUrls: ['./cootype-main.component.scss']
})
export class CootypeMainComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private router: Router , private cooService : CooService) { }
  //cooKey: CooKey = { EntityNo: 0,  DeptCode: '1', ShipmentNumber: 2105050, CusDecOrder: 1 };
  cooKey: CooKey = { EntityNo: 0,  DeptCode: '', ShipmentNumber: 0, CusDecOrder: 0 };
  cooBox: CooHeader = new CooHeader ;
  headersData: ICooHeadersData;
  arrCooDataDetails: any[] = [];
  arrCooTypeList: any[] = [];
  fetchArr = [];
  cooType: string = "";
  render = false;
  gridDefinition: GridDefinitions;
  userID: string = "mosheme";

  ngOnInit(): void {
    
    this.activatedRoute.params.subscribe( async data =>
      {
        this.cooKey.EntityNo = 0;
        this.cooKey.ShipmentNumber = data['ShipmentNumber'];
        this.cooKey.CusDecOrder = data['CusDecOrder'];
        this.cooKey.DeptCode = data['DeptCode'];
        this.userID = data['UserID'];
        this.retrieveData();    
      }
    );
    
    
  }

  retrieveData()
  {  
    this.fetchArr.push(this.cooService.getCooTypesList())
    this.fetchArr.push(this.cooService.getCooHeaderList(this.cooKey));
    Promise.all(this.fetchArr).then((data: Array<any>) => {
      this.arrCooTypeList = data[0];
      this.headersData = { headers: data[1] } ;
      this.setCountForCooTypes();
    }).catch(err => {
      console.log(err);
    });
  }

  setCountForCooTypes()
  {
    let iCount:number = 0;
    let jsonCooData: any[] ;
    if( this.headersData.headers == undefined)
      return

    for (let i = 0; i < this.arrCooTypeList.length; i++)
    {
      this.headersData.headers[i].OpenDate = this.cooService.fixDate(this.headersData.headers[i].OpenDate);
      jsonCooData = this.headersData.headers.filter(x => x.AgentR_certificateOfOriginTypeCode == this.arrCooTypeList[i].code);
      iCount = jsonCooData.length;
      if( iCount > 0 )
        this.arrCooTypeList[i].description = 'P';
    }
  }
 
  onNotifyCOOType(sCooType: string): void { 
      
    this.cooType = sCooType;
    if( this.headersData.headers == undefined)
        return
    
    this.arrCooDataDetails = this.headersData.headers.filter(x => x.AgentR_certificateOfOriginTypeCode == sCooType);
    this.render = true;
  }
  
  onNotifyFormDetails(jsonFormDetails: any) {       
    this.cooBox = jsonFormDetails[0]; 
  }

  onNotifyButtonType(sButtonType: string) {
    
    let UpdateMode: boolean = true;
    let sMessage: string = '';
    let RowCount: number = 0;
        
    if (this.cooType == "" ) {
      alert("Need To Choose any COO Type");
      return
    }

    if (sButtonType == "New") {
      this.routerToCoo(0,this.cooType,sButtonType);
      return
    }

    // RowCount = this.cooBox[0].length;
    // if (RowCount == 0){
    //   alert("You can't " + sButtonType + " there is no COO to do it.");
    //   return
    // }

    if (this.cooBox == undefined)
    {
      alert("You need to choose any COO Type from the list");
      return
    }
        
    if (sButtonType == "Update") {
      
      // if (this.cooBox[0].COOStatus == 'Approved' || this.cooBox[0].COOStatus == 'Canceled')
      //   UpdateMode = false;

      // if (UpdateMode == false) {
      //   sMessage = this.cooBox[0].AgentR_certificateOfOriginTypeCode + " Form in status " + this.cooBox[0].COOStatus + ", Can't be update VIEW mode only."
      //   alert(sMessage)
      // }
      
     // else {

       this.routerToCoo(this.cooBox.EntityNo , this.cooBox.AgentR_certificateOfOriginTypeCode , sButtonType);
     // }
    }

    if (sButtonType == "View") 
      this.routerToCoo(this.cooBox.EntityNo , this.cooBox.AgentR_certificateOfOriginTypeCode , sButtonType);
    
    if (sButtonType == "Cancel") 
      alert("This Button Not Handlle yet")

    if (sButtonType == "Replace") 
      this.routerToCoo(this.cooBox.EntityNo , this.cooBox.AgentR_certificateOfOriginTypeCode , sButtonType);
  }

  routerToCoo(entityNo : number , cooType : string , cooMode : string ){
    
    this.router.navigate(['coo',{ 
                                  entityNo: entityNo ,
                                  cooType: cooType ,
                                  cooMode: cooMode ,
                                  ShipmentNumber: this.cooKey.ShipmentNumber ,
                                  DeptCode: this.cooKey.DeptCode,
                                  CusDecOrder: this.cooKey.CusDecOrder,
                                  UserID: this.userID
    } ]);
  }


}
