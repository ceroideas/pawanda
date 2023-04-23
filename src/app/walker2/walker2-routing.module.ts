import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Walker2Page } from './walker2.page';

const routes: Routes = [
  {
    path: '',
    component: Walker2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Walker2PageRoutingModule {}
