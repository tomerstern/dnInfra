import { Component, OnInit } from '@angular/core';
import { AutocompleteDefinitions } from 'projects/dn-infra/src/lib/dp/components/autocomplete/Objects/autocomplete-definitions';
import { CalendarDefinitions } from 'projects/dn-infra/src/lib/dp/components/calendar/objects/calendar-definitions';
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
  CalendarDef1: CalendarDefinitions;
  test: any = {};
  declarationBy: string;

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

      this.CalendarDef1 = new CalendarDefinitions({
        minDate: new Date(2019, 6, 12), showTime: false
      });

      if( this.cooService.cooBox.Header.COO_IsDeclaredByExporter )
        this.declarationBy = 'Exporter';

      if( this.cooService.cooBox.Header.COO_IsDeclaredByManufacturer )
        this.declarationBy = 'Manufacturer';
      //this.test.row = this.cooService.cooBox.Header.COO_DateOfDeclaration;
      //alert(this.cooService.cooBox.Header.COO_DateOfDeclaration) ;
      //this.COO_IssuingCountry1 = { name: 'ISRAEL', code: this.cooService.cooBox.Header.COO_IssuingCountry };


  }
}
