import { Component, OnInit } from '@angular/core';
import { AutocompleteDefinitions } from 'projects/dn-infra/src/lib/dp/components/autocomplete/Objects/autocomplete-definitions';
import { CooService } from '../../../services/coo.service';
import { InputtextDefinitions } from 'projects/dn-infra/src/lib/dp/components/inputtext/objects/inputtext-definitions';
import { InputNumberDefinitions } from 'projects/dn-infra/src/lib/dp/components/inputnumber/objects/inputnumber-definitions';
import { CalendarDefinitions } from 'projects/dn-infra/src/lib/dp/components/calendar/objects/calendar-definitions';
import { CheckboxDefinitions } from 'projects/dn-infra/src/lib/dp/components/checkbox/objects/checkbox-definitions';

@Component({

  selector: 'app-header',
  templateUrl: './headertab.component.html',
  styleUrls: ['./headertab.component.scss'],
})
export class HeaderTabComponent implements OnInit {

  constructor(private cooService: CooService) {}

  autocompleteDefinition1: AutocompleteDefinitions;
  InputTextDef: InputtextDefinitions;
  InputTextDefDis: InputtextDefinitions;
  InputNumberDef: InputNumberDefinitions;
  calendarDef: CalendarDefinitions;
  checkboxDef: CheckboxDefinitions;
  countriesData: [];
  transportByData: any;
  fetchArr = [];
  headerTabData: any;
  neeType: string;
  yesNoData=[];
  cumulation:string;
  ngOnInit(): void {
   // this.dataForAc1 = [{ name: 'Air Import', code: 'AI' }, { name: 'Ocean Import', code: 'OI' }];
    this.autocompleteDefinition1 = new AutocompleteDefinitions({
      inputId: 'department', field: 'name',
      dp_AutocompleteType: 0  , dropdown: true
    });
    this.InputTextDef = new InputtextDefinitions({ size: 25 });
    this.InputTextDefDis = new InputtextDefinitions({ size: 25, disabled: true});
    this.InputNumberDef = new InputNumberDefinitions({});
    this.calendarDef = new CalendarDefinitions({minDate: new Date(2019, 6, 12), showTime: false});
    this.checkboxDef = new CheckboxDefinitions({});
    this.neeType ="'CNEE'";
    this.cumulation = "";
    this.transportByData = [{ name: 'Air', code: 'Air' }, { name: 'Ocean', code: 'Ocean' }];
    this.yesNoData = [{ name: 'Yes', code: 'True' }, { name: 'No', code: 'False' }];
    this.fetchArr.push(this.cooService.getCountriesList());
    this.fetchArr.push(this.cooService.getCooHeaderTab());
    Promise.all(this.fetchArr).then((data: Array<any>) => {
      this.countriesData = data[0];
      this.headerTabData = data[1];
    }).catch(err => {
      console.log(err);
    });

  }

   showValue(sender:any) {
   debugger
  }
}