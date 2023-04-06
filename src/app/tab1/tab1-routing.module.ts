import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab1Page } from './tab1.page';

const routes: Routes = [
  {
    path: '',
    component: Tab1Page,
  },
  {
    path: 'map',
    loadChildren: () => import('./map/map.module').then( m => m.MapPageModule)
  },
  {
    path: 'date',
    loadChildren: () => import('./date/date.module').then( m => m.DatePageModule)
  },
  {
    path: 'repeat',
    loadChildren: () => import('./repeat/repeat.module').then( m => m.RepeatPageModule)
  },
  {
    path: 'walkers',
    loadChildren: () => import('./walkers/walkers.module').then( m => m.WalkersPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab1PageRoutingModule {}
