import { Component, OnInit } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';
import { ProfileService } from '../services/profile.service';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {

  userData!:any;

  constructor(public nav: NavController, public alertCtrl: AlertController, private profileSvc: ProfileService) { }

 async ngOnInit() {
    (await this.profileSvc.getProfile()).subscribe((res) => {this.userData = res;})
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

  enterAsWalker()
  {
    this.nav.navigateRoot('/walker');
  }

}
