import { Component, OnInit } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-cancel',
  templateUrl: './cancel.page.html',
  styleUrls: ['./cancel.page.scss'],
})
export class CancelPage implements OnInit {

  constructor(public nav: NavController, private toast: ToastController) { }

  ngOnInit() {
  }

  delete()
  {
    this.toast.create({message:"Has cancelado el paseo", cssClass: "pw-toast",icon: 'checkmark-circle-outline', buttons: [{icon: 'close', role: 'cancel'}]}).then(t=>t.present());
    this.nav.back();
  }

}
