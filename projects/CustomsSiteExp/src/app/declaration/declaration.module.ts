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
import { Declaration2Component } from './components/tabs/declaration2/declaration2.component';

@NgModule({
  declarations: [
    DeclarationComponent,
    HeaderComponent,
    TabmenuComponent,
    ToolbarComponent,
    OpenComponent,
    ShipmentDetailsComponent,
    Declaration2Component
  ],
  imports: [CommonModule, DeclarationRoutingModule, SharedModule],
})
export class DeclarationModule {}
