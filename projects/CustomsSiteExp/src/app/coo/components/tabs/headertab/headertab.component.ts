import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AutocompleteDefinitions } from 'projects/dn-infra/src/lib/dp/components/autocomplete/Objects/autocomplete-definitions';
import { CooService } from '../../../services/coo.service';
import { InputtextDefinitions } from 'projects/dn-infra/src/lib/dp/components/inputtext/objects/inputtext-definitions';
import { InputNumberDefinitions } from 'projects/dn-infra/src/lib/dp/components/inputnumber/objects/inputnumber-definitions';
import { CalendarDefinitions } from 'projects/dn-infra/src/lib/dp/components/calendar/objects/calendar-definitions';
import { CheckboxDefinitions } from 'projects/dn-infra/src/lib/dp/components/checkbox/objects/checkbox-definitions';
import { RadioButtonDefinitions } from 'projects/dn-infra/src/lib/dp/components/radiobutton/objects/radiobutton-definitions';
import { Observable, Subscription } from 'rxjs';

@Component({

  selector: 'app-header',
  templateUrl: './headertab.component.html',
  styleUrls: ['./headertab.component.scss'],
})
export class HeaderTabComponent implements OnInit {
  @Output() callCooSaveFunction:EventEmitter<any>=new EventEmitter<any>()

  constructor(private cooService: CooService) {}
  private eventsSubscription: Subscription;
  @Input() events: Observable<void>;
  autocompleteDefinition1: AutocompleteDefinitions;
  InputTextDef: InputtextDefinitions;
  InputTextDefDis: InputtextDefinitions;
  InputNumberDef: InputNumberDefinitions;
  calendarDef: CalendarDefinitions;
  checkboxDef: CheckboxDefinitions;
  radioButtonDef: RadioButtonDefinitions;
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
    this.radioButtonDef = new RadioButtonDefinitions({});
    this.neeType ="'CNEE'";

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
    this.eventsSubscription = this.events.subscribe(() => this.sendDataToParent());
  }
  sendDataToParent() {
    alert('this is header tab');
    this.callCooSaveFunction.emit({name:'headertab', success:true, obj:this.headerTabData});
  }
 
}