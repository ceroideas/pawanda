import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WalkersPageRoutingModule } from './walkers-routing.module';

import { WalkersPage } from './walkers.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WalkersPageRoutingModule
  ],
  declarations: [WalkersPage]
})
export class WalkersPageModule {}
