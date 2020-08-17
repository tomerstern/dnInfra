import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DnInfraModule } from 'projects/dn-infra/src/public-api';
import { CountryService } from './events/services/countryservice';
import { HttpClientModule } from '@angular/common/http';
import { AutocompletetestComponent } from './components/autocompletetest/autocompletetest.component';
import { AutocompletesingletestComponent } from './components/autocompletesingletest/autocompletesingletest.component';
import { EventsModule } from './events/events.module';
import { CommonModule } from '@angular/common';

// actual build
// import { DnInfraModule } from 'dn-infra';

@NgModule({
  declarations: [
    AppComponent,
    AutocompletetestComponent,
    AutocompletesingletestComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    DnInfraModule,
    HttpClientModule,
    EventsModule
  ],
  providers: [CountryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
