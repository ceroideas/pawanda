import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PunctuationPageRoutingModule } from './punctuation-routing.module';

import { PunctuationPage } from './punctuation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PunctuationPageRoutingModule
  ],
  declarations: [PunctuationPage]
})
export class PunctuationPageModule {}
