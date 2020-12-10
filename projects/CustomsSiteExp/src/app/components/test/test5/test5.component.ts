import { ChangeDetectorRef, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
// import { AutocompleteDefinitions } from 'projects/dn-infra/src/lib/dp/components/autocomplete/objects/autocomplete-definitions';
import { AutocompleteDefinitions } from 'projects/dn-infra/src/lib/dp/components/autocomplete/Objects/autocomplete-definitions';
import { GlobalFunctionsService } from 'projects/CustomsSiteExp/src/app/core/services/global-functions.service';
import { InputtextDefinitions } from 'projects/dn-infra/src/lib/dp/components/inputtext/objects/inputtext-definitions';
import { CalendarDefinitions } from 'projects/dn-infra/src/lib/dp/components/calendar/objects/calendar-definitions';
import { CheckboxDefinitions } from 'projects/dn-infra/src/lib/dp/components/checkbox/objects/checkbox-definitions';
import { ButtonDefinitions } from 'projects/dn-infra/src/lib/dp/components/button/objects/button-definitions';
import { GridColumn, GridDefinitions, GridColumnParams} from 'projects/dn-infra/src/lib/dp/components/table/objects/grid-definitions';
// import { NgForm } from '@angular/forms';
// import {FieldsetModule} from 'primeng/fieldset';
// import {FieldsetModule} from 'primeng/primeng';
@Component({
  selector: 'app-test5',
  templateUrl: './test5.component.html',
  styleUrls: ['./test5.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class Test5Component implements OnInit {

  model: any = {};

  autocompleteDefinition1: AutocompleteDefinitions;
  autocompleteDefinition2: AutocompleteDefinitions;
  autocompleteDefinition3: AutocompleteDefinitions;
  autocompleteDefinition4: AutocompleteDefinitions;
  autocompleteDefinition5: AutocompleteDefinitions;
  autocompleteDefinition6: AutocompleteDefinitions;
  autocompleteDefinition7: AutocompleteDefinitions;

  btnDef1: ButtonDefinitions;

  CalendarDef1: CalendarDefinitions;
  CalendarDef2: CalendarDefinitions;

  dataForAc1: any[];
  dataForAc2: any[];
  dataForAc3: any[];
  dataForAc4: any[];
  dataForAc5: any[];
  dataForAc6: any[];
  dataForAc7: any[];

  checkboxDefinitions: CheckboxDefinitions;

  resultData: any;


  InputText1: InputtextDefinitions;


  columns1: GridColumn[];
  gridData1: any;
  gridDefinition1: GridDefinitions;

  constructor(private gf: GlobalFunctionsService, public translate: TranslateService) { }

  ngOnInit(): void {
    this.getData();
    this.getDefinitions();
  }

  getData() {
    this.dataForAc1 = [{ name: 'Air Import', code: 'AI' }, { name: 'Ocean Import', code: 'OI' }];
  }

  getDefinitions() {

    this.autocompleteDefinition1 = new AutocompleteDefinitions({
      inputId: 'department', field: 'name',
      dp_AutocompleteType: 0, minLength: 1
      , dropdown: true
    });


    this.CalendarDef1 = new CalendarDefinitions({
      minDate: new Date(2019, 6, 12), showTime: false
    });


    this.checkboxDefinitions = new CheckboxDefinitions({});

    this.btnDef1 = new ButtonDefinitions({ label: 'חיפוש' });


    this.columns1 = this.getColumns1();

    this.gridDefinition1 = new GridDefinitions({
      dataKey: 'ShipmentNumber', columns: this.columns1
    });


  }





  getColumns1() {
    const columns: GridColumn[] = [];

    const columnParams1: GridColumnParams = new GridColumnParams();
    const column1 = new GridColumn({
      headername: this.translate.instant('shipmentNumber'), fieldname: 'shipmentNumber', columnParams: columnParams1
    });
    columns.push(column1);

    const columnParams2: GridColumnParams = new GridColumnParams();
    const column2 = new GridColumn({
      headername: this.translate.instant('openDate'), fieldname: 'openDate', columnParams: columnParams2
    });
    columns.push(column2);

    const columnParams3: GridColumnParams = new GridColumnParams();
    const column3 = new GridColumn({
    headername: this.translate.instant('date') + ' ETD', fieldname: 'ETD', columnParams: columnParams3
    });
    columns.push(column3);

    const columnParams4: GridColumnParams = new GridColumnParams();
    const column4 = new GridColumn({
      headername: this.translate.instant('date') + ' ATD', fieldname: 'ATD', columnParams: columnParams4
    });
    columns.push(column4);

    const columnParams5: GridColumnParams = new GridColumnParams();
    const column5 = new GridColumn({
      headername: this.translate.instant('declarationId'), fieldname: 'declarationId', columnParams: columnParams5
    });
    columns.push(column5);

    return columns;
  }




  onSubmit(form) {

    // console.log(form);
    // console.log(this.model);
    // console.log(form.value);

    try {


      console.log('form.value');
      console.log(form.value);

      this.gf.RunDynamicSP('sp_getShipmentReport', form.value)
        .then((data: { Status: string; result: any }) => {
          if (data.Status === 'OK') {
            if (data.result !== undefined) {
              console.log('after');
              console.log(data.result);
              // console.log('JSON.stringify(');
              // console.log(JSON.stringify(data.result));

              // const ob: any = {"shipmentNumber":"1","openDate":"","ETD":"","ATD":"","declarationId":"12345678"};
              
              this.gridData1 = JSON.parse(data.result);
              // this.gridData1 = [
              //   {"shipmentNumber":"1","openDate":"","ETD":"","ATD":"","declarationId":"12345678"}
              // ];
            }
          }
          else {
            throw new Error(data.Status + ' : ' + data.result);
          }
        });


      // this.gf.RunDynamicSP('sp_GetMenuForUser', { UserID:'895',OptionalStartPaths:'9' })
      //   .then((data: { Status: string; result: any }) => {
      //     if (data.Status === 'OK') {
      //       if (data.result !== undefined) {
      //         console.log('after global');
      //         console.log(data.result);
      //       }
      //     }
      //     else {
      //       throw new Error(data.Status + ' : ' + data.result);
      //     }
      //   });


      }
    catch (error) {
      throw new Error(error);
    }

  }



}
