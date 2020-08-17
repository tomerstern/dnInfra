import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './components/table/table.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { EventsComponent } from './events.component';
// import { CoreModule } from '../core/modules/prime.module';
import { ActionbarComponent } from './components/actionbar/actionbar.component';

@NgModule({
  declarations: [TableComponent, SidenavComponent, EventsComponent, ActionbarComponent],
  imports: [
    CommonModule/*, CoreModule*/
  ], exports: [
    TableComponent, SidenavComponent, EventsComponent
  ]
})
export class EventsModule { }
