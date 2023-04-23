import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CalendarComponentOptions } from 'ion2-calendar';

@Component({
  selector: 'app-cal2-modal',
  templateUrl: './cal2-modal.page.html',
  styleUrls: ['./cal2-modal.page.scss'],
})
export class Cal2ModalPage implements OnInit {

  date: string;
  type: 'string'; // 'string' | 'js-date' | 'moment' | 'time' | 'object'
  options: CalendarComponentOptions = {
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

  constructor(private modalCtrl: ModalController) { }

  ngAfterViewInit() {
    setTimeout(() => {
      this.modalReady = true;
    }, 0);
  }

  save() {
    this.modalCtrl.dismiss({date: this.date})
  }

  close() {
    this.modalCtrl.dismiss();
  }

}
