import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Cal2ModalPage } from './cal2-modal.page';

const routes: Routes = [
  {
    path: '',
    component: Cal2ModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Cal2ModalPageRoutingModule {}
