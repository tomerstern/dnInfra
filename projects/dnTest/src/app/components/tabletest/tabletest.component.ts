import { Component, OnInit } from '@angular/core';
import { Customer } from '../../events/models/customer';
import {
  GridColumn,
  GridDefinitions,
  GridColumnType,
  GridColumnParams,
} from 'projects/dn-infra/src/lib/dp/components/table/objects/grid-definitions';
import { InputNumberProperties } from 'projects/dn-infra/src/lib/dp/components/inputnumber/objects/inputnumber-definitions';
import { InputTextProperties } from 'projects/dn-infra/src/lib/dp/components/inputtext/objects/inputtext-definitions';
import { CustomerService } from '../../events/services/customerservice';
import { CalendarProperties } from 'projects/dn-infra/src/lib/dp/components/calendar/objects/calendar-definitions';
import { AutocompleteProperties } from 'projects/dn-infra/src/lib/dp/components/autocomplete/Objects/autocomplete-definitions';
import { CountryService } from '../../events/services/countryservice';
import { Country } from '../../events/models/customer';
import { combineLatest, Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
// import { TableComponent } from 'projects/dn-infra/src/lib/dp/components/table/table.component';

@Component({
  selector: 'app-tabletest',
  templateUrl: './tabletest.component.html',
  styleUrls: ['./tabletest.component.scss']
})
export class TabletestComponent implements OnInit {
  constructor(
    private customerService: CustomerService,
    private countryService: CountryService
  ) { }
  gridDefinition: GridDefinitions;
  gridShipmentDefinition: GridDefinitions;
  customers: Customer[];
  gridColumnTypeEnum = GridColumnType;
  myList = [];
  // dataForAc3: Country[]; // Country

  dataForAc3: any[] = [{ name: 'Afghanistan', code: 'AF' }, { name: 'Albania', code: 'AL' }, { name: 'Angola', code: 'AO' },
  { name: 'Anguilla', code: 'AI' }, { name: 'brazil', code: 'BR' }];

  ngOnInit(): void {
    const columns: GridColumn[] = this.getColumns();
    // console.log(columns);
    this.gridDefinition = new GridDefinitions({
      dataKey: 'id',
      columns,
      toolbar: true,
      selectionMode: 'single',
      onAfterDelete: (param) => {
        this.onAfter(param);
      },
      onAfterAdd: (param) => {
        this.onAfterAdd(param);
      },
    });
    this.SetData();

    const shipmentcolumns: GridColumn[] = this.getShipmentColumns();
    this.gridShipmentDefinition = new GridDefinitions({
      dataKey: 'ShipmentNumber',
      columns: shipmentcolumns,
      toolbar: true,
    });
    this.GetShipments();
  }



  onBefore(val) {
    // alert('onBeforeDelete' + val);
  }

  onAfter(val) {
    // alert('onAfterDelete' + val);
  }

  onAfterAdd(val) {
    // alert('onAfterAdd' + val);
  }

  onCustomerNameClick(val) {
    window.open('https://www.google.com?HeyYo=' + val);
  }

  readState(tableId, state) {
    // console.log(state);
  }

  getShipmentColumns() {
    const columns: GridColumn[] = [];

    const column1 = new GridColumn({
      headername: 'Shipment',
      fieldname: 'ShipmentNumber',
    });
    columns.push(column1);

    const column2 = new GridColumn({
      headername: 'Dept',
      fieldname: 'Dept_Code',
    });
    columns.push(column2);

    const column3 = new GridColumn({
      headername: 'Shlifa',
      fieldname: 'Shlifa_Order',
    });
    columns.push(column3);

    const column4 = new GridColumn({
      headername: 'Agent',
      fieldname: 'ZHUI_SOCHEN',
    });
    columns.push(column4);

    const column5 = new GridColumn({
      headername: 'Code',
      fieldname: 'YezuanCode',
    });
    columns.push(column5);

    return columns;
  }

  getColumns() {
    const columns: GridColumn[] = [];
    const columnParams1: GridColumnParams = new GridColumnParams();
    columnParams1.addParam(InputTextProperties.mode, 'basic');
    const column1 = new GridColumn({
      headername: 'Customer Name',
      fieldname: 'name',
      columnParams: columnParams1,
      iseditable: false,
      clickColumnName: 'id',
      class: 'clsSpanLink',
      onClick: (param) => {
        this.onCustomerNameClick(param);
      },
    });
    columns.push(column1);

    const column2 = new GridColumn({
      headername: 'Is Active',
      fieldname: 'IsActive',
      type: this.gridColumnTypeEnum.checkbox,
      iseditable: true,
    });
    columns.push(column2);

    //  minLength: 1,

    // this.countryService.getCountries().then(countries => {
    //   this.dataForAc3 = countries;
    // });

    const columnParams3: GridColumnParams = new GridColumnParams();
    columnParams3.addParam(AutocompleteProperties.dp_AutocompleteType, 0);
    columnParams3.addParam(AutocompleteProperties.multiple, false);
    columnParams3.addParam(AutocompleteProperties.dropdown, true);

    const column3 = new GridColumn({
      headername: 'Country', fieldname: 'country', type: this.gridColumnTypeEnum.dropdown, columnParams: columnParams3,
      iseditable: true,
      ColumnDatasource: this.dataForAc3, isMandatory: true
    });
    columns.push(column3);

    const columnParams4: GridColumnParams = new GridColumnParams();
    columnParams4.addParam(InputNumberProperties.prefix, '$');
    columnParams4.addParam(InputNumberProperties.step, '2');
    const column4 = new GridColumn({
      headername: 'Orders',
      fieldname: 'NumOrderInMonth',
      type: this.gridColumnTypeEnum.inputnumber,
      columnParams: columnParams4,
      iseditable: true,
      isMandatory: true,
    });
    columns.push(column4);

    const columnParams5: GridColumnParams = new GridColumnParams();
    columnParams5.addParam(CalendarProperties.showTime, true);
    const column5 = new GridColumn({
      headername: 'Date', fieldname: 'Date', type: this.gridColumnTypeEnum.calendar,
      columnParams: columnParams5, iseditable: true
    });
    columns.push(column5);

    return columns;
  }

  async SetData() {
    this.customers = await this.customerService.getCustomersLarge();
  }

  getMandatory($event) {
    this.SaveCutomers($event);
  }



  async GetShipments() {
    // const response: any = await this.customerService.getRealCustomers();
    // if (response.Status === 'OK')
    // {
    //   this.shipments = response.result;
    // }
  }

  SaveCutomers(data: Observable<any>[]) {
    const combined = data.map(x => x);
    const c = combineLatest(combined).pipe(
      take(1),
      map(y => y)
    );
    c.subscribe(x => {
      // console.log(x);
    });
  }
}
