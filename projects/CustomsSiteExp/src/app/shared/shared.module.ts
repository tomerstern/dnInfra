import { APP_INITIALIZER, Injector, NgModule } from '@angular/core';
import { CommonModule, LOCATION_INITIALIZED } from '@angular/common';
import { DnInfraModule } from '../../../../dn-infra/src/public-api';
import { HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader, TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    DnInfraModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
  ],
  exports: [DnInfraModule, TranslateModule],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: appInitializerFactory,
      deps: [TranslateService, Injector],
      multi: true,
    },
  ],
})
export class SharedModule {}

/* Translation function */
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(
    http,
    './assets/i18n/',
    '.json'
  ); /* fix bulid / publish */
}

export function appInitializerFactory(
  translate: TranslateService,
  injector: Injector
) {
  return () =>
    new Promise<any>((resolve: any) => {
      const locationInitialized = injector.get(
        LOCATION_INITIALIZED,
        Promise.resolve(null)
      );
      locationInitialized.then(() => {
        // const Currentlang = 'en';

        let Currentlang = localStorage.getItem('dGLang');
        if (Currentlang == null) {
          Currentlang = 'en';
        }

        translate.addLangs(['en', 'he', 'ru']);
        translate.setDefaultLang('en'); /* fallback */

        translate.use(Currentlang).subscribe(
          () => {
            // console.log(`Success:  '${Currentlang}' language.'`);
          },
          (err) => {
            console.error(`Problem Init '${Currentlang}' language'`);
          },
          () => {
            resolve(null);
          }
        );
      });
    });
}
