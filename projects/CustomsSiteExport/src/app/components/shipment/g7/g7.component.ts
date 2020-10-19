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
import { AutocompleteDefinitions, AutocompleteProperties } from 'projects/dn-infra/src/lib/dp/components/autocomplete/Objects/autocomplete-definitions';

import { ShipmentG7 } from '../../../models/shipment';
import { ShipmentService } from '../../../services/shipment.service';
import { Store } from '@ngrx/store';
import { getAppState } from 'projects/dn-infra/src/lib/dp/store/selectors';
import { map, take } from 'rxjs/operators';

@Component({
  selector: 'app-g7',
  templateUrl: './g7.component.html',
  styleUrls: ['./g7.component.scss']
})
export class G7Component implements OnInit {

  constructor(private shipmentService: ShipmentService, private store: Store<any>) { }

  gridDefinition: GridDefinitions;
  listShipmentG7: ShipmentG7[];
  gridColumnTypeEnum = GridColumnType;
  dataForAutocomplete: any[];

  ngOnInit(): void {
    const columns: GridColumn[] = this.createNewColumns();
    this.gridDefinition = new GridDefinitions({
      dataKey: 'G7_LineNumber',
      columns,
      toolbar: true,
      selectionMode: 'single'
    });
    this.GetG7Data();

    // this.shipmentService.get_data('assets/activityTypes.json').then(dataForAutocomplete => {
    //   this.dataForAutocomplete = dataForAutocomplete;
    // });

  }

  SaveCutomers() {
    const changes = [];
    this.store.select(getAppState).pipe(take(1), map(state => {
      Object.keys(state.tables).forEach(table => {
        const tableChanges = state.tables[table].changes;
        if (tableChanges) {
          Object.keys(tableChanges).forEach(key => {
            changes.push(tableChanges[key]);
          });
          console.log(changes);
          this.shipmentService.save(changes);
        }
      });
    })).subscribe();
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
      fieldname: 'G7_LineNumber',
      iseditable: false
    });
    columns.push(column4);

    const column5 = new GridColumn({
      headername: 'Siduri',
      fieldname: 'G7_MIS_SIDURI',
      iseditable: true,
      type: this.gridColumnTypeEnum.inputnumber,
    });
    columns.push(column5);

    const column6 = new GridColumn({
      headername: 'P.Meches',
      fieldname: 'G7_PRAT_MECHES',
      iseditable: true,
      type: this.gridColumnTypeEnum.span,
    });
    columns.push(column6);

    const column7 = new GridColumn({
      headername: 'Mida',
      fieldname: 'G7_YECHIDAT_MIDA',
      iseditable: true,
      type: this.gridColumnTypeEnum.inputnumber,
    });
    columns.push(column7);

    const column8 = new GridColumn({
      headername: 'Kamut',
      fieldname: 'G7_KAMUT',
      iseditable: true,
      type: this.gridColumnTypeEnum.inputnumber,
    });
    columns.push(column8);

    const column9 = new GridColumn({
      headername: 'Mechir',
      fieldname: 'G7_MECHIR_YECHIDA',
      iseditable: true,
      type: this.gridColumnTypeEnum.inputnumber,
    });
    columns.push(column9);

    const column10 = new GridColumn({
      headername: 'Erech',
      fieldname: 'G7_ERECH_SCHORA',
      iseditable: true,
      type: this.gridColumnTypeEnum.inputnumber,
    });
    columns.push(column10);

    return columns;
  }

  // GetG7Data() {
  //   this.shipmentService.get_data('assets/G7Data.json').then(listShipmentG7 => {
  //     this.listShipmentG7 = listShipmentG7;
  //   });
  // }

  GetG7Data() {
    // this.shipmentService.get_data('assets/GPData.json').then(listShipmentGP => {
    //   this.listShipmentGP = listShipmentGP;
    // });
    this.listShipmentG7 = this.shipmentService.getG7List();
  }
}
