import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { NavController } from '@ionic/angular';

declare var google:any;

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  validations_form: FormGroup;
  validation_messages: any;
  errorMessage: string = '';

  constructor(private formBuilder: FormBuilder, public nav: NavController) {}

  ngOnInit()
  {
    this.validation_messages = {
      'address': [
        { type: 'required', message: 'El campo ubicación es requerido' },
      ],
      'phone': [
        { type: 'required', message: 'El campo teléfono es requerido' },
      ],
      'photo': [
        { type: 'required', message: 'El campo solicitar foto es requerido' },
      ],
    };

    this.validations_form = this.formBuilder.group({
      address: new FormControl(null, Validators.compose([
        Validators.required,
      ])),
      phone: new FormControl(null, Validators.compose([
        Validators.required,
      ])),
      photo: new FormControl(null, Validators.compose([
        Validators.required,
      ])),

      notes: new FormControl(null),
    });
  }

  registrarPaseo(value)
  {

  }

  next()
  {
    this.nav.navigateForward(['tabs/tab1/map']);
  }
}
