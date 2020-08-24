import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Page1testComponent } from './components/page1test/page1test.component';
import { Page2testComponent } from './components/page2test/page2test.component';
import { Page3testComponent } from './components/page3test/page3test.component';


// const routes: Routes = [];

const routes: Routes = [
  { path: 'page1', component: Page1testComponent },
  { path: 'page2', component: Page2testComponent },
  { path: 'page3', component: Page3testComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
