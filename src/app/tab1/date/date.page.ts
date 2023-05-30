import { Component, OnInit, ViewChild } from '@angular/core';
import { NavController, ModalController } from '@ionic/angular';

import { CalendarModalOptions, DayConfig, CalendarResult } from 'ion2-calendar';

import { CalModalPage } from '../../pages/cal-modal/cal-modal.page';
import { Cal2ModalPage } from '../../pages/cal2-modal/cal2-modal.page';

declare var moment: any;

@Component({
  selector: 'app-date',
  templateUrl: './date.page.html',
  styleUrls: ['./date.page.scss'],
})
export class DatePage implements OnInit {

  days = [];

  hour_from;
  hour_to;

  hours = [

    "00:00",
    "01:00",
    "02:00",
    "03:00",
    "04:00",
    "05:00",
    "06:00",
    "07:00",
    "08:00",
    "09:00",
    "10:00",
    "11:00",
    "12:00",
    "13:00",
    "14:00",
    "15:00",
    "16:00",
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
    "23:00",
    "00:00",
  ];

  repeat = "0";

  /**/

  eventSource = [];
  viewTitle: string;

  calendar = {
    mode: 'month',
    currentDate: new Date(),
  };

  // selectedDate: Date;
  fechasNull = [];

  dates = [];

  repeat_to = "-1";
  repeat_to_date;

  // @ViewChild(CalendarComponent) myCal: CalendarComponent;

  /**/

  constructor(public nav: NavController, public modalCtrl: ModalController) {
    moment.locale('es-ES')
  }

  ngOnInit() {
  }

  addDay(i)
  {
    if (this.dates.length)
    {
      this.dates = [];
    }
    let c = this.days.findIndex(x=>x==i);
    console.log(i,c);

    if (c != -1) {
      this.days.splice(c,1);
    } else{
      this.days.push(i);
    }
  }

  async openCalendar() {
    const modal = await this.modalCtrl.create({
      component: CalModalPage,
      cssClass: 'cal-modal',
      backdropDismiss: false
    });

    await modal.present();

    modal.onDidDismiss().then((result) => {
      this.days = [];

      this.dates = result.data.dates;
    });
  }

  changeOption()
  {
    if (this.repeat_to == "1") {
      this.openCalendar2();
    }
  }

  async openCalendar2() {
    const modal = await this.modalCtrl.create({
      component: Cal2ModalPage,
      cssClass: 'cal-modal',
      backdropDismiss: false
    });

    await modal.present();

    modal.onDidDismiss().then((result) => {
      if (!result.data.date) {
        this.repeat_to = "-1";
      }else{
        this.repeat_to_date = result.data.date;
      }
    });
  }

  next()
  {
    localStorage.setItem('days',JSON.stringify(this.days));
    localStorage.setItem('fechasNull',JSON.stringify(this.fechasNull));
    // localStorage.setItem('selectedDate',this.selectedDate.toString());
    localStorage.setItem('dates',JSON.stringify(this.dates));
    localStorage.setItem('hour_from',JSON.stringify(this.hour_from));
    localStorage.setItem('hour_to',JSON.stringify(this.hour_to));
    localStorage.setItem('repeat',this.repeat);
    localStorage.setItem('repeat_to',this.repeat_to);
    localStorage.setItem('repeat_to_date',this.repeat_to_date);
    this.nav.navigateForward('tabs/tab1/walkers');
  }

}
