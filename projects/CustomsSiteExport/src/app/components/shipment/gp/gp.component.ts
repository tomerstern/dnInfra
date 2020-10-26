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

import { ShipmentGP } from '../../../models/shipment';
import { ShipmentService } from '../../../services/shipment.service';

@Component({
  selector: 'app-gp',
  templateUrl: './gp.component.html',
  styleUrls: ['./gp.component.scss']
})
export class GpComponent implements OnInit {

  constructor(private shipmentService: ShipmentService) { }

  gridDefinition: GridDefinitions;
  listShipmentGP: ShipmentGP[];
  gridColumnTypeEnum = GridColumnType;
  dataForAutocomplete: any[];
  ngOnInit(): void {

    const columns: GridColumn[] = this.createNewColumns();
    this.gridDefinition = new GridDefinitions({
      dataKey: 'GP_LineNumber',
      columns,
      toolbar: true,
      selectionMode: 'single'
    });
    this.GetGPData();

    // this.shipmentService.get_data('assets/activityTypes.json').then(dataForAutocomplete => {
    //   this.dataForAutocomplete = dataForAutocomplete;
    // });

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
      fieldname: 'GP_LineNumber',
      iseditable: false
    });
    columns.push(column4);

    const column5 = new GridColumn({
      headername: 'Siduri',
      fieldname: 'GP_MIS_SIDURI',
      iseditable: true,
      type: this.gridColumnTypeEnum.inputnumber,
    });
    columns.push(column5);

    const column6 = new GridColumn({
      headername: 'Arizot',
      fieldname: 'GP_KAMUT_ARIZOT',
      iseditable: true,
      type: this.gridColumnTypeEnum.inputnumber,
    });
    columns.push(column6);

    const columnParams7: GridColumnParams = new GridColumnParams();
    columnParams7.addParam(AutocompleteProperties.dp_AutocompleteType, 0);
    columnParams7.addParam(AutocompleteProperties.multiple, false);
    columnParams7.addParam(AutocompleteProperties.dropdown, false);

    const column7 = new GridColumn({
      headername: 'Type',
      fieldname: 'GP_SUG_ARIZA',
      type: this.gridColumnTypeEnum.dropdown,
      columnParams: columnParams7,
      iseditable: true,
      ColumnDatasource: this.dataForAutocomplete,
    });
    columns.push(column7);

    const column8 = new GridColumn({
      headername: 'Mishkal',
      fieldname: 'GP_MISHKAL_BRUTO',
      iseditable: true,
      type: this.gridColumnTypeEnum.inputnumber,
    });
    columns.push(column8);

    const column9 = new GridColumn({
      headername: 'Nefah',
      fieldname: 'GP_NEFACH_BRUTO',
      iseditable: true,
      type: this.gridColumnTypeEnum.inputnumber,
    });
    columns.push(column9);

    const column10 = new GridColumn({
      headername: 'Simanim',
      fieldname: 'GP_SIMANIM',
      iseditable: true
    });
    columns.push(column10);

    return columns;
  }

  // async SetData() {
  GetGPData() {
    // this.shipmentService.get_data('assets/GPData.json').then(listShipmentGP => {
    //   this.listShipmentGP = listShipmentGP;
    // });
    this.listShipmentGP = this.shipmentService.getGPList();
  }
}
