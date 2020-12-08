import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { AutocompleteDefinitions, AutocompleteType } from 'projects/dn-infra/src/lib/dp/components/autocomplete/Objects/autocomplete-definitions';
import { CountryService } from '../../events/services/countryservice';

@Component({
  selector: 'app-autocompletesingletest',
  templateUrl: './autocompletesingletest.component.html',
  styleUrls: ['./autocompletesingletest.component.scss']
})
export class AutocompletesingletestComponent implements OnInit {

  constructor(private countryService: CountryService, private cdref: ChangeDetectorRef) { }

  dataForAc6: any[]; // Events
  externalDataSelected6: any;
  autocompleteDefinition6: AutocompleteDefinitions;
  // autocompleteDefinition6: AutocompleteDefinitions = new AutocompleteDefinitions({
  //   inputId: 'elem_table1', field: 'Event Code',
  //   dp_AutocompleteType: AutocompleteType.Table, minLength: 1, placeholder: 'ph text 1'
  //   , dropdown: true
  // });


  ngOnInit(): void {

    this.autocompleteDefinition6 = new AutocompleteDefinitions({
      inputId: 'elem_table6', field: 'Event Code',
      dp_AutocompleteType: 1, multiple: false, minLength: 1, placeholder: 'ph text 6'
      , dropdown: true
    });


    this.countryService.get_data('assets/EventCodes.json').then(dataForAc6 => {
      this.dataForAc6 = dataForAc6;
    });

  }



  handleResult(res: any, id: number) {
    if (res === undefined || id === undefined) {
      return;
    }
    switch (id) {
      case 6:
        this.externalDataSelected6 = res;
        break;
    }
    this.cdref.detectChanges();
  }

}
