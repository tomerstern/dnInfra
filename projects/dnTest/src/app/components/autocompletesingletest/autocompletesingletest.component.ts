import { Component, OnInit } from '@angular/core';
import { AutocompleteDefinitions, AutocompleteType } from 'projects/dn-infra/src/lib/dp/components/autocomplete/Objects/autocomplete-definitions';
import { CountryService } from '../../events/services/countryservice';

@Component({
  selector: 'app-autocompletesingletest',
  templateUrl: './autocompletesingletest.component.html',
  styleUrls: ['./autocompletesingletest.component.scss']
})
export class AutocompletesingletestComponent implements OnInit {

  constructor(private countryService: CountryService) { }

  dataForAc6: any[]; // Events
  externalDataSelected6: string;

   autocompleteDefinition6: AutocompleteDefinitions = new AutocompleteDefinitions({
     inputId: 'elem_table1', field : 'Event Code',
     dp_AutocompleteType: AutocompleteType.Table, minLength: 1, placeholder : 'ph text 1'
     , dropdown : true});


  ngOnInit(): void {

  this.countryService.get_data('assets/EventCodes.json').then(dataForAc6 => {
    this.dataForAc6 = dataForAc6;
  });

  }


}
