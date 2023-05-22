import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WalkerPage } from './walker.page';

const routes: Routes = [
  {
    path: '',
    component: WalkerPage,
    children: [
      {
        path: 'walker1',
        loadChildren: () => import('../walker1/walker1.module').then(m => m.Walker1PageModule)
      },
      {
        path: 'walker2',
        loadChildren: () => import('../walker2/walker2.module').then(m => m.Walker2PageModule)
      },
      {
        path: 'walker3',
        loadChildren: () => import('../walker3/walker3.module').then(m => m.Walker3PageModule)
      },
      {
        path: 'walker4',
        loadChildren: () => import('../walker4/walker4.module').then(m => m.Walker4PageModule)
      },
      {
        path: '',
        redirectTo: '/walker/walker1',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WalkerPageRoutingModule {}
