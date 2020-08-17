
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
/*import { Customer, Representative } from '../../../events/models/customer';*/
// import { Country } from '../../../events/models/customer';
/*import { CustomerService } from '../../../events/services/customerservice';*/

import { AutocompleteDefinitions } from 'projects/dn-infra/src/lib/dp/components/autocomplete/Objects/autocomplete-definitions';
import { CountryService } from '../../events/services/countryservice';
import { Country } from '../../events/models/customer';

@Component({
  selector: 'app-autocompletetest',
  templateUrl: './autocompletetest.component.html',
  styleUrls: ['./autocompletetest.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AutocompletetestComponent implements OnInit {

  constructor(private countryService: CountryService) { }

  // ----------- 1    Autocomplete Definition
  autocompleteDefinition1: AutocompleteDefinitions;
  autocompleteDefinition2: AutocompleteDefinitions;
  autocompleteDefinition3: AutocompleteDefinitions;
  autocompleteDefinition4: AutocompleteDefinitions;
  autocompleteDefinition5: AutocompleteDefinitions;
  autocompleteDefinition6: AutocompleteDefinitions;

  // ----------- 2  Data To send Property
  data_for_ac1: Country[]; // Country
  data_for_ac2: Country[]; // Cities_100k
  data_for_ac3: string[] = ['argentina', 'brazil', 'bulgaria', 'canada', 'cuba', 'finland', 'germany', 'hungary',
    'india', 'ireland', 'israel', 'russia', 'usa']; // fo Flags

  data_for_ac4: string;
  data_for_ac5: any[]; // Events
  data_for_ac6: any[]; // Events

  // ----------- 3 get selected data
  external_data_selected_1: any;
  external_data_selected_2: any;
  external_data_selected_3: any;
  external_data_selected_4: any;
  external_data_selected_5: any;
  external_data_selected_6: any;

  ngOnInit(): void {

    // -----------    5 Section Definitions
    // 1 regular
    this.autocompleteDefinition1 = new AutocompleteDefinitions(false, 'elem_1111', 'name', 0, false, 1, 'ph text 1', false);

    // 2 regular
    this.autocompleteDefinition2 = new AutocompleteDefinitions(false, 'elem_2222', 'name', 0, true, 1, 'ph text 2', true);

    // 3 data with image
    this.autocompleteDefinition3 = new AutocompleteDefinitions(false, 'elem_3', '', 2, true, 1, 'ph text 3', true, '/assets/Images/collection_png_32x32/flags/flag_', 'png');

    // 4 load on click / open
    // this.autocompleteDefinition4 = new AutocompleteDefinitions(false, 'elem_table_4', 'Event Code', 1, false, 1, 'ph text 4', true);
    this.autocompleteDefinition4 = new AutocompleteDefinitions(false, 'elem_4', 'name', 0, false, 1, 'ph text 1', true);

    // 5 table
    this.autocompleteDefinition5 = new AutocompleteDefinitions(false, 'elem_table', 'Event Code', 1, false, 1, 'ph text 5', true);

    // 6 table with custom fields
    const ColumnsExtradata = [
      { 'ToSearch': true, 'columnStyle': 'min-width:100px;background-color:yellow;', 'ElementData': '' },
      { 'ToSearch': true, 'columnStyle': 'min-width:100px;background-color:lightgray;', 'ElementData': '' },
      { 'ToSearch': true, 'columnStyle': 'min-width:180px;background-color:orange;opacity:0.6;', 'ElementData': '' },
      { 'ToSearch': true, 'columnStyle': 'min-width:180px;', 'ElementData': '' },
      { 'ToSearch': false, 'columnStyle': 'min-width:50px;background-color:gray;color:purple', 'ElementData': '' }
    ];

    this.autocompleteDefinition6 = new AutocompleteDefinitions(false, 'elem_table', 'Event Code', 1, false, 1, 'ph text 6', true,
      '', '', '', '', ''
      , ColumnsExtradata
    );


    // -----------    6 Section Get Data

    this.data_for_ac4 = '::';


    this.countryService.getCountries().then(countries => {
      this.data_for_ac1 = countries;
    });

    this.countryService.get_tbl_WorldCities_100k().then(data_for_ac2 => {
      this.data_for_ac2 = data_for_ac2;
    });

    this.countryService.get_data('assets/EventCodes.json').then(data_for_ac5 => {
      this.data_for_ac5 = data_for_ac5;
    });

    this.countryService.get_data('assets/EventCodes.json').then(data_for_ac6 => {
      this.data_for_ac6 = data_for_ac6;
    });

  }

  getData(event) {

  }

}

