import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WalkersPage } from './walkers.page';

const routes: Routes = [
  {
    path: '',
    component: WalkersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WalkersPageRoutingModule {}
