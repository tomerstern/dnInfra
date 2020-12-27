import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { FormsModule } from '@angular/forms';
import { DnInfraModule } from 'projects/dn-infra/src/public-api';
import {FieldsetModule} from 'primeng/fieldset';
import { ChipsModule } from 'primeng/chips';
/* for Translate start */
import { HttpClientModule } from '@angular/common/http';
import { LanguageComponent } from './components/language/language.component';

/* for Translate end */
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';
import { ErrorComponent } from './components/error/error.component';

import { HomeComponent } from './components/home/home.component';
import { SharedModule } from './shared/shared.module';
import { CooModule } from './coo/coo.module';
import { DeclarationModule } from './declaration/declaration.module';
import { Test1Component } from './components/test/test1/test1.component';
import { Test2Component } from './components/test/test2/test2.component';
import { Test3Component } from './components/test/test3/test3.component';
import { Test4Component } from './components/test/test4/test4.component';
import { Test5Component } from './components/test/test5/test5.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    ErrorComponent,
    LanguageComponent,
    HomeComponent,
    Test1Component,
    Test2Component,
    Test3Component,
    Test4Component,
    Test5Component
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    DnInfraModule,
    AppRoutingModule,
    CoreModule,
    SharedModule,
    DeclarationModule,
    CooModule,
    FieldsetModule,
    ChipsModule
  ],

  bootstrap: [AppComponent],
})
export class AppModule {}



/* Translation function */
