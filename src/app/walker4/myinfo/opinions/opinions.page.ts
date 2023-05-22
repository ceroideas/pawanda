import { Component, OnInit } from '@angular/core';
import { NavController, AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-opinions',
  templateUrl: './opinions.page.html',
  styleUrls: ['./opinions.page.scss'],
})
export class OpinionsPage implements OnInit {

  constructor(public nav: NavController) { }

  ngOnInit() {
  }

}
