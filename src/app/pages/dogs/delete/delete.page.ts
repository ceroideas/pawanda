import { Component, OnInit } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.page.html',
  styleUrls: ['./delete.page.scss'],
})
export class DeletePage implements OnInit {

  constructor(public nav: NavController, private toast: ToastController) { }

  ngOnInit() {
  }

  delete()
  {
    this.toast.create({message:"Mona ha sido eliminado", cssClass: "pw-toast",icon: 'checkmark-circle-outline', buttons: [{icon: 'close', role: 'cancel'}]}).then(t=>t.present());
    this.nav.back();
  }

}
