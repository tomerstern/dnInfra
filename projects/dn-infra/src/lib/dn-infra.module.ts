import { NgModule } from '@angular/core';
import { DnInfraComponent } from './dn-infra.component';
import { CalendarComponent } from './dp/components/calendar/calendar.component';
import { CalendarModule } from 'primeng/calendar';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CheckboxComponent } from './dp/components/checkbox/checkbox.component';
import {CheckboxModule, AutoCompleteModule} from 'primeng';
import {ChartModule} from 'primeng/chart';
import { AutocompleteComponent } from './dp/components/autocomplete/autocomplete.component';


@NgModule({
  declarations: [DnInfraComponent, CalendarComponent, CheckboxComponent, AutocompleteComponent],
  imports: [
    CalendarModule,
    FormsModule,
    ChartModule,
    BrowserAnimationsModule,
    CheckboxModule,
    AutoCompleteModule
  ],
  exports: [DnInfraComponent, CalendarComponent, CheckboxComponent, AutocompleteComponent]
})
export class DnInfraModule { }
