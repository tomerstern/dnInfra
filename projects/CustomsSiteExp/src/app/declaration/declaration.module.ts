import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeclarationRoutingModule } from './declaration-routing.module';
import { DeclarationComponent } from './declaration.component';
import { HeaderComponent } from './components/header/header.component';
import { TabmenuComponent } from './components/tabmenu/tabmenu.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { SharedModule } from '../shared/shared.module';
import { OpenComponent } from './components/tabs/open/open.component';
import { ShipmentDetailsComponent } from './components/tabs/open/shipment-details/shipment-details.component';
import { DeclarationComponent as TabDeclarationComponent } from './components/tabs/declaration/declaration.component';
import { Declaration2Component } from './components/tabs/declaration2/declaration2.component';
import {FieldsetModule} from 'primeng/fieldset';
import { ReferencesComponent } from './components/tabs/open/shipment-details/references/references.component';
import { DeclarationDetailsComponent } from './components/tabs/declaration/declaration-details/declaration-details.component';
import { DatesComponent } from './components/tabs/declaration/dates/dates.component';
import { ExporterComponent } from './components/tabs/declaration/exporter/exporter.component';
import { ConsigneeComponent } from './components/tabs/declaration/consignee/consignee.component';

@NgModule({
  declarations: [
    DeclarationComponent,
    HeaderComponent,
    TabmenuComponent,
    ToolbarComponent,
    OpenComponent,
    ShipmentDetailsComponent,
    Declaration2Component,
    TabDeclarationComponent,
    ReferencesComponent,
    DeclarationDetailsComponent,
    DatesComponent,
    ExporterComponent,
    ConsigneeComponent
  ],
  imports: [CommonModule, DeclarationRoutingModule, SharedModule, FieldsetModule],
})
export class DeclarationModule {}
