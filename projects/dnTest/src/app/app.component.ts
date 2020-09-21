import { Component, OnInit } from '@angular/core';
import { CalendarDefinitions } from 'projects/dn-infra/src/lib/dp/components/calendar/objects/calendar-definitions';
import { CheckboxDefinitions } from 'projects/dn-infra/src/lib/dp/components/checkbox/objects/checkbox-definitions';
import { AutocompleteDefinitions } from 'projects/dn-infra/src/lib/dp/components/autocomplete/Objects/autocomplete-definitions';
import { Country } from './events/models/customer';
import { CountryService } from './events/services/countryservice';
import { InputtextDefinitions } from 'projects/dn-infra/src/lib/dp/components/inputtext/objects/inputtext-definitions';
import { InputNumberDefinitions } from 'projects/dn-infra/src/lib/dp/components/inputnumber/objects/inputnumber-definitions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private countryService: CountryService) { }

  calendarData1: Date;
  inputText1: string;
  inputNumber1: number;
  calendarDefinitions: CalendarDefinitions;
  checkboxDefinitions: CheckboxDefinitions;
  title = 'dnTest';

  autocompleteDefinition1: AutocompleteDefinitions;
  it1: InputtextDefinitions;
  in1: InputNumberDefinitions;

  data_for_ac1: Country[]; // Country

  external_data_selected_1: any;


  ngOnInit(): void {
    this.inputText1 = 'hey yo';
    this.inputNumber1 = -300;
    this.calendarDefinitions = new CalendarDefinitions({
      minDate: new Date(2019, 6, 12), showTime: false
    });
    this.calendarData1 = new Date();
    this.checkboxDefinitions = new CheckboxDefinitions({});
    this.it1 = new InputtextDefinitions({});
    this.in1 = new InputNumberDefinitions({});

    this.countryService.getCountries().then(countries => {
      this.data_for_ac1 = countries;
    });
  }

}


