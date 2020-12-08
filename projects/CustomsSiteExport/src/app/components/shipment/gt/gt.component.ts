import { Component, OnInit } from '@angular/core';

import {
  GridColumn,
  GridDefinitions,
  GridColumnType,
  GridColumnParams,
} from 'projects/dn-infra/src/lib/dp/components/table/objects/grid-definitions';
import { InputNumberProperties } from 'projects/dn-infra/src/lib/dp/components/inputnumber/objects/inputnumber-definitions';
import { InputTextProperties } from 'projects/dn-infra/src/lib/dp/components/inputtext/objects/inputtext-definitions';
import { CalendarProperties } from 'projects/dn-infra/src/lib/dp/components/calendar/objects/calendar-definitions';
import { AutocompleteProperties } from 'projects/dn-infra/src/lib/dp/components/autocomplete/Objects/autocomplete-definitions';

import { ShipmentTemp } from '../../../models/shipment';
import { ShipmentService } from '../../../services/shipment.service';

@Component({
  selector: 'app-gt',
  templateUrl: './gt.component.html',
  styleUrls: ['./gt.component.scss']
})
export class GtComponent implements OnInit {

  constructor(private shipmentService: ShipmentService) { }

  gridDefinition: GridDefinitions;
  listShipmentGT: ShipmentTemp[];
  gridColumnTypeEnum = GridColumnType;
  // dataForAutocomplete: any[];
  autoCompleteSelectedValue: any;


  // dataForAutocomplete: any[] = [{ name: 'AAA', code: 'T1' }, { name: 'BBB', code: 'T2' }];
  dataForAutocomplete: any[] = [{ name : 'Type 1', code: 'T1'},
                                { name : 'Type 2', code: 'T2'},
                                { name : 'Type 3', code: 'T3'},
                                { name : 'Type 4', code: 'T4'},
                                { name : 'Type 5', code: 'T5'}];

  // dataForAutocomplete: any[] = [{ show : 'Type 1', name: 'T1'},
  //                               { show : 'Type 2', name: 'T2'},
  //                               { show : 'Type 3', name: 'T3'},
  //                               { show : 'Type 4', name: 'T4'},
  //                               { show : 'Type 5', name: 'T5'}];


  ngOnInit(): void {
  //   this.shipmentService.get_data('assets/activityTypes.json').then(dataForAutocomplete => {
  //     this.dataForAutocomplete = dataForAutocomplete;
  //  });

    const columns: GridColumn[] = this.createNewColumns();
    this.gridDefinition = new GridDefinitions({
      dataKey: 'TM_LineNumber',
      columns,
      toolbar: true,
      selectionMode: 'single'
    });
    this.GetGTData();
  }

  createNewColumns() {
    const columns: GridColumn[] = [];

    const column1 = new GridColumn({
      headername: 'Shipment',
      fieldname: 'ShipmentNumber',
      iseditable: false
    });
    columns.push(column1);

    const column2 = new GridColumn({
      headername: 'Dept',
      fieldname: 'Dept_Code',
      iseditable: false
    });
    columns.push(column2);

    const column3 = new GridColumn({
      headername: 'Order',
      fieldname: 'Shlifa_Order',
      iseditable: false
    });
    columns.push(column3);

    const column4 = new GridColumn({
      headername: 'Line',
      fieldname: 'TM_LineNumber',
      iseditable: false
    });
    columns.push(column4);
    // this.calendarDef = new CalendarDefinitions({minDate: new Date(2019, 6, 12), showTime: false});
    const column5 = new GridColumn({
      headername: 'Date',
      fieldname: 'TM_Date',
      iseditable: true,
      type: this.gridColumnTypeEnum.calendar
    });
    columns.push(column5);

    const column6 = new GridColumn({
      headername: 'CheckBox',
      fieldname: 'TM_IsActive',
      iseditable: true,
      type: this.gridColumnTypeEnum.checkbox
    });
    columns.push(column6);

    const column7 = new GridColumn({
      headername: 'Name',
      fieldname: 'TM_Name',
      iseditable: true
    });
    columns.push(column7);

    const column8 = new GridColumn({
      headername: 'Num',
      fieldname: 'TM_Num',
      iseditable: true,
      type: this.gridColumnTypeEnum.inputnumber
    });
    columns.push(column8);

    const columnParams9: GridColumnParams = new GridColumnParams();
    columnParams9.addParam(AutocompleteProperties.dp_AutocompleteType, 0);
    // columnParams9.addParam(AutocompleteProperties.field, 'show');
    // columnParams9.addParam(AutocompleteProperties.multiple, false);
    // columnParams9.addParam(AutocompleteProperties.dropdown, false);
    const column9 = new GridColumn({
      headername: 'Type',
      fieldCode: 'TM_State',
      fieldname: 'TM_State_Name',
      type: this.gridColumnTypeEnum.autocomplete,
      columnParams: columnParams9,
      iseditable: true,
      ColumnDatasource: this.dataForAutocomplete,
    });
    columns.push(column9);
    return columns;
  }

  GetGTData() {
    this.listShipmentGT = this.shipmentService.getGTList();
    // this.openDateStr = new Date(parseInt(this.detail.OpenDate.substr(6)))
  }

}
