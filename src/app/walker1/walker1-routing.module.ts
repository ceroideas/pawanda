import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Walker1Page } from './walker1.page';

const routes: Routes = [
  {
    path: '',
    component: Walker1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Walker1PageRoutingModule {}
