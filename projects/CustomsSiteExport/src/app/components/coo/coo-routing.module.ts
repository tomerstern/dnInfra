import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainCooComponent } from './main-coo/main-coo.component';

const routes: Routes = [
  { path: '', component: MainCooComponent },
  { path: 'main', component: MainCooComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class CooRoutingModule { }
