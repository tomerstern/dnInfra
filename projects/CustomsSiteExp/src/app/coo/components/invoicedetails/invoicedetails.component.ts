import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { GridColumn, GridColumnParams, GridDefinitions } from 'projects/dn-infra/src/lib/dp/components/table/objects/grid-definitions';
import { COOInvoiceDetails } from '../../models/coo';

@Component({
    selector: 'app-invoicedetails',
    templateUrl: './invoicedetails.component.html',
    //styleUrls: ['./invoicedetails.component.scss']
})
export class InvoicedetailsComponent implements OnInit, OnChanges {

  @Input() invoiceDetails: COOInvoiceDetails[];
  @Input() state: string;
  @Output() getInvoices= new EventEmitter<COOInvoiceDetails[]>();
  
  gridInvoiceDetailsDefinition: GridDefinitions;

  ngOnInit(): void {
    console.log(this.invoiceDetails);
  const columns1: GridColumn[] = this.getInvoiceDetailsColumns();
  this.gridInvoiceDetailsDefinition = new GridDefinitions({
    dataKey: 'LineNumber',
    columns: columns1,
    toolbar: true,
    selectionMode: 'single',
    exportToExcel: false,
    exportToPdf: false      
  });
  
  }   

  getAllInvoices()
  {
    this.getInvoices.emit(this.invoiceDetails);
  }



  ngOnChanges(changes: SimpleChanges) {
    // for (const propName in changes) {
    // }
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

    if (this.state == 'standalone'){
      const columnParams7: GridColumnParams = new GridColumnParams();
      const column7 = new GridColumn({
        headername: 'Connected',
        fieldname: 'ConnectedNum',
        columnParams: columnParams7,
        width: 20,
        clickColumnName: 'EntityNo',
        // onClick: (param) => {
        //   this.RowClick(param);
        // },
      });
      columns.push(column7);
    }
    return columns;
  }

}