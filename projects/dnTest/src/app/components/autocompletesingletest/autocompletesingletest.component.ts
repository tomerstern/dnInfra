import { Component, OnInit, ViewEncapsulation } from '@angular/core';
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
  // autocompleteDefinition6: AutocompleteDefinitions;
  dataForAc6: any[]; // Events
  externalDataSelected6: string;

   // isStandAlone: false,

   autocompleteDefinition6: AutocompleteDefinitions = new AutocompleteDefinitions({
     isStandAlone: true, inputId: 'elem_table', field : 'Event Code',
     dp_AutocompleteType: 1, multiple: false, minLength: 1, placeholder : 'ph text 3'
     , dropdown : true});


  ngOnInit(): void {

    // this.autocompleteDefinition6 = new AutocompleteDefinitions(true, 'elem_table', 'Event Code', 1, false, 1, 'ph text 3', true,
    // '', '', '', '', '');

  this.countryService.get_data('assets/EventCodes.json').then(dataForAc6 => {
    this.dataForAc6 = dataForAc6;
  });

  }


}
