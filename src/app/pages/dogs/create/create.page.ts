import { Component, OnInit } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})
export class CreatePage implements OnInit {

  validations_form: FormGroup;
  validation_messages: any;
  errorMessage: string = '';

  constructor(public nav: NavController, private formBuilder: FormBuilder, private toast: ToastController) { }

  ngOnInit() {
    this.validation_messages = {
      'name': [
        { type: 'required', message: 'El campo nombre es requerido' },
      ],
      'race': [
        { type: 'required', message: 'El campo raza es requerido' },
      ],
      'size': [
        { type: 'required', message: 'El campo tamaño es requerido' },
      ],
    };

    this.validations_form = this.formBuilder.group({
      name: new FormControl(null, Validators.compose([
        Validators.required,
      ])),
      race: new FormControl(null, Validators.compose([
        Validators.required,
      ])),
      size: new FormControl(null, Validators.compose([
        Validators.required,
      ])),
      notes: new FormControl(null),
      image_1: new FormControl(null),
      image_2: new FormControl(null),
      image_3: new FormControl(null),
    });
  }

  fileChange(event) {
    var file = event.target.files[0];
    var reader = new FileReader();
    var id = event.target.id;
    reader.onload = (event) => {
      // El texto del archivo se mostrará por consola aquí
      document.getElementById('holder_'+id).style.backgroundImage = "url('"+event.target.result+"')";

    };

    reader.readAsDataURL(file);
  }

  registrarPerro(value)
  {
    this.save();
  }

  save()
  {
    this.toast.create({message:"Mona ha sido añadido", cssClass: "pw-toast", duration: 3000}).then(t=>t.present());
    this.nav.back();
  }

}
