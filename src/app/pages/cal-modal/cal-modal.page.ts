import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CalendarComponentOptions } from 'ion2-calendar';

declare var moment: any;

@Component({
  selector: 'app-cal-modal',
  templateUrl: './cal-modal.page.html',
  styleUrls: ['./cal-modal.page.scss'],
})
export class CalModalPage implements OnInit {

  dateMulti: string[] = [];
  type: 'string'; // 'string' | 'js-date' | 'moment' | 'time' | 'object'
  optionsMulti: CalendarComponentOptions = {
    pickMode: 'multi',
    weekdays: ['L','M','X','J','V','S','D'],
    monthPickerFormat: ["Ene","Feb","Mar","Abr","May","Jun","Jul","Ago","Sep","Oct","Nov","Dic"],
    monthFormat: "MMM - YYYY"
  };

  ngOnInit() {
  }

  calendar = {
    mode: 'month',
    currentDate: new Date()
  };

  modalReady = false;

  constructor(private modalCtrl: ModalController) {
    moment.locale('es')
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.modalReady = true;
    }, 0);
  }

  save() {
    this.modalCtrl.dismiss({dates: this.dateMulti})
  }

  close() {
    this.modalCtrl.dismiss();
  }

}
