import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PunctuationPage } from './punctuation.page';

const routes: Routes = [
  {
    path: '',
    component: PunctuationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PunctuationPageRoutingModule {}
