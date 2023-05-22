import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Walker4Page } from './walker4.page';

const routes: Routes = [
  {
    path: '',
    component: Walker4Page
  },
  {
    path: 'myinfo',
    loadChildren: () => import('./myinfo/myinfo.module').then( m => m.MyinfoPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Walker4PageRoutingModule {}
