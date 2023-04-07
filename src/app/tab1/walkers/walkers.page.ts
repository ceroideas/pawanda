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
    this.toast.create({message:"No se mostrarán alertas para éste paseo", cssClass: "pw-toast", duration: 3000}).then(t=>t.present());
    this.nav.navigateRoot('tabs/tab3');
  }

}
