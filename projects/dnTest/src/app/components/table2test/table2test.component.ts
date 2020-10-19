import { Component, OnInit } from '@angular/core';
import { GridColumn, GridDefinitions, GridColumnType, GridColumnParams } from 'projects/dn-infra/src/lib/dp/components/table/objects/grid-definitions';
import { CustomerService } from '../../events/services/customerservice';

// import { getLocaleDateFormat } from '@angular/common';

@Component({
  selector: 'app-table2test',
  templateUrl: './table2test.component.html',
  styleUrls: ['./table2test.component.scss']
})
export class Table2testComponent implements OnInit {

  gridData1: any[];
  gridData2: any[];
  gridData3: any[];
  gridData4: any[];
  gridData5: any[];

  gridDefinition: GridDefinitions;
  gridDefinition1: GridDefinitions;
  gridDefinition2: GridDefinitions;
  gridDefinition3: GridDefinitions;
  gridDefinition4: GridDefinitions;
  gridDefinition5: GridDefinitions;

  customers: any[];

  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {

    const columns1: GridColumn[] = this.getColumns1(); /* הקפאת כותרת */

    this.gridDefinition1 = new GridDefinitions({
      dataKey: 'id', columns: columns1,
      FreezeHeaderTableHeight: '200px',  scrollable: true, /* for example */
      toolbar: true
    });

    const columns2: GridColumn[] = this.getColumns2(); /* הקפאת עמודות */
    this.gridDefinition2 = new GridDefinitions({
      dataKey: 'header1', columns: columns2, isFreezeColumns: true,
      toolbar: true
    });


    const columns3: GridColumn[] = this.getColumns3(); /* מיזוג עמודות */
    this.gridDefinition3 = new GridDefinitions({
      dataKey: 'product', columns: columns3,
      HeadersMergeGroupsHtml: '<tr><th colspan="2" rowspan="2">Product Details</th><th colspan="5">Finance Data</th>' +
        /*'<th rowspan="2">Actions</th>' +  בשביל עמודת Actions */
        '</tr><tr><th colspan="3">Sales</th><th colspan="2">Profits</th>' +
        '</tr>',
      HideBtnsCol: true,
      toolbar: true
    });



    const columns4: GridColumn[] = this.getColumns4(); /* עמודה מחושבת + SUM+TOTAL */

    this.gridDefinition4 = new GridDefinitions({
      dataKey: 'product', columns: columns4,
      toolbar: true
    });



    const columns5: GridColumn[] = this.getColumns5(); /* הקפאת כותרת ועמודות */

    this.gridDefinition5 = new GridDefinitions({
      dataKey: 'product', columns: columns5,
      FreezeHeaderTableHeight: '202px', isFreezeColumns: true,  /* for example */
      toolbar: true
    });

    this.getData();
  }


  getColumns1() {
    const columns: GridColumn[] = [];

    const columnParams1: GridColumnParams = new GridColumnParams();
    const column1 = new GridColumn({
      headername: 'Product Name', fieldname: 'product', columnParams: columnParams1
    });
    columns.push(column1);


    const columnParams2: GridColumnParams = new GridColumnParams();
    const column2 = new GridColumn({
      headername: 'last Year Sale', fieldname: 'lastYearSale', columnParams: columnParams2
    });
    columns.push(column2);

    const columnParams3: GridColumnParams = new GridColumnParams();
    const column3 = new GridColumn({
      headername: 'this Year Sale', fieldname: 'thisYearSale', columnParams: columnParams3
    });
    columns.push(column3);

    const columnParams4: GridColumnParams = new GridColumnParams();
    const column4 = new GridColumn({
      headername: 'last Year Profit', fieldname: 'lastYearProfit', columnParams: columnParams4
    });
    columns.push(column4);


    const columnParams5: GridColumnParams = new GridColumnParams();
    const column5 = new GridColumn({
      headername: 'this Year Profit', fieldname: 'thisYearProfit', columnParams: columnParams5
    });
    columns.push(column5);

    return columns;
  }



  getColumns2() {
    const columns: GridColumn[] = [];

    const columnParams1: GridColumnParams = new GridColumnParams();
    const column1 = new GridColumn({
      headername: 'header name 1', fieldname: 'header1', columnParams: columnParams1
      , width: 450 /* for example */
      // , width: 1250 
    });
    columns.push(column1);


    const columnParams2: GridColumnParams = new GridColumnParams();
    const column2 = new GridColumn({
      headername: 'header name 2', fieldname: 'header2', columnParams: columnParams2
      , width: 150 /* for example */
    });
    columns.push(column2);

    const columnParams3: GridColumnParams = new GridColumnParams();
    const column3 = new GridColumn({
      headername: 'header name 3', fieldname: 'header3', columnParams: columnParams3
      , width: 150 /* for example */
    });
    columns.push(column3);

    const columnParams4: GridColumnParams = new GridColumnParams();
    const column4 = new GridColumn({
      headername: 'header name 4', fieldname: 'header4', columnParams: columnParams4
      , width: 144 /* for example */
    });
    columns.push(column4);


    const columnParams5: GridColumnParams = new GridColumnParams();
    const column5 = new GridColumn({
      headername: 'header name 5', fieldname: 'header5', columnParams: columnParams5
      , width: 150
      /* for example */
    });
    columns.push(column5);

    const columnParams6: GridColumnParams = new GridColumnParams();
    const column6 = new GridColumn({
      headername: 'header name 6', fieldname: 'header6', columnParams: columnParams6
      , width: 158 /* for example */
      , ColumnSum: true
    });
    columns.push(column6);

    const columnParams7: GridColumnParams = new GridColumnParams();
    const column7 = new GridColumn({
      headername: 'header name 7', fieldname: 'header7', columnParams: columnParams7
      , width: 170 /* for example */
    });
    columns.push(column7);

    const columnParams8: GridColumnParams = new GridColumnParams();
    const column8 = new GridColumn({
      headername: 'header name 8', fieldname: 'header8', columnParams: columnParams8
      , width: 300 /* for example */
    });
    columns.push(column8);

    const columnParams9: GridColumnParams = new GridColumnParams();
    const column9 = new GridColumn({
      headername: 'header name 9', fieldname: 'header9', columnParams: columnParams9
      , width: 300 /* for example */
    });
    columns.push(column9);

    return columns;
  }


  getColumns3() {
    const columns: GridColumn[] = [];

    const columnParams1: GridColumnParams = new GridColumnParams();
    const column1 = new GridColumn({
      headername: 'Product Name', fieldname: 'product', columnParams: columnParams1
    });
    columns.push(column1);


    const columnParams2: GridColumnParams = new GridColumnParams();
    const column2 = new GridColumn({
      headername: 'last Year Sale', fieldname: 'lastYearSale', columnParams: columnParams2
    });
    columns.push(column2);

    const columnParams3: GridColumnParams = new GridColumnParams();
    const column3 = new GridColumn({
      headername: 'this Year Sale', fieldname: 'thisYearSale', columnParams: columnParams3
    });
    columns.push(column3);

    const columnParams4: GridColumnParams = new GridColumnParams();
    const column4 = new GridColumn({
      headername: 'last Year Profit', fieldname: 'lastYearProfit', columnParams: columnParams4
    });
    columns.push(column4);


    const columnParams5: GridColumnParams = new GridColumnParams();
    const column5 = new GridColumn({
      headername: 'this Year Profit', fieldname: 'thisYearProfit', columnParams: columnParams5
    });
    columns.push(column5);

    const columnParams6: GridColumnParams = new GridColumnParams();
    const column6 = new GridColumn({
      headername: 'Profit 1', fieldname: 'thisYearProfit', columnParams: columnParams6
    });
    columns.push(column6);


    const columnParams7: GridColumnParams = new GridColumnParams();
    const column7 = new GridColumn({
      headername: 'Profit 2', fieldname: 'sumAndTotal', columnParams: columnParams7
    });
    columns.push(column7);
    return columns;
  }

  
  async SetData() {
    this.customers = await this.customerService.getCustomersLarge();
  }

  getColumns4() {
    const columns: GridColumn[] = [];

    const columnParams1: GridColumnParams = new GridColumnParams();
    const column1 = new GridColumn({
      headername: 'Product Name New', fieldname: 'product', columnParams: columnParams1,
      ColumnTotal: true /* for example */
    });
    columns.push(column1);


    const columnParams2: GridColumnParams = new GridColumnParams();
    const column2 = new GridColumn({
      headername: 'regular sum', fieldname: 'lastYearSale', columnParams: columnParams2,
      ColumnSum: true /* for example */
    });
    columns.push(column2);

    const columnParams3: GridColumnParams = new GridColumnParams();
    const column3 = new GridColumn({
      headername: 'sum point', fieldname: 'thisYearSale', columnParams: columnParams3,
      ColumnSum: true /* for example */
    });
    columns.push(column3);

    const columnParams4: GridColumnParams = new GridColumnParams();
    const column4 = new GridColumn({
      headername: 'dont Sum', fieldname: 'dontSum', columnParams: columnParams4
    });
    columns.push(column4);


    const columnParams5: GridColumnParams = new GridColumnParams();
    const column5 = new GridColumn({
      headername: 'LocaleString+comma', fieldname: 'lastYearProfit', columnParams: columnParams5,
      ColumnSum: true, LocaleString: true /* for example */
    });
    columns.push(column5);


    const columnParams6: GridColumnParams = new GridColumnParams();
    const column6 = new GridColumn({
      headername: 'Sum Only Numbers', fieldname: 'thisYearProfit', columnParams: columnParams6,
      ColumnSum: true /* for example */
    });
    columns.push(column6);


    const columnParams7: GridColumnParams = new GridColumnParams();
    const column7 = new GridColumn({
      headername: 'Sum & Total', fieldname: 'sumAndTotal', columnParams: columnParams7,
      ColumnSum: true, ColumnTotal: true, LocaleString: true /* for example */
    });
    columns.push(column7);

    return columns;
  }



  getColumns5() {
    const columns: GridColumn[] = [];

    const columnParams1: GridColumnParams = new GridColumnParams();
    const column1 = new GridColumn({
      headername: 'header name 1', fieldname: 'header1', columnParams: columnParams1
      , width: 450 /* for example */
      // , width: 1250
    });
    columns.push(column1);


    const columnParams2: GridColumnParams = new GridColumnParams();
    const column2 = new GridColumn({
      headername: 'header name 2', fieldname: 'header2', columnParams: columnParams2
      , width: 150 /* for example */
      , ColumnSum: true
    });
    columns.push(column2);

    const columnParams3: GridColumnParams = new GridColumnParams();
    const column3 = new GridColumn({
      headername: 'header name 3', fieldname: 'header3', columnParams: columnParams3
      , width: 150 /* for example */
    });
    columns.push(column3);

    const columnParams4: GridColumnParams = new GridColumnParams();
    const column4 = new GridColumn({
      headername: 'header name 4', fieldname: 'header4', columnParams: columnParams4
      , width: 140 /* for example */
    });
    columns.push(column4);


    const columnParams5: GridColumnParams = new GridColumnParams();
    const column5 = new GridColumn({
      headername: 'header name 5', fieldname: 'header5', columnParams: columnParams5
      , width: 132
      /* for example */
    });
    columns.push(column5);

    const columnParams6: GridColumnParams = new GridColumnParams();
    const column6 = new GridColumn({
      headername: 'header name 6', fieldname: 'header6', columnParams: columnParams6
      , width: 148 /* for example */
      , ColumnSum: true
    });
    columns.push(column6);

    const columnParams7: GridColumnParams = new GridColumnParams();
    const column7 = new GridColumn({
      headername: 'header name 7', fieldname: 'header7', columnParams: columnParams7
      , width: 170 /* for example */
    });
    columns.push(column7);

    const columnParams8: GridColumnParams = new GridColumnParams();
    const column8 = new GridColumn({
      headername: 'header name 8', fieldname: 'header8', columnParams: columnParams8
      , width: 300 /* for example */
    });
    columns.push(column8);

    const columnParams9: GridColumnParams = new GridColumnParams();
    const column9 = new GridColumn({
      headername: 'header name 9', fieldname: 'header9', columnParams: columnParams9
      , width: 300 /* for example */
    });
    columns.push(column9);

    return columns;
  }




  getData() {
    this.gridData1 = [
      { product: 'Bamboo Watch טקסט בעברית', lastYearSale: 51, thisYearSale: 40, lastYearProfit: 54406, thisYearProfit: 43342 },
      { product: 'Black Watch', lastYearSale: 83, thisYearSale: 9, lastYearProfit: 423132, thisYearProfit: 312122 },
      { product: 'Blue Band', lastYearSale: 38, thisYearSale: 5, lastYearProfit: 12321, thisYearProfit: 8500 },
      { product: 'Blue T-Shirt', lastYearSale: 49, thisYearSale: 22, lastYearProfit: 745232, thisYearProfit: 65323 },
      { product: 'Brown Purse', lastYearSale: 17, thisYearSale: 79, lastYearProfit: 643242, thisYearProfit: 500332 },
      { product: 'Chakra Bracelet', lastYearSale: 52, thisYearSale: 65, lastYearProfit: 421132, thisYearProfit: 150005 },
      { product: 'Galaxy Earrings', lastYearSale: 82, thisYearSale: 12, lastYearProfit: 131211, thisYearProfit: 100214 },
      { product: 'Game Controller', lastYearSale: 44, thisYearSale: 45, lastYearProfit: 66442, thisYearProfit: 53322 },
      { product: 'Gaming Set', lastYearSale: 90, thisYearSale: 56, lastYearProfit: 765442, thisYearProfit: 296232 },
      { product: 'Gold Phone Case', lastYearSale: 75, thisYearSale: 54, lastYearProfit: 21212, thisYearProfit: 12533 }
    ];



    this.gridData2 = [
      {
        header1: 'Bamboo Watch', header2: 51, header3: 40, header4: 54406, header5: 43342
        , header6: 51, header7: 40, header8: 54406, header9: 45
      },
      {
        header1: 'Black Watch', header2: 83, header3: 9, header4: 423132, header5: 54
        , header6: 52, header7: 40, header8: 54406, header9: 545
      },
      {
        header1: 'Blue Band', header2: 38, header3: 5, header4: 12321, header5: 8500
        , header6: 53, header7: 40, header8: 54406, header9: 7
      },
      {
        header1: 'Blue T-Shirt', header2: 49, header3: 22, header4: 745232, header5: 65323
        , header6: 54, header7: 40, header8: 54406, header9: 32
      },
      {
        header1: 'Brown Purse', header2: 17, header3: 79, header4: 643242, header5: 500332
        , header6: 55, header7: 40, header8: 54406, header9: 343
      },
      {
        header1: 'Product Watch', header2: 83, header3: 9, header4: 76, header5: 78
        , header6: 76, header7: 87, header8: 6, header9: 76
      },
      {
        header1: 'Product Band', header2: 38, header3: 5, header4: 76, header5: 87
        , header6: 76, header7: 45, header8: 76, header9: 7
      },
      {
        header1: 'Chakra Bracelet', header2: 52, header3: 65, header4: 421132, header5: 150005
        , header6: 56, header7: 40, header8: 54406, header9: 211
      }/*,
      {
        header1: 'Galaxy Earrings', header2: 82, header3: 12, header4: 131211, header5: 100214
        , header6: 57, header7: 40, header8: 54406, header9: 832
      },
      {
        header1: 'Game Controller', header2: 44, header3: 45, header4: 115, header5: 53322
        , header6: 58, header7: 40, header8: 54406, header9: 46
      },
      {
        header1: 'Gaming Set', header2: 90, header3: 56, header4: 656, header5: 54
        , header6: 59, header7: 40, header8: 54406, header9: 542
      },
      {
        header1: 'Gold Phone Case', header2: 75, header3: 54, header4: 21212, header5: 12533
        , header6: 60, header7: 40, header8: 54406, header9: 654
      }*/
    ];

    this.gridData5 = this.gridData2;

    this.gridData4 = [
      {
        product: 'Bamboo Watch', lastYearSale: 51, thisYearSale: 40.2232, dontSum: 55, lastYearProfit: 54406, thisYearProfit: 1
        , sumAndTotal: 22
      },
      {
        product: 'Black Watch', lastYearSale: 83, thisYearSale: 9.11, dontSum: 4, lastYearProfit: 423132, thisYearProfit: 2
        , sumAndTotal: 112
      },
      {
        product: 'Blue Band', lastYearSale: 38, thisYearSale: 5, dontSum: 54, lastYearProfit: 12321, thisYearProfit: 3
        , sumAndTotal: 500
      },
      {
        product: 'Blue T-Shirt', lastYearSale: 49, thisYearSale: 22.765, dontSum: 376, lastYearProfit: 745232, thisYearProfit: 4
        , sumAndTotal: 600
      },
      { product: 'Brown Purse', lastYearSale: 17, thisYearSale: 79, dontSum: 7, lastYearProfit: 643242, thisYearProfit: 5 },
      { product: 'Chakra Bracelet', lastYearSale: 52, thisYearSale: 65.11, dontSum: 43, lastYearProfit: 421132, thisYearProfit: 6 },
      { product: 'Galaxy Earrings', lastYearSale: 82, thisYearSale: 12.33, dontSum: 476, lastYearProfit: 131211, thisYearProfit: 7 },
      { product: 'Game Controller', lastYearSale: 44, thisYearSale: 45.4254, dontSum: 22, lastYearProfit: 66442, thisYearProfit: 8 },
      { product: 'Gaming Set', lastYearSale: 90, thisYearSale: 56, dontSum: 23, lastYearProfit: 765442, thisYearProfit: '!@#$%^&*()' },
      { product: 'Gold Phone Case', lastYearSale: 75, thisYearSale: 54.22, dontSum: 65, lastYearProfit: 21212, thisYearProfit: 'ABCD' }
    ];
  }


}
