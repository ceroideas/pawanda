import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CheckReservePage } from './check-reserve.page';

const routes: Routes = [
  {
    path: '',
    component: CheckReservePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CheckReservePageRoutingModule {}
