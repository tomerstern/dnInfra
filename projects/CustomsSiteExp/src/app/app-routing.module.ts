import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ErrorComponent } from './components/error/error.component';
//  ** COO **
import { CooComponent } from './coo/coo.component';
import { CootypeMainComponent } from './coo/components/cootypes/cootype-main/cootype-main.component';
import { TransmissionlogComponent } from './components/transmission/transmissionlog/transmissionlog.component';
//  ** COO **

//  ** Declaration **
import { DeclarationComponent } from './declaration/declaration.component';
import { OpenComponent } from './declaration/components/tabs/open/open.component';
import { DeclarationComponent as DeclarationTabComponent } from './declaration/components/tabs/declaration/declaration.component';
import { Declaration2Component } from './declaration/components/tabs/declaration2/declaration2.component';
//  ** Declaration **
import { Test1Component } from './components/test/test1/test1.component';
import { Test2Component } from './components/test/test2/test2.component';
import { Test3Component } from './components/test/test3/test3.component';
import { Test4Component } from './components/test/test4/test4.component';
import { Test5Component } from './components/test/test5/test5.component';


const routes: Routes = [
  { path: '',         component: HomeComponent },
  // { path: '**',       component: ErrorComponent },
  { path: 'login',    component: LoginComponent },
  { path: 'error',    component: ErrorComponent },
  { path: 'cootype',  component: CootypeMainComponent },
  { path: 'coo',      component: CooComponent },
  { path: 'transmission',component: TransmissionlogComponent },
  { path: 'test1', component: Test1Component },
  { path: 'test2', component: Test2Component },
  { path: 'test3', component: Test3Component },
  { path: 'test4', component: Test4Component },
  { path: 'test5', component: Test5Component },
  {
    path: 'declaration',
    component: DeclarationComponent,
    children: [
      {
        path: 'decTabOpen', // child route path
        component: OpenComponent, // child route component that the router renders
      },
      {
        path: 'decTabDeclaration', // child route path
        component: DeclarationTabComponent, // child route component that the router renders
      },
      {
        path: 'decTabDeclaration2', // child route path
        component: Declaration2Component, // child route component that the router renders
      },
    ],
  },
];

@NgModule({
  // imports: [RouterModule.forRoot(routes, { useHash: true })],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
