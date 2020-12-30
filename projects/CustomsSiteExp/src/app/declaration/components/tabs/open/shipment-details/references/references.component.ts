import { Component, OnInit } from '@angular/core';
import { DeclarationService } from 'projects/CustomsSiteExp/src/app/declaration/services/declaration.service';
import { CalendarProperties } from 'projects/dn-infra/src/lib/dp/components/calendar/objects/calendar-definitions';
import { InputTextProperties } from 'projects/dn-infra/src/lib/dp/components/inputtext/objects/inputtext-definitions';
import { GridColumn, GridColumnParams, GridColumnType, GridDefinitions } from 'projects/dn-infra/src/lib/dp/components/table/objects/grid-definitions';
import { Store } from '@ngrx/store';
import { AutocompleteProperties } from 'projects/dn-infra/src/lib/dp/components/autocomplete/Objects/autocomplete-definitions';
import { ExportassistService } from 'projects/CustomsSiteExp/src/app/core/services/exportassist.service';

@Component({
  selector: 'app-references',
  templateUrl: './references.component.html',
  styleUrls: ['./references.component.scss']
})
export class ReferencesComponent implements OnInit {

  constructor(public declarationService  : DeclarationService, private store: Store<any>, public exportassistService: ExportassistService) { }

  gridDefinition: GridDefinitions;
  gridColumnTypeEnum = GridColumnType;
  dataForAc3: any[] = [{ name: 'PO', code: '1' }, { name: 'INV', code: '2' }];
  ngOnInit(): void {
    const columns: GridColumn[] = this.getColumns();
    this.gridDefinition = new GridDefinitions({
      dataKey: 'ShipmentNumber',
      columns,
      toolbar: true,
      selectionMode: 'single',
      exportToExcel: false,
      exportToPdf: false      
    });
  }

  getColumns() {
    const columns: GridColumn[] = [];
    const columnParams1: GridColumnParams = new GridColumnParams();
    columnParams1.addParam(AutocompleteProperties.dp_AutocompleteType, 0);
    columnParams1.addParam(AutocompleteProperties.multiple, false);
    columnParams1.addParam(AutocompleteProperties.dropdown, true);

    const column1 = new GridColumn({
      headername: 'Reference Type', fieldname: 'ReferenceTypeName', fieldCode: 'ReferenceType',
      type: this.gridColumnTypeEnum.autocomplete, columnParams: columnParams1,
      iseditable: true,
      ColumnDatasource: this.exportassistService.referenceTypeList, 
      isMandatory: true
    });
  
    columns.push(column1);

    const columnParams2: GridColumnParams = new GridColumnParams();
    columnParams2.addParam(InputTextProperties.mode, 'basic');
    const column2 = new GridColumn({
      headername: 'Reference',
      fieldname: 'Reference',
      columnParams: columnParams2,
      iseditable: true
    });
    columns.push(column2);

    const columnParams3: GridColumnParams = new GridColumnParams();
    columnParams3.addParam(CalendarProperties.showTime, false);
    const column3 = new GridColumn({
      headername: 'Date Added', fieldname: 'DateAdded', type: this.gridColumnTypeEnum.calendar,
      columnParams: columnParams3, iseditable: true
    });
    columns.push(column3);

    return columns;
  }
}
