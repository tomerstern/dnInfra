import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { Test1Component } from './components/test/test1/test1.component';
import { Test2Component } from './components/test/test2/test2.component';
import { Test3Component } from './components/test/test3/test3.component';
import { Test4Component } from './components/test/test4/test4.component';
import { DetailsComponent } from './components/shipment/details/details.component';
import { GpComponent } from './components/shipment/gp/gp.component';
import { G7Component } from './components/shipment/g7/g7.component';
import { GtComponent } from './components/shipment/gt/gt.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  // // {path: '',  component: AppComponent},
  // { path: '', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'test1', component: Test1Component },
  { path: 'test2', component: Test2Component },
  { path: 'test3', component: Test3Component },
  { path: 'test4', component: Test4Component },
  { path: 'details', component: DetailsComponent },
  { path: 'gp', component: GpComponent },
  { path: 'p7', component: G7Component },
  { path: 'gt', component: GtComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
