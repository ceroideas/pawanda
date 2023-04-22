import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConfirmReservePage } from './confirm-reserve.page';

const routes: Routes = [
  {
    path: '',
    component: ConfirmReservePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConfirmReservePageRoutingModule {}
