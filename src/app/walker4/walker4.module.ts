import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Walker4PageRoutingModule } from './walker4-routing.module';

import { Walker4Page } from './walker4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Walker4PageRoutingModule
  ],
  declarations: [Walker4Page]
})
export class Walker4PageModule {}
