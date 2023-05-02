import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChatPage } from './chat.page';

const routes: Routes = [
  {
    path: '',
    component: ChatPage
  },
  {
    path: 'check-reserve',
    loadChildren: () => import('./check-reserve/check-reserve.module').then( m => m.CheckReservePageModule)
  },
  {
    path: 'confirm-reserve',
    loadChildren: () => import('./confirm-reserve/confirm-reserve.module').then( m => m.ConfirmReservePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChatPageRoutingModule {}
