import { Component, OnInit,Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { GridColumn, GridDefinitions, GridColumnType, GridColumnParams } from 'projects/dn-infra/src/lib/dp/components/table/objects/grid-definitions';

@Component({
  selector: 'app-cootype-list',
  templateUrl: './cootype-list.component.html',
  styleUrls: ['./cootype-list.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CootypeListComponent implements OnInit {

  @Input() gridData: any[];
  @Output() notifyCOOType: EventEmitter <string> = new EventEmitter <string>();
  constructor() {}

  gridDefinition: GridDefinitions;

  // arrFormsList : any[] = [ 
  // { FormType : 'EUR1', name : 'EUR-1', code: '1' , details: 'P'},
  // { FormType : 'EURMED', name : 'EUR-MED', code: '2', details: 'P'},
  // { FormType : 'MCR', name : 'MERCOSUR FTA', code: '3', details: ''},
  // { FormType : 'COL', name : 'COLOMBIA', code: '4', details: ''},
  // { FormType : 'NMC', name : 'NonManipulationCertificate', code: '5',details: 'P'}];

  // gridData : any[] = this.arrFormsList ;

  ngOnInit(): void {
    const columns: GridColumn[] = this.getColumns();
    
    this.gridDefinition = new GridDefinitions({
      dataKey: 'code', columns: columns, paginator: false, HideBtnsCol: true, isHideHeader: true
    });
  }

  RowClick(sCooType : string):void{
    this.notifyCOOType.emit(sCooType);
  }
  
  getColumns() {
    const columns: GridColumn[] = [];

    const columnParams1: GridColumnParams = new GridColumnParams();
    const column1 = new GridColumn({
      headername: 'Form Name', 
      fieldname: 'name', 
      clickColumnName: 'code',
      columnParams: columnParams1, 
      width: 230,
      onClick: (param) => {
        this.RowClick(param);
      },
      
    });
    columns.push(column1);
 
    const columnParams2: GridColumnParams = new GridColumnParams();
    const column2 = new GridColumn({
      headername: '', 
      fieldname: 'description', 
      clickColumnName: 'code',
      columnParams: columnParams2, 
      width: 35,
      class:"Wingdings2Approve",
      onClick: (param) => {
        this.RowClick(param);
      },
      
    });
    columns.push(column2);
  return columns;
}

}
