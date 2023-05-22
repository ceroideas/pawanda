import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Walker3PageRoutingModule } from './walker3-routing.module';

import { Walker3Page } from './walker3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Walker3PageRoutingModule
  ],
  declarations: [Walker3Page]
})
export class Walker3PageModule {}
