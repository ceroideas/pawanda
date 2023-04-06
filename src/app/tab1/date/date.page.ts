import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-date',
  templateUrl: './date.page.html',
  styleUrls: ['./date.page.scss'],
})
export class DatePage implements OnInit {

  days = [];

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

  constructor(public nav: NavController) { }

  ngOnInit() {
  }

  addDay(i)
  {
    let c = this.days.findIndex(x=>x==i);
    console.log(i,c);

    if (c != -1) {
      this.days.splice(c,1);
    } else{
      this.days.push(i);
    }
  }

}
