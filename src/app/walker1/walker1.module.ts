import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Walker1PageRoutingModule } from './walker1-routing.module';

import { Walker1Page } from './walker1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Walker1PageRoutingModule
  ],
  declarations: [Walker1Page]
})
export class Walker1PageModule {}
