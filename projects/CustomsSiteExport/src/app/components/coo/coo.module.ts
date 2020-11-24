import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { BrowserModule } from '@angular/platform-browser';
// import { HttpClient, HttpClientModule } from '@angular/common/http';

import { DnInfraModule } from 'projects/dn-infra/src/public-api'; /* before build */

// import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
// import { TranslateHttpLoader } from '@ngx-translate/http-loader';

// import { CooHeaderComponent } from './coo-header/coo-header.component';
// import { CooTabComponent } from './coo-tab/coo-tab.component';
// import { CooToolbarComponent } from './coo-toolbar/coo-toolbar.component';
// import { MainCooComponent } from './main-coo/main-coo.component';
// import { GeneralComponent } from './tabs/general/general.component';
// import { CooRoutingModule } from './coo-routing.module';


// @NgModule({
//   declarations: [
//     CooHeaderComponent,
//     CooTabComponent,
//     CooToolbarComponent,
//     MainCooComponent,
//     GeneralComponent,
//   ],
//   imports: [
//     CommonModule,
//     // BrowserModule,
//     // DnInfraModule,
//     CooRoutingModule
//     // ,TranslateModule.forChild({
//     //   loader: {
//     //     provide: TranslateLoader,
//     //     useFactory: HttpLoaderFactory,
//     //     deps: [HttpClient],
//     //   }
//     // })
//   ],
//   exports: [
//     CooHeaderComponent,
//     CooTabComponent,
//     CooToolbarComponent,
//     MainCooComponent,
//     GeneralComponent,
//   ]
// })
export class CooModule { }

// export function HttpLoaderFactory(http: HttpClient) {
//   // return new TranslateHttpLoader(http);
//   return new TranslateHttpLoader(http, './assets/i18n/', '.json'); /* fix bulid / publish */
// }
