import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CooRoutingModule } from './coo-routing.module';
import { CooComponent } from './coo.component';
import { HeaderComponent } from './components/header/header.component';
import {FieldsetModule} from 'primeng/fieldset';

import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { TabmenuComponent } from './components/tabmenu/tabmenu.component';
import { SharedModule } from '../shared/shared.module';
import { CootypeMainComponent } from './components/cootypes/cootype-main/cootype-main.component';
import { CootypeButtonComponent } from './components/cootypes/cootype-button/cootype-button.component';
import { CootypeListComponent } from './components/cootypes/cootype-list/cootype-list.component';
import { CootypeDetailsComponent } from './components/cootypes/cootype-details/cootype-details.component';



import { GeneralComponent } from './components/tabs/general/general.component';
import { HeaderTabComponent } from './components/tabs/headertab/headertab.component';
import { CoodetailsComponent } from './components/tabs/coodetails/coodetails.component';
import { CoogoodsdetailsComponent } from './components/tabs/coogoodsdetails/coogoodsdetails.component';
import { CoosignatureComponent } from './components/tabs/coosignature/coosignature.component';
import { NonmanipulationcertificateComponent } from './components/tabs/nonmanipulationcertificate/nonmanipulationcertificate.component';
import { FormsModule } from '@angular/forms';
import { TransmissionlogComponent } from '../components/transmission/transmissionlog/transmissionlog.component';
import { TransmissiondetailsComponent } from '../components/transmission/transmissiondetails/transmissiondetails.component';
import { DisplayXMLComponent } from '../components/transmission/display-xml/display-xml.component';
import { InvoicedetailsComponent } from './components/invoicedetails/invoicedetails.component';


@NgModule({
  declarations: [
    CooComponent,
    GeneralComponent,
    HeaderTabComponent,
    HeaderComponent,
    ToolbarComponent,
    TabmenuComponent,
    CootypeMainComponent,
    CootypeButtonComponent,
    CootypeListComponent,
    CootypeDetailsComponent,
    CoodetailsComponent,
    CoogoodsdetailsComponent,
    CoosignatureComponent,
    NonmanipulationcertificateComponent,
    TransmissionlogComponent,
    TransmissiondetailsComponent,
    DisplayXMLComponent,
    InvoicedetailsComponent
  ],
  imports: [
    FieldsetModule,
    CommonModule,
    CooRoutingModule,
    SharedModule,
    FormsModule
  ],
  exports: []
})
export class CooModule { }
