import { Component, OnInit } from '@angular/core';
import { Customer } from '../../events/models/customer';
import { GridColumn, GridDefinitions, GridColumnType, GridColumnParams } from 'projects/dn-infra/src/lib/dp/components/table/objects/grid-definitions';
import { InputNumberProperties } from 'projects/dn-infra/src/lib/dp/components/inputnumber/objects/inputnumber-definitions';
import { InputTextProperties } from 'projects/dn-infra/src/lib/dp/components/inputtext/objects/inputtext-definitions';
import { CustomerService } from '../../events/services/customerservice';
import { CalendarProperties } from 'projects/dn-infra/src/lib/dp/components/calendar/objects/calendar-definitions';

@Component({
  selector: 'app-tabletest',
  templateUrl: './tabletest.component.html',
  styleUrls: ['./tabletest.component.scss']
})
export class TabletestComponent implements OnInit {

  constructor(private customerService: CustomerService) { }
  gridDefinition: GridDefinitions;
  customers: Customer[];
  gridColumnTypeEnum = GridColumnType;

  ngOnInit(): void {
    const columns: GridColumn[] = this.getColumns();
    this.gridDefinition = new GridDefinitions({
      dataKey: 'id', columns, editMode: 'row', toolbar: true,
      selectionMode: 'multiple'
    });
    this.SetData();
  }

  getColumns() {
    const columns: GridColumn[] = [];

    const columnParams1: GridColumnParams = new GridColumnParams();
    columnParams1.addParam(InputTextProperties.mode, 'basic');
    const column1 = new GridColumn({
      headername: 'Customer Name', fieldname: 'name', columnParams: columnParams1,
      iseditable: false, clickColumnName: 'id', class: 'clsSpanLink'
    });
    columns.push(column1);

    const column2 = new GridColumn({
      headername: 'Is Active', fieldname: 'IsActive', type: this.gridColumnTypeEnum.checkbox,
      iseditable: true
    });
    columns.push(column2);

    // const column3 = new GridColumn({ headername: 'Remarks', fieldname: 'remarksImg', type: this.gridColumnTypeEnum.image });
    // columns.push(column3);

    const column3 = new GridColumn({
      headername: 'Country', fieldname: 'country', type: this.gridColumnTypeEnum.dropdown,
      iseditable: true
    });
    columns.push(column3);

    const columnParams4: GridColumnParams = new GridColumnParams();
    columnParams4.addParam(InputNumberProperties.prefix, '$');
    columnParams4.addParam(InputNumberProperties.step, '2');
    const column4 = new GridColumn({
      headername: 'Orders', fieldname: 'NumOrderInMonth', type: this.gridColumnTypeEnum.inputnumber,
      columnParams: columnParams4, iseditable: true
    });
    columns.push(column4);

    const columnParams5: GridColumnParams = new GridColumnParams();
    columnParams5.addParam(CalendarProperties.showTime, true);
    const column5 = new GridColumn({
      headername: 'Date', fieldname: 'Date1', type: this.gridColumnTypeEnum.calendar,
      columnParams: columnParams5, iseditable: true
    });
    columns.push(column5);

    return columns;
  }

  async SetData() {
    this.customers = await this.customerService.getCustomersLarge();
  }

  SaveCutomers() {
    this.customerService.saveCustomers(this.customers);
  }
}
