import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { GridColumn, GridDefinitions, GridColumnType, GridColumnParams } from 'projects/dn-infra/src/lib/dp/components/table/objects/grid-definitions';
import {ButtonDefinitions } from 'projects/dn-infra/src/lib/dp/components/button/objects/button-definitions';
import {SplitbuttonDefinitions, DpMenuItem , DpMessageService} from 'projects/dn-infra/src/lib/dp/components/splitbutton/objects/splitbutton-definitions';
import { faCoffee, faSpinner
} from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-test3',
  templateUrl: './test3.component.html',
  styleUrls: ['./test3.component.scss'],
  providers: [DpMessageService],
  encapsulation: ViewEncapsulation.None
})
export class Test3Component implements OnInit {
// Client Ref #
  constructor() { }

  btnDef1: ButtonDefinitions;
  btnDef2: ButtonDefinitions;

  SplitBtnDef1: SplitbuttonDefinitions;

  items1: DpMenuItem[];

  gridData3: any[];
  gridDefinition3: GridDefinitions;

  faCoffee = faCoffee;
  faSpinner = faSpinner;
  ngOnInit(): void {

    this.btnDef1 = new ButtonDefinitions({label: 'click 1'});
    this.btnDef2 = new ButtonDefinitions({label: 'SEND MESSAGE'});

    this.SplitBtnDef1 = new SplitbuttonDefinitions({
      label: 'Save - 1', icon: 'pi pi-plus'
    });

    const columns3: GridColumn[] = this.getColumns3(); /* מיזוג עמודות */
    // Supplier Details
    // Shipment Details

    // '<tr><th colspan="2" rowspan="2">Product Details</th><th colspan="5">Finance Data</th>' +
    // /*'<th rowspan="2">Actions</th>' +  בשביל עמודת Actions */
    // '</tr><tr><th colspan="3">Sales</th><th colspan="2">Profits</th>' +
    // '</tr>',


    this.gridDefinition3 = new GridDefinitions({
      dataKey: 'product', columns: columns3,
      HeadersMergeGroupsHtml: '<tr><th colspan="7" >Supplier Details</th>' +
      '<th colspan="4">Finance Data</th></tr>' ,
        /*'<th rowspan="2">Actions</th>' +  בשביל עמודת Actions */
      HideBtnsCol: true,
      toolbar: true,
      scrollable: true
    });


    this.getData();
  }



  getColumns3() {
    const columns: GridColumn[] = [];

    const columnParams1: GridColumnParams = new GridColumnParams();
    const column1 = new GridColumn({
      headername: 'Client Ref #', fieldname: 'product', columnParams: columnParams1
      , width: 160
    });
    columns.push(column1);


    const columnParams2: GridColumnParams = new GridColumnParams();
    const column2 = new GridColumn({
      headername: 'Open Data', fieldname: 'lastYearSale', columnParams: columnParams2
      , width: 136
    });
    columns.push(column2);

    const columnParams3: GridColumnParams = new GridColumnParams();
    const column3 = new GridColumn({
      headername: 'Incoterms', fieldname: 'thisYearSale', columnParams: columnParams3
      , width: 117
    });
    columns.push(column3);

    const columnParams4: GridColumnParams = new GridColumnParams();
    const column4 = new GridColumn({
      headername: 'Subsidiary', fieldname: 'lastYearProfit', columnParams: columnParams4
      , width: 134
    });
    columns.push(column4);

    const columnParams5: GridColumnParams = new GridColumnParams();
    const column5 = new GridColumn({
      headername: 'Name', fieldname: 'thisYearProfit', columnParams: columnParams5
      , width: 134
    });
    columns.push(column5);

    const columnParams6: GridColumnParams = new GridColumnParams();
    const column6 = new GridColumn({
      headername: 'Origin', fieldname: 'h6', columnParams: columnParams6
      , width: 89
    });
    columns.push(column6);


    const columnParams7: GridColumnParams = new GridColumnParams();
    const column7 = new GridColumn({
      headername: 'Country', fieldname: 'h7', columnParams: columnParams7
      , width: 93
    });
    columns.push(column7);
    /** */

    const columnParams8: GridColumnParams = new GridColumnParams();
    const column8 = new GridColumn({
      headername: 'FC File #', fieldname: 'h8', columnParams: columnParams8
      , width: 153
    });
    columns.push(column8);

    const columnParams9: GridColumnParams = new GridColumnParams();
    const column9 = new GridColumn({
      headername: 'HWB', fieldname: 'h9', columnParams: columnParams9
      , width: 105
    });
    columns.push(column9);

    const columnParams10: GridColumnParams = new GridColumnParams();
    const column10 = new GridColumn({
      headername: 'Pieces', fieldname: 'h10', columnParams: columnParams10
      , width: 110
    });
    columns.push(column10);

    const columnParams11: GridColumnParams = new GridColumnParams();
    const column11 = new GridColumn({
      headername: 'Remarks/Last Status ', fieldname: 'h11', columnParams: columnParams11
      , width: 185
    });
    columns.push(column11);

    return columns;
  }





  getData() {
    this.gridData3 = [
      { product: '4200114435435', lastYearSale: '24/06/2017', thisYearSale: '-', lastYearProfit: 'INTEL ELECTRICITY'
      , thisYearProfit: 'TOSOH SHFFHKJHH LONGTEXT' , h7: 'HOUSTON', h8: 'USA', h9: 'TLV1458999', h10: 'TLV1458999', h11: 'SK JAIN COMPANY'},
      { product: 'Black Watch', lastYearSale: 83, thisYearSale: 9, lastYearProfit: 423132, thisYearProfit: 312122 , h7: 'TLV1458999', h8: 'TLV1458999', h9: 'TLV1458999', h10: 'TLV1458999', h11: 'TLV1458999'},
      { product: 'Blue Band', lastYearSale: 38, thisYearSale: 5, lastYearProfit: 12321, thisYearProfit: 8500, h7: 'TLV1458999', h8: 'TLV1458999', h9: 'TLV1458999', h10: 'TLV1458999', h11: 'TLV1458999' },
      // { product: 'Blue T-Shirt', lastYearSale: 49, thisYearSale: 22, lastYearProfit: 745232, thisYearProfit: 65323 },
      // { product: 'Brown Purse', lastYearSale: 17, thisYearSale: 79, lastYearProfit: 643242, thisYearProfit: 500332 },
      // { product: 'Chakra Bracelet', lastYearSale: 52, thisYearSale: 65, lastYearProfit: 421132, thisYearProfit: 150005 },
      // { product: 'Galaxy Earrings', lastYearSale: 82, thisYearSale: 12, lastYearProfit: 131211, thisYearProfit: 100214 },
      // { product: 'Game Controller', lastYearSale: 44, thisYearSale: 45, lastYearProfit: 66442, thisYearProfit: 53322 },
      // { product: 'Gaming Set', lastYearSale: 90, thisYearSale: 56, lastYearProfit: 765442, thisYearProfit: 296232 },
      { product: 'Gold Phone Case', lastYearSale: 75, thisYearSale: 54, lastYearProfit: 21212, thisYearProfit: 12533, h7: 'TLV1458999', h8: 'TLV1458999', h9: 'TLV1458999', h10: 'TLV1458999', h11: 'TLV1458999' }
    ];


    this.items1 = [
      {
        label: 'Update', icon: 'pi pi-refresh', command: () => {
          this.update();
        }
      },
      {
        label: 'Delete', icon: 'pi pi-times', command: () => {
          this.delete();
        }
      },
      { label: 'Angular.io', icon: 'pi pi-info', url: 'http://angular.io' },
      { separator: true },
      { label: 'Setup', icon: 'pi pi-cog', routerLink: ['/page3'] }
    ];

  }

  save(severity: string) {
    alert('save: ' + severity);
  }

  update() {
    alert('In update');
  }

  delete() {
    alert('In delete');
  }


}
