import { Component, OnInit } from '@angular/core';
import { AutocompleteDefinitions } from 'projects/dn-infra/src/lib/dp/components/autocomplete/Objects/autocomplete-definitions';
import { CooService } from '../../../services/coo.service';

@Component({
  selector: 'app-coosignature',
  templateUrl: './coosignature.component.html',
  styleUrls: ['./coosignature.component.scss']
})
export class CoosignatureComponent implements OnInit {

  constructor( public cooService : CooService) { }
  autocompleteDefinition1: AutocompleteDefinitions;
  autocompleteDefinition2: AutocompleteDefinitions;

  ngOnInit(): void {
      this.getDefinitions();
    }

    getDefinitions() {
      this.autocompleteDefinition1 = new AutocompleteDefinitions({
        inputId: 'acCountryList', 
        field: 'name',
        dp_AutocompleteType: 0, 
        minLength: 1, 
        dropdown: true
      });

      this.autocompleteDefinition2 = new AutocompleteDefinitions({
        inputId: 'acCustomOfficeList', 
        field: 'name',
        dp_AutocompleteType: 0, 
        minLength: 1, 
        dropdown: true
      });

      //alert(this.cooService.cooBox.Header.COO_IssuingCountryHebName) ;
      //this.COO_IssuingCountry1 = { name: 'ISRAEL', code: this.cooService.cooBox.Header.COO_IssuingCountry };


  }
}
