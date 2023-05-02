import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConfirmReservePageRoutingModule } from './confirm-reserve-routing.module';

import { ConfirmReservePage } from './confirm-reserve.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConfirmReservePageRoutingModule
  ],
  declarations: [ConfirmReservePage]
})
export class ConfirmReservePageModule {}
