import { Component, OnInit } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-walker4',
  templateUrl: './walker4.page.html',
  styleUrls: ['./walker4.page.scss'],
})
export class Walker4Page implements OnInit {

  constructor(public nav: NavController, public alertCtrl: AlertController) { }

  ngOnInit() {
  }

  logout()
  {
    this.alertCtrl.create({message: "¿Quiere cerrar sesión?", buttons: [{
      text:"Si",
      handler: ()=>{
        this.nav.navigateRoot('start');
      }
    },{
      text: "No"
    }]}).then(a=>a.present());
  }

  enterAsOwner()
  {
    this.nav.navigateRoot('/tabs');
  }

}
