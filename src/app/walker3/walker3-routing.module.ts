import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Walker3Page } from './walker3.page';

const routes: Routes = [
  {
    path: '',
    component: Walker3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Walker3PageRoutingModule {}
