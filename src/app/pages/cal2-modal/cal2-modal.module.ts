import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Cal2ModalPageRoutingModule } from './cal2-modal-routing.module';

import { Cal2ModalPage } from './cal2-modal.page';

import { CalendarModule } from 'ion2-calendar';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CalendarModule,
    Cal2ModalPageRoutingModule
  ],
  declarations: [Cal2ModalPage]
})
export class Cal2ModalPageModule {}
