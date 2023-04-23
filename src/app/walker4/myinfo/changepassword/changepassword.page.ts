import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { NavController, AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.page.html',
  styleUrls: ['./changepassword.page.scss'],
})
export class ChangepasswordPage implements OnInit {

  validations_form: FormGroup;
  validation_messages: any;
  errorMessage: string = '';

  constructor(public nav: NavController, public formBuilder: FormBuilder, public alertCtrl: AlertController, public toast: ToastController) { }

  ngOnInit() {
    this.validation_messages = {
      'actual_password': [
        { type: 'required', message: 'El campo contraseña actual es requerido' },
        { type: 'minlength', message: 'La contraseña debe tener al menos 7 caracteres' },
        { type: 'pattern', message: 'La contraseña debe contener al menos un número' }
      ],'password': [
        { type: 'required', message: 'El campo contraseña es requerido' },
        { type: 'minlength', message: 'La contraseña debe tener al menos 7 caracteres' },
        { type: 'pattern', message: 'La contraseña debe contener al menos un número' }
      ],
      'repeat_password': [
        { type: 'required', message: 'El campo repetir contraseña es requerido' },
        { type: 'minlength', message: 'La contraseña debe tener al menos 7 caracteres' },
        { type: 'pattern', message: 'La contraseña debe contener al menos un número' }
      ],
    };

    this.validations_form = this.formBuilder.group({
      actual_password: new FormControl(null, Validators.compose([
        Validators.minLength(8),
        Validators.pattern('\^.*(?=.{7,})((?=.*[a-z]){1}).*$'),
        Validators.required
      ])),
      password: new FormControl(null, Validators.compose([
        Validators.minLength(8),
        Validators.pattern('\^.*(?=.{7,})((?=.*[a-z]){1}).*$'),
        Validators.required
      ])),
      repeat_password: new FormControl(null, Validators.compose([
        Validators.minLength(8),
        Validators.pattern('\^.*(?=.{7,})((?=.*[a-z]){1}).*$'),
        Validators.required
      ])),
    });
  }


  changePassword(value)
  {
    this.change(value);
  }


  change(value):void
  {
    if (value.password != value.repeat_password) {
      this.alertCtrl.create({message: "La nueva contraseña y el campo repetir no coinciden", buttons: ['Ok']}).then(a=>a.present());
    }else{
      this.toast.create({message:"Tus datos se han guardado", cssClass: "pw-toast", duration: 3000}).then(t=>t.present());
      this.nav.back();
    }
  }



}
