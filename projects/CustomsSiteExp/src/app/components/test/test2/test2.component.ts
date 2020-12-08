import { Component, OnInit } from '@angular/core';
import { GridColumn, GridDefinitions, GridColumnType, GridColumnParams } from 'projects/dn-infra/src/lib/dp/components/table/objects/grid-definitions';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-test2',
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.scss']
})
export class Test2Component implements OnInit {
  columns1: GridColumn[];
  gridData1: any[];
  gridDefinition1: GridDefinitions;

  header1: string;  header2: string;  header3: string;  header4: string; header5: string;

  constructor(public translate: TranslateService) { }


  ngOnInit(): void {

    this.translateVals();


    this.columns1 = this.getColumns1();

    this.gridDefinition1 = new GridDefinitions({
      dataKey: 'product', columns: this.columns1,
      FreezeHeaderTableHeight: '200px',  /*  הקפאת כותרת */
      toolbar: true
    });

    this.getData1();


  }

  getData1() {
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
  }

  getColumns1() {
    const columns: GridColumn[] = [];

    const columnParams1: GridColumnParams = new GridColumnParams();
    const column1 = new GridColumn({
      headername: this.translate.instant('tableCustom.header1'), fieldname: 'product', columnParams: columnParams1
    });
    columns.push(column1);


    const columnParams2: GridColumnParams = new GridColumnParams();
    const column2 = new GridColumn({
      headername: this.translate.instant('tableCustom.header2'), fieldname: 'lastYearSale', columnParams: columnParams2
    });
    columns.push(column2);

    const columnParams3: GridColumnParams = new GridColumnParams();
    const column3 = new GridColumn({
      headername: this.header3, fieldname: 'thisYearSale', columnParams: columnParams3
    });
    columns.push(column3);

    const columnParams4: GridColumnParams = new GridColumnParams();
    const column4 = new GridColumn({
      headername: this.header4, fieldname: 'lastYearProfit', columnParams: columnParams4
    });
    columns.push(column4);


    const columnParams5: GridColumnParams = new GridColumnParams();
    const column5 = new GridColumn({
      headername: this.header5, fieldname: 'thisYearProfit', columnParams: columnParams5
    });
    columns.push(column5);

    return columns;
  }


  translateVals() {

    this.translate.get(['tableCustom.header3', 'tableCustom.header4', 'tableCustom.header5'])
    .subscribe(translations => {
      this.header3 = translations['tableCustom.header3'];
      this.header4 = translations['tableCustom.header4'];
      this.header5 = translations['tableCustom.header5'];
    });
  }

}
