import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DeclarationComponent } from './components/tabs/declaration/declaration.component';
import { Declaration2Component } from './components/tabs/declaration2/declaration2.component';
import { OpenComponent } from './components/tabs/open/open.component';

const routes: Routes = [
  {path: 'decTabOpen', component: OpenComponent },
  {path: 'decTabDeclaration', component: DeclarationComponent },
  {path: 'decTabDeclaration2', component: Declaration2Component }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DeclarationRoutingModule { }
