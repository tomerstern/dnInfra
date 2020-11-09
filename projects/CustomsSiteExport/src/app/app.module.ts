import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DnInfraModule } from 'projects/dn-infra/src/public-api'; /* before build */

// import ngx-translate and the http loader
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './components/header/header.component';
import { Test1Component } from './components/test/test1/test1.component';
import { Test2Component } from './components/test/test2/test2.component';
import { Test3Component } from './components/test/test3/test3.component';
// import { ConfigService } from './services/config.service';
/* for Translate start */
import { Injector, APP_INITIALIZER } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LOCATION_INITIALIZED } from '@angular/common';
/* for Translate end */
// import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
// import { CustomLoader } from './classes/custom-loader';
import { LanguageComponent } from './components/language/language.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule } from '@angular/forms';
import { Test4Component } from './components/test/test4/test4.component';
import { G7Component } from './components/shipment/g7/g7.component';
import { GpComponent } from './components/shipment/gp/gp.component';
import { MaintabComponent } from './components/shipment/maintab/maintab.component';
import { DetailsComponent } from './components/shipment/details/details.component';
import { GtComponent } from './components/shipment/gt/gt.component';
import { DeclarationComponent } from './components/declaration/declaration.component';

// export function configService(configService: ConfigService) {
//   return () => configService.load();
// }

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    Test1Component,
    Test2Component,
    Test3Component,
    LanguageComponent,
    LoginComponent,
    Test4Component,
    G7Component,
    GpComponent,
    MaintabComponent,
    DetailsComponent,
    GtComponent,
    DeclarationComponent
  ],

  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    DnInfraModule,
    // ngx-translate and the loader module
    HttpClientModule,
    // TranslateModule.forRoot({
    //    loader: {provide: TranslateLoader, useClass: CustomLoader}
    // })
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      }
    })
    // ,FontAwesomeModule
  ],

  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: appInitializerFactory,
      deps: [TranslateService, Injector],
      multi: true
    }
  ],
  // providers: [
  //   {
  //   // ConfigService, {
  //   //   provide: APP_INITIALIZER,
  //   //   useFactory: configService,
  //   //   // useFactory: (configService: ConfigService) => function () { return configService.load(); },
  //   //   // useFactory: (configService: ConfigService) => configService.loader,
  //   //   deps: [ConfigService],
  //   //   multi: true
  // }
  // ],

  bootstrap: [AppComponent],
})
export class AppModule { }

export function HttpLoaderFactory(http: HttpClient) {
  // return new TranslateHttpLoader(http);
  return new TranslateHttpLoader(http, './assets/i18n/', '.json'); /* fix bulid / publish */
}
export function appInitializerFactory(translate: TranslateService, injector: Injector) {
  return () => new Promise<any>((resolve: any) => {
    const locationInitialized = injector.get(LOCATION_INITIALIZED, Promise.resolve(null));
    locationInitialized.then(() => {

      // const Currentlang = 'en';

      let Currentlang = localStorage.getItem('dpGLang');
      if (Currentlang == null) {
        Currentlang = 'en';
      }

      translate.addLangs(['en', 'he', 'ru']);
      translate.setDefaultLang('en'); /* fallback */

      translate.use(Currentlang).subscribe(() => {
        // console.log(`Success:  '${langToSet}' language.'`);
      }, err => {
        console.error(`Problem Init '${Currentlang}' language'`);
      }, () => {
        resolve(null);
      });
    });
  });
}
