import { Component, OnInit, Input } from '@angular/core';
import { DatePipe } from '@angular/common';
import { InputtextDefinitions } from 'projects/dn-infra/src/lib/dp/components/inputtext/objects/inputtext-definitions';
import { InputNumberDefinitions } from 'projects/dn-infra/src/lib/dp/components/inputnumber/objects/inputnumber-definitions';
import { CalendarDefinitions } from 'projects/dn-infra/src/lib/dp/components/calendar/objects/calendar-definitions';
import { CheckboxDefinitions } from 'projects/dn-infra/src/lib/dp/components/checkbox/objects/checkbox-definitions';
import { AutocompleteDefinitions } from 'projects/dn-infra/src/lib/dp/components/autocomplete/Objects/autocomplete-definitions';
import { ShipmentDetail } from '../../../models/shipment';
import { ShipmentService } from '../../../services/shipment.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  constructor(private shipmentService: ShipmentService, public datepipe: DatePipe) { }

  // detail: ShipmentDetail = new ShipmentDetail(1234, '1', 1, '10/10/2020', 'DDF123', 'T2', true, 555);
  detail: ShipmentDetail;
  detailIsOld = true;
  InputTextDef: InputtextDefinitions;
  InputTextDefDis: InputtextDefinitions;
  InputNumberDef: InputNumberDefinitions;
  calendarDef: CalendarDefinitions;
  checkboxDef: CheckboxDefinitions;
  selectedItemAutocomplete: string;
  autocompleteDef: AutocompleteDefinitions;
  dataForAutocomplete: any[];
  openDateStr: Date;
  isOldChk: boolean;

  ngOnInit(): void {
    this.detail = this.shipmentService.getShipmentDetails();
    if (this.detail.IsOld == 'N'){
      this.isOldChk = false;
    }
    else{
      this.isOldChk = true;
    }

    // this.testDate = parseInt(this.detail.OpenDate.substr(6));
    // tslint:disable-next-line: radix
    // this.openDateStr = this.datepipe.transform(new Date(parseInt(this.detail.OpenDate.substr(6))), 'dd/MM/yyyy');
    this.openDateStr = new Date(parseInt(this.detail.OpenDate.substr(6)))
    this.InputTextDef = new InputtextDefinitions({ size: 15 });
    this.InputTextDefDis = new InputtextDefinitions({ size: 15, disabled: true});
    this.InputNumberDef = new InputNumberDefinitions({});
    this.calendarDef = new CalendarDefinitions({minDate: new Date(2019, 6, 12), showTime: false});
    this.checkboxDef = new CheckboxDefinitions({});
    this.selectedItemAutocomplete = this.detail.ActivityId;
    this.autocompleteDef = new AutocompleteDefinitions({
      isStandAlone: true, inputId: 'autoCompHTMLId', field : 'code',
      dp_AutocompleteType: 1, multiple: false, minLength: 1, placeholder : 'Activity Type', dropdown : true});

    // this.shipmentService.get_data('assets/activityTypes.json').then(dataForAutocomplete => {
    //   this.dataForAutocomplete = dataForAutocomplete;
    // });
  }

  updateDetails()
  {
    let detailUpdated: any;
    let shipment: any;
    if (sessionStorage.getItem('currentUpdShipment') != null)
    {
      shipment = JSON.parse(sessionStorage.getItem('currentUpdShipment'));
      detailUpdated = shipment.Details;
    }
    else {return;}
    detailUpdated.state = 16;

    detailUpdated.EntityId = this.detail.EntityId;
    detailUpdated.ActivityId = this.detail.ActivityId;
    detailUpdated.e_commerce_y_n = this.detail.e_commerce_y_n;
    if (this.isOldChk) {
      detailUpdated.IsOld = 'Y';
    } else{
      detailUpdated.IsOld = 'N';
    }
    detailUpdated.OpenDate = this.openDateStr;
    // .getTime()
    sessionStorage.setItem('currentUpdShipment', JSON.stringify(shipment));
  }
}
