import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Walker2PageRoutingModule } from './walker2-routing.module';

import { Walker2Page } from './walker2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Walker2PageRoutingModule
  ],
  declarations: [Walker2Page]
})
export class Walker2PageModule {}
