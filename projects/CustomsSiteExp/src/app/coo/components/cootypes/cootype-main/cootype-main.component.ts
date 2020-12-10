import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GridDefinitions } from 'projects/dn-infra/src/lib/dp/components/table/objects/grid-definitions';
import { CooService } from '../../../services/coo.service';
import { CooKey , CooBox , ICooHeadersData} from '../../../models/coo';

@Component({
  selector: 'app-cootype-main',
  templateUrl: './cootype-main.component.html',
  styleUrls: ['./cootype-main.component.scss']
})
export class CootypeMainComponent implements OnInit {

  constructor(private router: Router , private cooService : CooService) { }
  cooKey: CooKey = { EntityNo: 0,  DeptCode: '1', ShipmentNumber: 2105050, CusDecOrder: 1 };
  cooBox: CooBox = new CooBox ;
  headersData: ICooHeadersData;
  arrCooDataDetails: any[] = [];
  arrCooTypeList: any[] = [];
  fetchArr = [];
  cooType: string = "";
  render = false;
  gridDefinition: GridDefinitions;

  // btnNewDef : any = {'label' : 'New'} ;
  // btnUpdateDef : any = {'label' : 'Update'} ;
  // btnReplaceDef : any = {'label' : 'Replace'} ;
  // btnCancelDef : any = {'label' : 'Cancel'} ;

  ngOnInit(): void {
    // this.getCooTypesData();
    // this.getCooData();
    
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
    // if (this.cooService.headersData.headers == undefined )
    //   return

    for (let i = 0; i < this.arrCooTypeList.length; i++)
    {
      jsonCooData = this.headersData.headers.filter(x => x.AgentR_certificateOfOriginTypeCode == this.arrCooTypeList[i].code);
      iCount = jsonCooData.length;
      if( iCount > 0 )
        this.arrCooTypeList[i].description = 'P';
    }
  }

  // async getCooTypesData() {
  //   this.arrCooTypeList = await this.cooService.getCooTypesList();
  // }

  //async getCooData() {
    //this.cooService.headersData = await this.cooService.getCooHeaderList(this.cooKey);
    //alert(this.cooService.headersData.headers.length);
    //alert(this.cooService.headersData.headers[1].OpenedBy);
    // this.arrCOODetails = [
    //   { LineNo: '1', FormType: 'EUR1', Entity: '585895', COODocs: 'CUS5555', Shipper: 'CARMEL OLEFINS LTD.', CNEE: 'AMAFREN S.A.', OpenDate: '01/09/2020  14:05:00', OpenBy: 'Tali Goren', COOStatus: 'Approved', DocStaus: 'Signed', Date: '20/09/2020  11:20:00', DHLStatus: 'Open', UpdateBy: '' },
    //   { LineNo: '1', FormType: 'EURMED', Entity: '854785', COODocs: 'CUS5522', Shipper: 'CARMEL OLEFINS LTD.', CNEE: 'AMAFREN S.A.', OpenDate: '22/11/2020', OpenBy: 'Moshe Mesilati', COOStatus: 'Reject', DocStaus: '', Date: '', DHLStatus: 'Draft', UpdateBy: 'Updated' },
    //   { LineNo: '2', FormType: 'EUR1', Entity: '585895', COODocs: 'CUS5533', Shipper: 'CARMEL OLEFINS LTD.', CNEE: 'AMAFREN S.A.', OpenDate: '22/11/2020', OpenBy: 'Moshe Mesilati', COOStatus: 'Canceled', DocStaus: '', Date: '', DHLStatus: 'Send Draft', UpdateBy: '' },
    //   { LineNo: '3', FormType: 'EUR1', Entity: '585895', COODocs: 'CUS5544', Shipper: 'CARMEL OLEFINS LTD.', CNEE: 'AMAFREN S.A.', OpenDate: '22/11/2020', OpenBy: 'Moshe Mesilati', COOStatus: '', DocStaus: '', Date: '', DHLStatus: 'Send Final', UpdateBy: '' },
    //   { LineNo: '1', FormType: 'NMC', Entity: '963852', COODocs: 'CUS5577', Shipper: 'CARMEL OLEFINS LTD.', CNEE: 'AMAFREN S.A.', OpenDate: '22/11/2020', OpenBy: 'Moshe Mesilati', COOStatus: '', DocStaus: '', Date: '', DHLStatus: 'Send Canceled', UpdateBy: '' },
    // ];
  //}

  setCooFormData(sCooType: string, nLineNo: number, sButtonType: string) {
    //this.shipmentService.SetCooData(this.clsShipment, this.ShipmentKey, sFormType, nLineNo, sButtonType)
  }

  onNotifyCOOType(sCooType: string): void {   
    this.cooType = sCooType;
    this.arrCooDataDetails = this.headersData.headers.filter(x => x.AgentR_certificateOfOriginTypeCode == sCooType);
    this.render = true;
  }

  
  onNotifyFormDetails(jsonFormDetails: any) {
    this.cooBox = jsonFormDetails;
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
      //let NewRow: number = RowCount + 1;
      //this.setCooFormData(this.FormType, NewRow, sButtonType);
      this.routerToCoo(0,this.cooType,sButtonType);
      return
    }

    // RowCount = this.cooBox[0].length;
    // if (RowCount == 0){
    //   alert("You can't " + sButtonType + " there is no COO to do it.");
    //   return
    // }

    // if (this.cooBox[0] == undefined)
    // {
    //   alert("You need to choose any COO Type from the list");
    //   return
    // }
        
    if (sButtonType == "Update") {
      
      // if (this.cooBox[0].COOStatus == 'Approved' || this.cooBox[0].COOStatus == 'Canceled')
      //   UpdateMode = false;

      // if (UpdateMode == false) {
      //   sMessage = this.cooBox[0].AgentR_certificateOfOriginTypeCode + " Form in status " + this.cooBox[0].COOStatus + ", Can't be update VIEW mode only."
      //   alert(sMessage)
      // }
      
     // else {
        this.setCooFormData(this.cooType, this.cooBox[0].EntityNo, sButtonType);
        this.routerToCoo(this.cooBox[0].EntityNo , this.cooBox[0].AgentR_certificateOfOriginTypeCode , sButtonType);
     // }
    }
    
    if (sButtonType == "Cancel") 
      alert("This Button Not Handlle yet")

    if (sButtonType == "Replace") 
      this.routerToCoo(this.cooBox[0].EntityNo , this.cooBox[0].AgentR_certificateOfOriginTypeCode , sButtonType);
  }

  routerToCoo(entityNo : number , cooType : string , cooMode : string ){
    this.router.navigate(['coo',{ 
                                  entityNo: entityNo ,
                                  cooType: cooType ,
                                  cooMode: cooMode ,
                                  ShipmentNumber: this.cooKey.ShipmentNumber ,
                                  DeptCode: this.cooKey.DeptCode,
                                  CusDecOrder: this.cooKey.CusDecOrder
    } ]);
  }


}
