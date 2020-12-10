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
    NonmanipulationcertificateComponent
  ],
  imports: [
    FieldsetModule,
    CommonModule,
    CooRoutingModule,
    SharedModule
  ],
  exports: []
})
export class CooModule { }
