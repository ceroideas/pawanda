import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyinfoPageRoutingModule } from './myinfo-routing.module';

import { MyinfoPage } from './myinfo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    MyinfoPageRoutingModule
  ],
  declarations: [MyinfoPage]
})
export class MyinfoPageModule {}
