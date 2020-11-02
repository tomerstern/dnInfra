
import { ChangeDetectorRef, Component, OnInit, ViewEncapsulation } from '@angular/core';
/*import { Customer, Representative } from '../../../events/models/customer';*/
// import { Country } from '../../../events/models/customer';
/*import { CustomerService } from '../../../events/services/customerservice';*/

import { AutocompleteDefinitions, AutocompleteType } from 'projects/dn-infra/src/lib/dp/components/autocomplete/Objects/autocomplete-definitions';
import { CountryService } from '../../events/services/countryservice';
import { Country } from '../../events/models/customer';

@Component({
  selector: 'app-autocompletetest',
  templateUrl: './autocompletetest.component.html',
  styleUrls: ['./autocompletetest.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AutocompletetestComponent implements OnInit {

  someVar = 'bulgaria';

  constructor(private countryService: CountryService, private cdref: ChangeDetectorRef) { }

  // ----------- 1    Autocomplete Definition
  autocompleteDefinition1: AutocompleteDefinitions;
  autocompleteDefinition2: AutocompleteDefinitions;
  autocompleteDefinition3: AutocompleteDefinitions;
  autocompleteDefinition4: AutocompleteDefinitions;
  autocompleteDefinition5: AutocompleteDefinitions;
  autocompleteDefinition6: AutocompleteDefinitions;
  autocompleteDefinition7: AutocompleteDefinitions;
  autocompleteDefinition8: AutocompleteDefinitions;

  // ----------- 2  Data To send Property
  dataForAc1: any[]; // Country
  dataForAc2: Country[]; // Cities_100k
  dataForAc3: string[] = ['argentina', 'brazil', 'bulgaria', 'canada', 'cuba', 'finland', 'germany', 'hungary',
    'india', 'ireland', 'israel', 'russia', 'usa']; // fo Flags

  dataForAc4: any[];
  dataForAc5: any[]; // Events
  dataForAc6: any[]; // Events
  dataForAc7: any[]; // Events

  dataForAc8: any[]; // test

  // ----------- 3 get selected data
  externalDataSelected1: any;
  externalDataSelected2: any;
  externalDataSelected3: any = null;
  externalDataSelected4: any;
  externalDataSelected5: any;
  externalDataSelected6: any;
  externalDataSelected7: any;
  externalDataSelected8: any;

  changeInitVal() {
    this.someVar = 'brazil1';
  }

  handleResult(res: any, id: number) {
    debugger;
    if (res === undefined || id === undefined) {
      return;
    }

    switch (id) {
      case 1:
        this.externalDataSelected1 = res;
        break;
      case 2:
        this.externalDataSelected2 = res;
        break;
      case 3:
        this.externalDataSelected3 = res;
        break;
      case 4:
        this.externalDataSelected4 = res;
        break;
      case 5:
        this.externalDataSelected5 = res;
        break;
      case 6:
        this.externalDataSelected6 = res;
        break;
      case 7:
        this.externalDataSelected7 = res;
        break;
      case 8:
        this.externalDataSelected8 = res;
        break;
    }

    // if (id === 'data3' && res !== undefined) {
    //   this.externalDataSelected3 = res;
    // }

    this.cdref.detectChanges();
  }

  ngOnInit(): void {

    // -----------    5 Section Definitions

    // 1 regular
    // this.autocompleteDefinition1 = new AutocompleteDefinitions(false, 'elem_1111', 'name', 0,
    // false, 1, 'ph text 1', false);

    this.autocompleteDefinition1 = new AutocompleteDefinitions({
      inputId: 'elem_1111', field: 'name',
      dp_AutocompleteType: 0, multiple: false, minLength: 1, placeholder: 'ph text 1'
      , dropdown: true
      // name: 'Afghanistan'
      // , initialValues: '[{ name: 'Afghanistan', code: 'AF' }]'
      // name: [{ name: 'Afghanistan', code: 'AF' }]
    });

    // 4 load on click / open

    this.autocompleteDefinition4 = new AutocompleteDefinitions({
      inputId: 'elem_444', field: 'name',
      dp_AutocompleteType: 0, multiple: false, minLength: 1, placeholder: 'ph text 4'
      , dropdown: true
      , dpAutocompleteLateDataLoadFunc: () => {
          this.getDynamicData();
      }
    });

    // 2 regular
    // this.autocompleteDefinition2 = new AutocompleteDefinitions(false, 'elem_2222', 'name', 0, true,
    // 1, 'ph text 2', true);

    this.autocompleteDefinition2 = new AutocompleteDefinitions({
      inputId: 'elem_2222', field: 'name',
      dp_AutocompleteType: 0, multiple: true, minLength: 1, placeholder: 'ph text 2'
      , dropdown: true
    });

    // 3 data with image
    // this.autocompleteDefinition3 = new AutocompleteDefinitions(false, 'elem_3', '', 2, true, 1, 'ph text 3', true,
    //  '/assets/Images/collection_png_32x32/flags/flag_', 'png');

    this.autocompleteDefinition3 = new AutocompleteDefinitions({
      inputId: 'elem_3', field: '',
      dp_AutocompleteType: 2, multiple: true, minLength: 1, placeholder: 'ph text 3'
      , dropdown: true, dp_AutocompleteImagesPath: '/assets/Images/collection_png_32x32/flags/flag_',
      dp_AutocompleteImageExtension: 'png'
    });



    // 5 table
    // this.autocompleteDefinition5 = new AutocompleteDefinitions(false, 'elem_table', 'Event Code', 1, false, 1, 'ph text 5', true);

    this.autocompleteDefinition5 = new AutocompleteDefinitions({
      inputId: 'elem_table5', field: 'Event Code',
      dp_AutocompleteType: 1, multiple: false, minLength: 1, placeholder: 'ph text 5'
      , dropdown: true
    });

    //   this.autocompleteDefinition6 = new AutocompleteDefinitions(false, 'elem_table', 'Event Code', 1, false, 1, 'ph text 6', true,
    //   '', '', '', '', ''
    //   , ColumnsExtradata
    // );

    // 6 table with custom fields
    const ColumnsExtradata = [
      { ToSearch: true, columnStyle: 'min-width:100px;background-color:yellow;', ElementData: '' },
      { ToSearch: true, columnStyle: 'min-width:100px;background-color:lightgray;', ElementData: '' },
      { ToSearch: true, columnStyle: 'min-width:180px;background-color:orange;opacity:0.6;', ElementData: '' },
      { ToSearch: true, columnStyle: 'min-width:180px;', ElementData: '' },
      { ToSearch: false, columnStyle: 'min-width:50px;background-color:gray;color:purple', ElementData: '' }
    ];

    this.autocompleteDefinition6 = new AutocompleteDefinitions({
      inputId: 'elem_table6', field: 'Event Code',
      dp_AutocompleteType: 1, multiple: false, minLength: 1, placeholder: 'ph text 6'
      , dropdown: true, dp_AutocompleteTableFields: ColumnsExtradata
    });


    this.autocompleteDefinition7 = new AutocompleteDefinitions({
      inputId: 'elem_table7', field: 'name',
      dp_AutocompleteType: 1, multiple: false, minLength: 1, placeholder: 'ph text 7'
      , dropdown: true
    });

    // -----------    6 Section Get Data

    this.countryService.getCountries().then(countries => {
      this.dataForAc1 = countries;
      // console.log(countries);
    });

    this.countryService.get_tbl_WorldCities_100k().then(dataForAc2 => {
      this.dataForAc2 = dataForAc2;
    });

    this.countryService.get_data('assets/EventCodes.json').then(dataForAc5 => {
      this.dataForAc5 = dataForAc5;
    });

    this.countryService.get_data('assets/EventCodes.json').then(dataForAc6 => {
      this.dataForAc6 = dataForAc6;
    });


    this.dataForAc4 = [];

    // this.countryService.getCountries().then(countries => {
    //   this.dataForAc4 = countries;
    // });

    // this.countryService.getData_iis(`http://import-iis-dev:8090/Assist/GetCountriesCode`)
    // .subscribe((data: []) => {
    //   this.dataForAc4 = data;
    //   console.log('gil this.dataForAc4 =');
    //   console.log(this.dataForAc4 );
    // });


    // // jsonplaceholder working
    // this.countryService.getUsers2()
    //   .subscribe((data: []) => {
    //     this.dataForAc8 = data;
    //   });

    this.countryService.getData_iis(`http://import-iis-dev:8090/Assist/GetCountriesCode`)
      .subscribe((data: []) => {
        this.dataForAc7 = data;
      });


    // this.countryService.get_data('assets/EventCodes.json').then(dataForAc7 => {
    //   this.dataForAc7 = dataForAc7;
    // });


    // this.countryService.getUsers2().then(dataForAc8 => {
    //   this.dataForAc8 = dataForAc8;
    // });

  }

  getDbSataForAc8(event) {
    // alert('first user interaction!');

    this.countryService.getData_iis(`http://import-iis-dev:8090/Assist/GetCountriesCode`)
      .subscribe((data: []) => {
        this.dataForAc8 = data;
        // this.cdref.detectChanges();
        console.log(this.dataForAc8);
        this.autocompleteDefinition8.LateDataSource = this.dataForAc8;
      });
  }

  getDynamicData() {
  // // use A - working
  // this.countryService.getData_iis(`http://import-iis-dev:8090/Assist/GetCountriesCode`)
  //   .subscribe((data: []) => {
  //     this.dataForAc4 = data;
  //   });

  // // use B - working
    this.countryService.getCountries().then(countries => {
      this.dataForAc4 = countries;
    });
  }




}

