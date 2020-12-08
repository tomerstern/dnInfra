import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { GridColumn, GridDefinitions, GridColumnType, GridColumnParams } from 'projects/dn-infra/src/lib/dp/components/table/objects/grid-definitions';

@Component({
  selector: 'app-form-details',
  templateUrl: './form-details.component.html',
  styleUrls: ['./form-details.component.scss']
})
export class FormDetailsComponent implements OnInit, OnChanges {

  @Input() gridData: any[];
  @Output() notifyFormDetails: EventEmitter<any> = new EventEmitter<any>();
  constructor() { }

  gridDefinition: GridDefinitions;

  ngOnChanges(change: SimpleChanges) {
    console.log(change);
    if (change.gridData.currentValue) {
      const columns: GridColumn[] = this.getColumns();
      this.gridDefinition = new GridDefinitions({
        dataKey: 'LineNo', columns: columns
      });
      console.log(change);
    }
  }

  ngOnInit(): void {
    // console.log(this.gridData);
    //this.getData();
  }

  getData(data) {
    console.log(data);
    return data;
  }

  RowClick(nLineNo: number): void {
    let jsonFormDetails = this.gridData.filter(x => x.LineNo == nLineNo);
    this.notifyFormDetails.emit(jsonFormDetails);
  }

  getColumns() {
    const columns: GridColumn[] = [];

    const columnParams1: GridColumnParams = new GridColumnParams();
    const column1 = new GridColumn({
      headername: 'Line No.',
      fieldname: 'LineNo',
      columnParams: columnParams1,
      width: 70,
      clickColumnName: 'LineNo',
      onClick: (param) => {
        this.RowClick(param);
      },
    });
    columns.push(column1);

    const columnParams2: GridColumnParams = new GridColumnParams();
    const column2 = new GridColumn({
      headername: 'COO Type ', fieldname: 'FormType', columnParams: columnParams2
      , width: 100 /* for example */
      ,clickColumnName: 'LineNo'
      , onClick: (param) => {
        this.RowClick(param);
      },
    });
    columns.push(column2);

    const columnParams3: GridColumnParams = new GridColumnParams();
    const column3 = new GridColumn({
      headername: 'Entity #', fieldname: 'Entity', columnParams: columnParams3
      , width: 150 /* for example */
      ,clickColumnName: 'LineNo'
      ,onClick: (param) => {
        this.RowClick(param);
      },
    });
    columns.push(column3);
    
    const columnParams4: GridColumnParams = new GridColumnParams();
    const column4 = new GridColumn({
      headername: 'COO Doc#', fieldname: 'COODoc', columnParams: columnParams4
      , width: 100
      ,clickColumnName: 'LineNo'
      ,onClick: (param) => {
        this.RowClick(param);
      }, 
    });
    columns.push(column4);
    
    const columnParams5: GridColumnParams = new GridColumnParams();
    const column5 = new GridColumn({
      headername: 'Shipper', fieldname: 'Shipper', columnParams: columnParams5
      , width: 100
      ,clickColumnName: 'LineNo'
      ,onClick: (param) => {
        this.RowClick(param);
      },
      
    });
    columns.push(column5);
    
    const columnParams6: GridColumnParams = new GridColumnParams();
    const column6 = new GridColumn({
      headername: 'CNEE', fieldname: 'CNEE', columnParams: columnParams6
      , width: 100 
      , ColumnSum: true
      ,clickColumnName: 'LineNo'
      ,onClick: (param) => {
        this.RowClick(param);
      },
    });
    columns.push(column6);
    
    const columnParams7: GridColumnParams = new GridColumnParams();
    const column7 = new GridColumn({
      headername: 'Open Date', fieldname: 'OpenDate', columnParams: columnParams7
      , width: 100
      ,clickColumnName: 'LineNo'
      ,onClick: (param) => {
        this.RowClick(param);
      },
    });
    columns.push(column7);
    
    const columnParams8: GridColumnParams = new GridColumnParams();
    const column8 = new GridColumn({
      headername: 'Opened By', fieldname: 'OpenedBy', columnParams: columnParams8
      , width: 100
      ,clickColumnName: 'LineNo'
      ,onClick: (param) => {
        this.RowClick(param);
      },
    });
    columns.push(column8);
    
    const columnParams9: GridColumnParams = new GridColumnParams();
    const column9 = new GridColumn({
      headername: 'COO Status', fieldname: 'COOStatus', columnParams: columnParams9
      , width: 100 
      ,clickColumnName: 'LineNo'
      ,onClick: (param) => {
        this.RowClick(param);
      },
    });
    columns.push(column9);

    const columnParams10: GridColumnParams = new GridColumnParams();
    const column10 = new GridColumn({
      headername: 'Date', fieldname: 'Date', columnParams: columnParams10
      , width: 100 
      ,clickColumnName: 'LineNo'
      ,onClick: (param) => {
        this.RowClick(param);
      },
    });
    columns.push(column10);
    
    const columnParams11: GridColumnParams = new GridColumnParams();
    const column11 = new GridColumn({
      headername: 'DHL Status ', fieldname: 'DHLStatus ', columnParams: columnParams11
      , width: 100 
      ,clickColumnName: 'LineNo'
      ,onClick: (param) => {
        this.RowClick(param);
      },
    });
    columns.push(column11);

    const columnParams12: GridColumnParams = new GridColumnParams();
    const column12 = new GridColumn({
      headername: 'Update By', fieldname: 'UpdateBy', columnParams: columnParams12
      , width: 100 
      ,clickColumnName: 'LineNo'
      ,onClick: (param) => {
        this.RowClick(param);
      },
    });
    columns.push(column12);
        
    return columns;
  }
 
}
