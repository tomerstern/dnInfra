import { Component, OnInit, Output } from '@angular/core';
import { GridColumn, GridDefinitions, GridColumnType, GridColumnParams } from 'projects/dn-infra/src/lib/dp/components/table/objects/grid-definitions';
import { ShipmentKey } from '../../../core/models/shipment';
import { TransmissionService } from '../service/transmission/transmission.service';
import { DisplayXMLComponent } from '../../../components/transmission/display-xml/display-xml.component';
import { ToastComponent } from 'projects/dn-infra/src/lib/dp/components/toast/toast.component';
import { DpDialogService, DpDynamicDialogRef } from 'projects/dn-infra/src/lib/dp/components/dynamicdialog/Objects/dynamicdialog-definitions';


@Component({
  selector: 'app-transmissionlog',
  templateUrl: './transmissionlog.component.html',
  styleUrls: ['./transmissionlog.component.scss'],
  providers: [DpDialogService]
})
export class TransmissionlogComponent implements OnInit {
  xml ;
  obj;
  //xml = `<note><to>User</to><from>Library</from><heading>Message</heading><body>Some XML to convert to JSON!</body></note>`;
  //@Output() notifyFormDetails: EventEmitter<any> = new EventEmitter<any>();
  constructor(private transmissionService : TransmissionService , public dialogService: DpDialogService) {}

  
  jsonRequestDetails: any[];
  gridData: any[];
  gridDefinition: GridDefinitions;
  fetchArr = [];
  shipmentKey: ShipmentKey = { DeptCode: '1', ShipmentNumber: 2105050, CusDecOrder: 1 };
  outputXml : any ;
  ref1: DpDynamicDialogRef;

  ngOnInit(): void {
    this.fetchArr.push(this.transmissionService.GetTansmissionLog(this.shipmentKey));
    Promise.all(this.fetchArr).then((data: Array<any>) => {
      this.gridData = data[0];
      this.transmissionService.setTransmission( data[0] )  ;      
    }).catch(err => {
      console.log(err);
    });

    const columns: GridColumn[] = this.getColumns();
      this.gridDefinition = new GridDefinitions({
        dataKey: 'LineNo', columns: columns, rows:3
      });
  }
 
  RowClick(RequestInternalNo: number): void {
    
    this.jsonRequestDetails = this.gridData.filter(x => x.RequestInternalNo == RequestInternalNo);
    this.xml = this.jsonRequestDetails[0].ReceiveFileBody ;

   //var convert = require('xml-js');
   //this.obj = JSON.parse(convert.xml2json(this.xml, {compact: true, spaces: 4}));
    // console.log(this.obj)
    // console.log(this.obj.Result.PC_NG_2281_MSG02_CertificateOfOriginRequestFeedback.ResponseContentHeader.Exception.ExeptionDescription)

    //this.notifyFormDetails.emit(jsonRequestDetails);
  }

  DisplayXML(dataXML: any)
  {
    this.outputXml = dataXML;
    this.ref1 = this.dialogService.open(DisplayXMLComponent , {
      header: 'XML Log ... ',
      data:this.outputXml,
      width: '60%',
      height: '70%'
    });

    this.ref1.onClose.subscribe((retVals) => {
      // console.log(retVals)
    });
  }

  getColumns() {
    const columns: GridColumn[] = [];

    const columnParams1: GridColumnParams = new GridColumnParams();
    const column1 = new GridColumn({
      headername: 'מספר תיק',
      fieldname: 'ModuleID',
      columnParams: columnParams1,
      width: 50,
      clickColumnName: 'RequestInternalNo',
      onClick: (param) => {
        this.RowClick(param);
      },
    });
    columns.push(column1);

    const columnParams2: GridColumnParams = new GridColumnParams();
    const column2 = new GridColumn({
      headername: 'Request Internal No',
      fieldname: 'RequestInternalNo',
      columnParams: columnParams1,
      width: 50,
      clickColumnName: 'RequestInternalNo',
      onClick: (param) => {
        this.RowClick(param);
      },
    });
    columns.push(column2);

    const columnParams3: GridColumnParams = new GridColumnParams();
    const column3 = new GridColumn({
      headername: 'Request Date', fieldname: 'RequestDate', columnParams: columnParams3
      , width: 100 
      ,clickColumnName: 'RequestInternalNo'
      , onClick: (param) => {
        this.RowClick(param);
      },
    });
    columns.push(column3);

    const columnParams4: GridColumnParams = new GridColumnParams();
    const column4 = new GridColumn({
      headername: 'Request Type', fieldname: 'RequestType', columnParams: columnParams4
      , width: 100 
      ,clickColumnName: 'RequestInternalNo'
      ,onClick: (param) => {
        this.RowClick(param);
      },
    });
    columns.push(column4);
    
    const columnParams5: GridColumnParams = new GridColumnParams();
    const column5 = new GridColumn({
      headername: 'Send File Body', fieldname: 'SendFileBody', columnParams: columnParams5
      , width: 100
      ,clickColumnName: 'RequestInternalNo'
      ,onClick: (param) => {
        this.RowClick(param);
      }, 
    });
    columns.push(column5);

    const columnParams6: GridColumnParams = new GridColumnParams();
    const column6 = new GridColumn({
      headername: 'Receive File Body', fieldname: 'ReceiveFileBody', columnParams: columnParams6
      , width: 100
      ,clickColumnName: 'ReceiveFileBody'
      ,onClick: (param) => {
        this.DisplayXML(param);
      }, 
    });
    columns.push(column6);
    
    
        
    return columns;
  }

}
