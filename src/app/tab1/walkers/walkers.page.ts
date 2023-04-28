import { Component, OnInit } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-walkers',
  templateUrl: './walkers.page.html',
  styleUrls: ['./walkers.page.scss'],
})
export class WalkersPage implements OnInit {

  constructor(public nav: NavController, private toast: ToastController) { }

  ngOnInit() {
  }

  delete()
  {
    this.toast.create({message:"No se mostrarán alertas para este paseo", cssClass: "pw-toast",icon: 'checkmark-circle-outline', buttons: [{icon: 'close', role: 'cancel'}]}).then(t=>t.present());
    this.nav.navigateRoot('tabs/tab3');
  }

  navigateWalker()
  {
    this.toast.create({message:"Se ha guardado la alerta correctamente", cssClass: "pw-toast",icon: 'checkmark-circle-outline', buttons: [{icon: 'close', role: 'cancel'}]}).then(t=>t.present());
    this.nav.navigateRoot('tabs/tab1');
  }

}
