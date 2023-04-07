import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-walker-profile',
  templateUrl: './walker-profile.page.html',
  styleUrls: ['./walker-profile.page.scss'],
})
export class WalkerProfilePage implements OnInit {

  constructor(public nav: NavController) { }

  ngOnInit() {
  }

}
