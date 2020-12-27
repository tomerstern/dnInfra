import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ExportassistService } from 'projects/CustomsSiteExp/src/app/core/services/exportassist.service';
import { AutocompleteProperties } from 'projects/dn-infra/src/lib/dp/components/autocomplete/Objects/autocomplete-definitions';
import { InputTextProperties } from 'projects/dn-infra/src/lib/dp/components/inputtext/objects/inputtext-definitions';
import { GridColumn, GridColumnParams, GridColumnType, GridDefinitions } from 'projects/dn-infra/src/lib/dp/components/table/objects/grid-definitions';
import { CooGoodsDetails, COOInvoiceDetails } from '../../../models/coo';
import { CooService } from '../../../services/coo.service';

@Component({
  selector: 'app-coogoodsdetails',
  templateUrl: './coogoodsdetails.component.html',
  styleUrls: ['./coogoodsdetails.component.scss']
})
export class CoogoodsdetailsComponent implements OnInit {

  constructor(public cooService: CooService,
    public exportassistService: ExportassistService, 
    public translate: TranslateService) {

this.cooService.cooDataSubject$.subscribe(data => {
console.log(data);
})
}
  invoiceDetails: COOInvoiceDetails[] = [];
  goodsDetails: CooGoodsDetails[] = [];
  gridContainersDefinition: GridDefinitions;
  gridInvoiceDetailsDefinition: GridDefinitions;
  gridColumnTypeEnum = GridColumnType;
  //dataForAc3: any[] = [{ name: 'PO', code: '1' }, { name: 'INV', code: '2' }];
  ngOnInit(): void {
    this.getDataForGoodsDetails();
    
     const columns1: GridColumn[] = this.getInvoiceDetailsColumns();
    this.gridInvoiceDetailsDefinition = new GridDefinitions({
      dataKey: 'LineNumber',
      columns: columns1,
      toolbar: true,
      selectionMode: 'single',
      exportToExcel: false,
      exportToPdf: false      
    });

    
    const columns2 = this.getContainersColumns();
    this.gridContainersDefinition = new GridDefinitions({
      dataKey: 'LineNumber',
      columns: columns2,
      toolbar: true,
      selectionMode: 'single',
      exportToExcel: false,
      exportToPdf: false,
    });
  }
  
  getInvoiceDetailsColumns()
  {
    const columns: GridColumn[] = [];
    
    const columnParams1: GridColumnParams = new GridColumnParams();
    const column1 = new GridColumn({
      headername: 'Line',
      fieldname: 'LineNumber',
      columnParams: columnParams1,
      width: 10,
      clickColumnName: 'EntityNo',
      // onClick: (param) => {
      //   this.RowClick(param);
      // },
      
    });
    columns.push(column1);
   
    const columnParams2: GridColumnParams = new GridColumnParams();
    const column2 = new GridColumn({
      headername: 'Invoice No.',
      fieldname: 'InvoiceNum',
      columnParams: columnParams2,
      width: 40,
      clickColumnName: 'EntityNo',
      // onClick: (param) => {
      //   this.RowClick(param);
      // },
    });
    columns.push(column2);

    const columnParams3: GridColumnParams = new GridColumnParams();
    const column3 = new GridColumn({
      headername: 'Invoice Date',
      fieldname: 'InvoiceDate',
      columnParams: columnParams3,
      width: 40,
      clickColumnName: 'EntityNo',
      // onClick: (param) => {
      //   this.RowClick(param);
      // },
    });
    columns.push(column3);

    const columnParams4: GridColumnParams = new GridColumnParams();
    const column4 = new GridColumn({
      headername: 'Amount',
      fieldname: 'InvoiceSum',
      columnParams: columnParams4,
      width: 35,
      clickColumnName: 'EntityNo',
      // onClick: (param) => {
      //   this.RowClick(param);
      // },
    });
    columns.push(column4);

    const columnParams5: GridColumnParams = new GridColumnParams();
    const column5 = new GridColumn({
      headername: 'CUR',
      fieldname: 'CurrencyType',
      columnParams: columnParams5,
      width: 20,
      clickColumnName: 'EntityNo',
      // onClick: (param) => {
      //   this.RowClick(param);
      // },
    });
    columns.push(column5);

    const columnParams6: GridColumnParams = new GridColumnParams();
    const column6 = new GridColumn({
      headername: 'Description Of Goods',
      fieldname: 'DescriptionOfInvoice',
      columnParams: columnParams6,
      width: 50,
      clickColumnName: 'EntityNo',
      // onClick: (param) => {
      //   this.RowClick(param);
      // },
    });
    columns.push(column6);

    const columnParams7: GridColumnParams = new GridColumnParams();
    const column7 = new GridColumn({
      headername: 'Connected',
      fieldname: 'CurrencyType',
      columnParams: columnParams7,
      width: 20,
      clickColumnName: 'EntityNo',
      // onClick: (param) => {
      //   this.RowClick(param);
      // },
    });
    columns.push(column7);

    return columns;
  }

  getContainersColumns()
  {
    const columns: GridColumn[] = [];
    
    const columnParams1: GridColumnParams = new GridColumnParams();
    const column1 = new GridColumn({
      headername: 'Line',
      fieldname: 'LineNumber',
      columnParams: columnParams1,
      width: 10,
      clickColumnName: 'EntityNo',
      // onClick: (param) => {
      //   this.RowClick(param);
      // },
    });
    columns.push(column1);
   
    const columnParams2: GridColumnParams = new GridColumnParams();
    const column2 = new GridColumn({
      headername: 'Marks & Numbers',
      fieldname: 'MarksAndNumbers',
      columnParams: columnParams2,
      width: 40,
      clickColumnName: 'EntityNo',
      // onClick: (param) => {
      //   this.RowClick(param);
      // },
    });
    columns.push(column2);

    const columnParams3: GridColumnParams = new GridColumnParams();
    const column3 = new GridColumn({
      headername: 'Package Quantity',
      fieldname: 'PackageQuantity',
      columnParams: columnParams3,
      width: 40,
      clickColumnName: 'EntityNo',
      // onClick: (param) => {
      //   this.RowClick(param);
      // },
    });
    columns.push(column3);

    const columnParams4: GridColumnParams = new GridColumnParams();
    const column4 = new GridColumn({
      headername: 'Package Code',
      fieldname: 'PackageType',
      columnParams: columnParams4,
      width: 35,
      clickColumnName: 'EntityNo',
      // onClick: (param) => {
      //   this.RowClick(param);
      // },
    });
    columns.push(column4);

    const columnParams5: GridColumnParams = new GridColumnParams();
    const column5 = new GridColumn({
      headername: 'Package Type',
      fieldname: 'PackageType',
      columnParams: columnParams5,
      width: 20,
      clickColumnName: 'EntityNo',
      // onClick: (param) => {
      //   this.RowClick(param);
      // },
    });
    columns.push(column5);

    const columnParams6: GridColumnParams = new GridColumnParams();
    const column6 = new GridColumn({
      headername: 'Description Of Goods',
      fieldname: 'ItemDescription',
      columnParams: columnParams6,
      width: 50,
      clickColumnName: 'EntityNo',
      // onClick: (param) => {
      //   this.RowClick(param);
      // },
    });
    columns.push(column6);

    const columnParams7: GridColumnParams = new GridColumnParams();
    const column7 = new GridColumn({
      headername: 'Weight',
      fieldname: 'Weight',
      columnParams: columnParams7,
      width: 20,
      clickColumnName: 'Weight',
      // onClick: (param) => {
      //   this.RowClick(param);
      // },
    });
    columns.push(column7);

    const columnParams8: GridColumnParams = new GridColumnParams();
    const column8 = new GridColumn({
      headername: 'Measure Type',
      fieldname: 'MeasureType',
      columnParams: columnParams8,
      width: 50,
      clickColumnName: 'EntityNo',
      // onClick: (param) => {
      //   this.RowClick(param);
      // },
    });
    columns.push(column8);

    // const columnParams9: GridColumnParams = new GridColumnParams();
    // const column9 = new GridColumn({
    //   headername: 'Invoice No.',
    //   fieldname: '',
    //   columnParams: columnParams9,
    //   width: 50,
    //   clickColumnName: 'EntityNo',
    //   // onClick: (param) => {
    //   //   this.RowClick(param);
    //   // },
    // });
    // columns.push(column9);

    // const columnParams10: GridColumnParams = new GridColumnParams();
    // const column10 = new GridColumn({
    //   headername: 'Invoice Date',
    //   fieldname: '',
    //   columnParams: columnParams10,
    //   width: 50,
    //   clickColumnName: 'EntityNo',
    //   // onClick: (param) => {
    //   //   this.RowClick(param);
    //   // },
    // });
    // columns.push(column10);

    // const columnParams11: GridColumnParams = new GridColumnParams();
    // const column11 = new GridColumn({
    //   headername: 'Amount',
    //   fieldname: '',
    //   columnParams: columnParams11,
    //   width: 50,
    //   clickColumnName: 'EntityNo',
    //   // onClick: (param) => {
    //   //   this.RowClick(param);
    //   // },
    // });
    // columns.push(column11);

    // const columnParams12: GridColumnParams = new GridColumnParams();
    // const column12 = new GridColumn({
    //   headername: 'Cur',
    //   fieldname: '',
    //   columnParams: columnParams12,
    //   width: 20,
    //   clickColumnName: 'EntityNo',
    //   // onClick: (param) => {
    //   //   this.RowClick(param);
    //   // },
    // });
    // columns.push(column12);

    // const columnParams13: GridColumnParams = new GridColumnParams();
    // const column13 = new GridColumn({
    //   headername: 'Description Of Goods',
    //   fieldname: '',
    //   columnParams: columnParams13,
    //   width: 50,
    //   clickColumnName: 'EntityNo',
    //   // onClick: (param) => {
    //   //   this.RowClick(param);
    //   // },
    // });
    // columns.push(column13);

    const columnParams14: GridColumnParams = new GridColumnParams();
    const column14 = new GridColumn({
      headername: 'HTS No.',
      fieldname: 'ItemId',
      columnParams: columnParams14,
      width: 50,
      clickColumnName: 'EntityNo',
      // onClick: (param) => {
      //   this.RowClick(param);
      // },
    });
    columns.push(column14);

    const columnParams15: GridColumnParams = new GridColumnParams();
    const column15 = new GridColumn({
      headername: 'Origin Criterion',
      fieldname: 'OriginCriterion',
      columnParams: columnParams15,
      width: 50,
      clickColumnName: 'EntityNo',
      // onClick: (param) => {
      //   this.RowClick(param);
      // },
    });
    columns.push(column15);

    const columnParams16: GridColumnParams = new GridColumnParams();
    const column16 = new GridColumn({
      headername: 'Invoices',
      fieldname: 'Invoices',
      columnParams: columnParams16,
      width: 50,
      clickColumnName: 'EntityNo',
      onClick: (param) => {
        this.showInvoices(param);
      },
    });
    columns.push(column16);
    return columns;
  }
  invoicesForCont : COOInvoiceDetails[];
  showInvoices(param){
    this.invoicesForCont = param.Invoices;
  }

  
  getDataForGoodsDetails()
  {
    let inv1: COOInvoiceDetails = new COOInvoiceDetails();
    inv1.CurrencyType = "EUR";
    inv1.DescriptionOfInvoice ="desc aaaaaaa aaaaa a";
    inv1.EntityNo = 2;
    inv1.InvoiceDate = new Date();
    inv1.InvoiceNum = 1234;
    inv1.InvoiceSum = 32;
    inv1.IsInvoicesForPrint = false;
    inv1.LineNumber = 1;
    this.invoiceDetails.push(inv1);

    let inv2: COOInvoiceDetails = new COOInvoiceDetails();
    inv2.CurrencyType = "DOL";
    inv2.DescriptionOfInvoice ="desc ff wwwereee a";
    inv2.EntityNo = 2;
    inv2.InvoiceDate = new Date();
    inv2.InvoiceNum = 2224;
    inv2.InvoiceSum = 44;
    inv2.IsInvoicesForPrint = false;
    inv2.LineNumber = 2;
    this.invoiceDetails.push(inv2);

    let inv3: COOInvoiceDetails = new COOInvoiceDetails();
    inv3.CurrencyType = "EUR";
    inv3.DescriptionOfInvoice ="des wrewer nnnxxx";
    inv3.EntityNo = 2;
    inv3.InvoiceDate = new Date();
    inv3.InvoiceNum = 767;
    inv3.InvoiceSum = 331;
    inv3.IsInvoicesForPrint = false;
    inv3.LineNumber = 3;
    this.invoiceDetails.push(inv3);

    let gd: CooGoodsDetails = new CooGoodsDetails();
    gd.EntityNo = 2;
    gd.Invoices = [this.invoiceDetails[0], this.invoiceDetails[2]]
    gd.ItemDescription = "kjhsadf kjhfeeee";
    gd.ItemId = 34;
    gd.ItemSerial = 6454232;
    gd.LineNumber = 5;
    gd.MarksAndNumbers = "hfkjsdhfksjdhf skdjhfeeee";
    gd.MeasureType = "KGM";
    gd.OriginCriterion = "dsdsdsds"
    gd.PackageQuantity = 5
    gd.PackageType = "fdfdfd"
    gd.Weight = 43
    this.goodsDetails.push(gd);

    let gd2: CooGoodsDetails = new CooGoodsDetails();
    gd2.EntityNo = 2;
    gd2.Invoices = [this.invoiceDetails[1]]
    gd2.ItemDescription = "hghghgh";
    gd2.ItemId = 43;
    gd2.ItemSerial = 6454232;
    gd2.LineNumber = 6;
    gd2.MarksAndNumbers = "wwww";
    gd2.MeasureType = "KGM";
    gd2.OriginCriterion = "nnnn"
    gd2.PackageQuantity = 5
    gd2.PackageType = "fdfdfd"
    gd2.Weight = 43
    this.goodsDetails.push(gd2);
    
    let gd3: CooGoodsDetails = new CooGoodsDetails();
    gd3.EntityNo = 2;
    gd3.Invoices = [this.invoiceDetails[0], this.invoiceDetails[1]]
    gd3.ItemDescription = "kjhsadf kjhfeeee";
    gd3.ItemId = 89;
    gd3.ItemSerial = 6454232;
    gd3.LineNumber = 7;
    gd3.MarksAndNumbers = "hfkjsdhfksjdhf skdjhfeeee";
    gd3.MeasureType = "KGM";
    gd3.OriginCriterion = "dsdsdsds"
    gd3.PackageQuantity = 5
    gd3.PackageType = "fdfdfd"
    gd3.Weight = 43
    this.goodsDetails.push(gd3);
  }
}
