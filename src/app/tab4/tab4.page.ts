import { Component, OnInit } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {

  constructor(public nav: NavController, public alertCtrl: AlertController) { }

  ngOnInit() {
  }

  logout()
  {
    this.alertCtrl.create({message: "¿Quiere cerrar sesión?", buttons: [{
      text:"Si",
      handler: ()=>{
        this.nav.navigateRoot('login');
      }
    },{
      text: "No"
    }]}).then(a=>a.present());
  }

}
