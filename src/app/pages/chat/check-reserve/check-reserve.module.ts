import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CheckReservePageRoutingModule } from './check-reserve-routing.module';

import { CheckReservePage } from './check-reserve.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CheckReservePageRoutingModule
  ],
  declarations: [CheckReservePage]
})
export class CheckReservePageModule {}
