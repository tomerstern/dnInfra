import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CooComponent } from './coo.component';
import { GeneralComponent } from './components/tabs/general/general.component';
import { HeaderTabComponent } from './components/tabs/headertab/headertab.component';
import { CoodetailsComponent } from './components/tabs/coodetails/coodetails.component';
import { CoogoodsdetailsComponent } from './components/tabs/coogoodsdetails/coogoodsdetails.component';
import { CoosignatureComponent } from './components/tabs/coosignature/coosignature.component';
import { NonmanipulationcertificateComponent } from './components/tabs/nonmanipulationcertificate/nonmanipulationcertificate.component';


const routes: Routes = [
  {
    path: 'coo',
    component: CooComponent,
    children: [
      { path: 'general', component: GeneralComponent },
      { path: 'header', component: HeaderTabComponent },
      { path: 'details', component: CoodetailsComponent },
      { path: 'goods', component: CoogoodsdetailsComponent },
      { path: 'signature', component: CoosignatureComponent },
      { path: 'nonManipCer', component: NonmanipulationcertificateComponent }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CooRoutingModule {}
