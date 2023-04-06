import { Component, OnInit } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-support',
  templateUrl: './support.page.html',
  styleUrls: ['./support.page.scss'],
})
export class SupportPage implements OnInit {

  validations_form: FormGroup;
  validation_messages: any;
  errorMessage: string = '';
  send = null;

  constructor(public nav: NavController, private formBuilder: FormBuilder, private toast: ToastController) { }

  ngOnInit() {
    this.validation_messages = {
      'message': [
        { type: 'required', message: 'El campo mensaje es requerido' },
      ],
      'email': [
        { type: 'required', message: 'El campo email es requerido' },
      ],
    };

    this.validations_form = this.formBuilder.group({
      message: new FormControl(null, Validators.compose([
        Validators.required,
      ])),
      email: new FormControl(null, Validators.compose([
        Validators.required,
      ])),
    });
  }

  enviarSoporte(value)
  {
    this.enviar();
  }

  enviar()
  {
    this.send = 1;

    setTimeout(()=>{
      this.nav.back();
    },3000)
    // this.toast.create({message:"Se ha enviado tu mensaje al equipo de soporte, te responderemos en a brevedad posible", cssClass: "pw-toast", duration: 3000}).then(t=>t.present());
  }

}
