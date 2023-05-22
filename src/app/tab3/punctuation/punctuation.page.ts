import { Component, OnInit } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-punctuation',
  templateUrl: './punctuation.page.html',
  styleUrls: ['./punctuation.page.scss'],
})
export class PunctuationPage implements OnInit {

  photos = 0;
  response = 0;

  constructor(public nav: NavController, public toast: ToastController) { }

  ngOnInit() {
  }

  publish()
  {
    this.toast.create({message:"Opinión publicada", cssClass: "pw-toast", icon: 'checkmark-circle-outline', buttons: [{icon: 'close', role: 'cancel'}]}).then(t=>t.present());
    this.nav.back();
  }

}
