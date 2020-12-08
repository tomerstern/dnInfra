import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ShipmentService } from '../../../../services/shipment.service';
import { Shipment } from '../../../../models/shipment';
import { GridDefinitions } from 'projects/dn-infra/src/lib/dp/components/table/objects/grid-definitions';

export interface iShipmentData {
  dataShipment: Shipment;
  updShipment: Shipment;
}

@Component({
  selector: 'app-forms-main',
  templateUrl: './forms-main.component.html',
  styleUrls: ['./forms-main.component.scss']
})
export class FormsMainComponent implements OnInit {

  constructor(private router: Router, private shipmentService: ShipmentService) { }
  clsShipment: Shipment = new Shipment();
  ShipmentKey: string;
  jsonShipment: any = { Dept_Code: '1', ShipmentNumber: 2105050, Shlifa_Order: 1, ShipmentKey: "1-2105050/1" }
  arrFormsDetails: any[] = [];
  arrFormDetails: any[] = [];
  FormDetails: any = {};
  FormType: string = "";
  render = false;
  gridDefinition: GridDefinitions;
  ngOnInit(): void {
    this.GetFormsData();
    this.SetShipmentKey();

    // this.shipmentService.getCooDataFromServer()
    // this.shipmentService.shipmentDataSubject.subscribe((shipmentData: iShipmentData) => {
    //   if (shipmentData) {
    //     console.log(shipmentData)
    //       //this.showApp = true;
  //  }
  //});
  
  }

  SetShipmentKey() {
    this.clsShipment.Dept_Code = '1';
    this.clsShipment.ShipmentNumber = 2105050;
    this.clsShipment.Shlifa_Order = 1;
    this.ShipmentKey = this.clsShipment.Dept_Code + '-' + this.clsShipment.ShipmentNumber + '/' + this.clsShipment.Shlifa_Order;
  }

  GetFormsData() {
    this.arrFormsDetails = [
      { LineNo: '1', FormType: 'EUR1', Entity: '585895', COODocs: 'CUS5555', Shipper: 'CARMEL OLEFINS LTD.', CNEE: 'AMAFREN S.A.', OpenDate: '01/09/2020  14:05:00', OpenBy: 'Tali Goren', COOStatus: 'Approved', DocStaus: 'Signed', Date: '20/09/2020  11:20:00', DHLStatus: 'Open', UpdateBy: '' },
      { LineNo: '1', FormType: 'EURMED', Entity: '854785', COODocs: 'CUS5522', Shipper: 'CARMEL OLEFINS LTD.', CNEE: 'AMAFREN S.A.', OpenDate: '22/11/2020', OpenBy: 'Moshe Mesilati', COOStatus: 'Reject', DocStaus: '', Date: '', DHLStatus: 'Draft', UpdateBy: 'Updated' },
      { LineNo: '2', FormType: 'EUR1', Entity: '585895', COODocs: 'CUS5533', Shipper: 'CARMEL OLEFINS LTD.', CNEE: 'AMAFREN S.A.', OpenDate: '22/11/2020', OpenBy: 'Moshe Mesilati', COOStatus: 'Canceled', DocStaus: '', Date: '', DHLStatus: 'Send Draft', UpdateBy: '' },
      { LineNo: '3', FormType: 'EUR1', Entity: '585895', COODocs: 'CUS5544', Shipper: 'CARMEL OLEFINS LTD.', CNEE: 'AMAFREN S.A.', OpenDate: '22/11/2020', OpenBy: 'Moshe Mesilati', COOStatus: '', DocStaus: '', Date: '', DHLStatus: 'Send Final', UpdateBy: '' },
      { LineNo: '1', FormType: 'NMC', Entity: '963852', COODocs: 'CUS5577', Shipper: 'CARMEL OLEFINS LTD.', CNEE: 'AMAFREN S.A.', OpenDate: '22/11/2020', OpenBy: 'Moshe Mesilati', COOStatus: '', DocStaus: '', Date: '', DHLStatus: 'Send Canceled', UpdateBy: '' },
    ];
  }

  SetShipmentFormData(sFormType: string, nLineNo: number, sButtonType: string) {
    //this.shipmentService.SetCooData(this.clsShipment, this.ShipmentKey, sFormType, nLineNo, sButtonType)

  }

  onNotifyFormType(sFormType: string): void {
    this.FormType = sFormType;
    this.arrFormDetails = this.arrFormsDetails.filter(x => x.FormType == sFormType);
    // this.render = false;
    // console.log('hey');
    this.render = true;
    //console.log(this.arrFormDetails);
    //alert(this.arrFromDetails[0].FormType)
  }

  onNotifyFormDetails(jsonFormDetails: any) {
    this.FormDetails = jsonFormDetails
  }

  onNotifyButtonType(sButtonType: string) {
    let UpdateMode: boolean = true;
    let sMessage: string = "";
    let RowCount: number = this.arrFormDetails.length;
    let RowSelected : number = this.FormDetails.length;
    if (this.FormType == "" ) {
      alert("Need To Choose any Form");
      return
    }

    if (sButtonType == "New") {
      let NewRow: number = RowCount + 1;
      this.SetShipmentFormData(this.FormType, NewRow, sButtonType);
      this.router.navigate(['/coo']);
      return
    }

    if (RowCount == 0){
      alert("You can't " + sButtonType + " there is no form to do it.");
      return
    }

    if (RowSelected == undefined)
    {
      alert("You need to choose any row from list");
      return
    }
    
    if (sButtonType == "Update") {
      
      if (this.FormDetails[0].COOStatus == 'Approved' || this.FormDetails[0].COOStatus == 'Canceled')
        UpdateMode = false;

      if (UpdateMode == false) {
        sMessage = this.FormDetails[0].FormType + " Form in status " + this.FormDetails[0].COOStatus + ", Can't be update VIEW mode only."
        alert(sMessage)
      }
      else {
        this.SetShipmentFormData(this.FormType, this.FormDetails[0].LineNo, sButtonType);
        this.router.navigate(['/coo']);
      }
    }
    if (sButtonType == "Cancel") 
      alert("This Button Not Handlle yet")

      if (sButtonType == "Replace") 
      alert("This Button Not Handlle yet")
  }

}
