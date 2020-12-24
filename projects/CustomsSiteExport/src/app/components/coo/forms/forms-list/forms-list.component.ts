import { Component, OnInit,Output, EventEmitter } from '@angular/core';
import { GridColumn, GridDefinitions, GridColumnType, GridColumnParams } from 'projects/dn-infra/src/lib/dp/components/table/objects/grid-definitions';


@Component({
  selector: 'app-forms-list',
  templateUrl: './forms-list.component.html',
  styleUrls: ['./forms-list.component.scss']
})
export class FormsListComponent implements OnInit {

  @Output() notifyFormType: EventEmitter <string> = new EventEmitter <string>();
  constructor() { }

  gridDefinition: GridDefinitions;

  arrFormsList : any[] = [
  { FormType : 'EUR1', name : 'EUR-1', code: '1' , details: 'P'},
  { FormType : 'EURMED', name : 'EUR-MED', code: '2', details: 'P'},
  { FormType : 'MCR', name : 'MERCOSUR FTA', code: '3', details: ''},
  { FormType : 'COL', name : 'COLOMBIA', code: '4', details: ''},
  { FormType : 'NMC', name : 'NonManipulationCertificate', code: '5',details: 'P'}];

  gridData : any[] = this.arrFormsList ;

  RowSelected : number = 0 ;
  ngOnInit(): void {
    const columns: GridColumn[] = this.getColumns();

    
    this.gridDefinition = new GridDefinitions({
      dataKey: 'FormType', columns: columns, paginator: false, HideBtnsCol: false, isHideHeader: true
    });
  }

  getColumns() {
    const columns: GridColumn[] = [];

    const columnParams1: GridColumnParams = new GridColumnParams();
    const column1 = new GridColumn({
      headername: 'Form Name', 
      fieldname: 'name', 
      clickColumnName: 'FormType',
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
      fieldname: 'details', 
      clickColumnName: 'FormType',
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

  RowClick(sFormType : string):void{
    this.notifyFormType.emit(sFormType);
  }
 

}
