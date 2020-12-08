import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Page1testComponent } from './components/page1test/page1test.component';
import { Page2testComponent } from './components/page2test/page2test.component';
import { Page3testComponent } from './components/page3test/page3test.component';
import { Page4testComponent } from './components/page4test/page4test.component';
import { TabmenutestComponent } from './components/tabmenutest/tabmenutest.component';

// const routes: Routes = [];

const routes: Routes = [
  { path: 'page1', component: Page1testComponent },
  { path: 'page2', component: Page2testComponent },
  { path: 'page3', component: Page3testComponent },
  { path: 'page4', component: Page4testComponent },
  { path: 'page1new', component: Page1testComponent },
  { path: 'page2new', component: Page2testComponent },
  { path: 'page3new', component: Page3testComponent },
  { path: 'page4new', component: Page4testComponent },
  { path: 'page1old', component: Page1testComponent },
  { path: 'page2old', component: Page2testComponent },
  { path: 'page3old', component: Page3testComponent },
  { path: 'page4old', component: Page4testComponent },
  { path: 'tabmenulink4', component: Page4testComponent,  outlet: 'third' },
  // { path: 'page4', component: Page4testComponent },
//   { path: 'tabmenutest', component: TabmenutestComponent,
//     children: [
//       {
//         path: 'page4',
//         component: Page4testComponent,
//         outlet: 'router_tabmenutest'
//       }
//     ]
// },
  // { path: '', component: Page1testComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
