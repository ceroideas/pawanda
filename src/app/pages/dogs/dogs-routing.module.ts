import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DogsPage } from './dogs.page';

const routes: Routes = [
  {
    path: '',
    component: DogsPage
  },
  {
    path: 'create',
    loadChildren: () => import('./create/create.module').then( m => m.CreatePageModule)
  },
  {
    path: 'delete',
    loadChildren: () => import('./delete/delete.module').then( m => m.DeletePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DogsPageRoutingModule {}
