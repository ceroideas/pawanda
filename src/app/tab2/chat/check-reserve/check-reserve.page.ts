import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-check-reserve',
  templateUrl: './check-reserve.page.html',
  styleUrls: ['./check-reserve.page.scss'],
})
export class CheckReservePage implements OnInit {

  constructor(public nav: NavController) { }

  ngOnInit() {
  }

}
