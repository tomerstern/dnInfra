import { Component, OnInit, ViewEncapsulation } from '@angular/core';

// import { CountryService } from '../../../events/services/countryservice';

import { AutocompleteDefinitions } from 'projects/dn-infra/src/lib/dp/components/autocomplete/Objects/autocomplete-definitions';
import { CountryService } from '../../events/services/countryservice';

@Component({
  selector: 'app-autocompletesingletest',
  templateUrl: './autocompletesingletest.component.html',
  styleUrls: ['./autocompletesingletest.component.scss']
})
export class AutocompletesingletestComponent implements OnInit {

  constructor(private countryService: CountryService) { }

  // ----------- 1    Autocomplete Definition
  autocompleteDefinition6: AutocompleteDefinitions;
  data_for_ac6: any[]; // Events
  external_data_selected_6: string;

  ngOnInit(): void {


  this.autocompleteDefinition6 = new AutocompleteDefinitions(true, 'elem_table', 'Event Code', 1, false, 1, 'ph text 3', true,
      '', '', '', '', '');


  this.countryService.get_data('assets/EventCodes.json').then(data_for_ac6 => {
    this.data_for_ac6 = data_for_ac6;
  });

  }

  funcTest(event) {


  }

}
