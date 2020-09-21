import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { GlobalFunctionsService } from './services/global-functions.service';
import { AppComponent } from './app.component';
import { DnInfraModule } from 'projects/dn-infra/src/public-api'; /* before build */
// import { DnInfraModule } from 'dn-infra';  /* go to dist after build */
import { CountryService } from './events/services/countryservice';
import { HttpClientModule } from '@angular/common/http';
import { AutocompletetestComponent } from './components/autocompletetest/autocompletetest.component';
import { AutocompletesingletestComponent } from './components/autocompletesingletest/autocompletesingletest.component';
import { EventsModule } from './events/events.module';
import { CommonModule } from '@angular/common';
import { ConfirmdialogtestComponent } from './components/confirmdialogtest/confirmdialogtest.component';
import { ContextmenutestComponent } from './components/contextmenutest/contextmenutest.component';
import { DialogtestComponent } from './components/dialogtest/dialogtest.component';
import { MenubartestComponent } from './components/menubartest/menubartest.component';
import { SplitbuttontestComponent } from './components/splitbuttontest/splitbuttontest.component';
import { TabviewtestComponent } from './components/tabviewtest/tabviewtest.component';
import { ToasttestComponent } from './components/toasttest/toasttest.component';
import { TreetestComponent } from './components/treetest/treetest.component';
import { CustomerService } from './events/services/customerservice';
import { ConfirmationService } from 'primeng';
import { GlobalfunctionstestComponent } from './components/globalfunctionstest/globalfunctionstest.component';
import { Page1testComponent } from './components/page1test/page1test.component';
import { Page2testComponent } from './components/page2test/page2test.component';
import { Page3testComponent } from './components/page3test/page3test.component';
import { Page4testComponent } from './components/page4test/page4test.component';
import { TabletestComponent } from './components/tabletest/tabletest.component';
import { Page0testComponent } from './components/page0test/page0test.component';
import { TabmenutestComponent } from './components/tabmenutest/tabmenutest.component';
import { GeneraltestComponent } from './components/generaltest/generaltest.component';
import { Table2testComponent } from './components/table2test/table2test.component';



// actual build
// import { DnInfraModule } from 'dn-infra';

@NgModule({
  declarations: [
    AppComponent, TabletestComponent,
    AutocompletetestComponent, AutocompletesingletestComponent, ConfirmdialogtestComponent,
    ContextmenutestComponent, DialogtestComponent, MenubartestComponent,
     SplitbuttontestComponent,
    TabviewtestComponent, ToasttestComponent, TreetestComponent, GlobalfunctionstestComponent,
     Page1testComponent, Page2testComponent, Page3testComponent, Page0testComponent,
     TabmenutestComponent,
     Page4testComponent, GeneraltestComponent, Table2testComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    DnInfraModule,
    HttpClientModule,
    EventsModule
  ],
  providers: [CustomerService, CountryService, ConfirmationService, GlobalFunctionsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
