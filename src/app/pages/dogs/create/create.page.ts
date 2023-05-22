import { Component, OnInit } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from '@angular/forms';
import { DogService } from 'src/app/services/dog.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})
export class CreatePage implements OnInit {
  validations_form: FormGroup;
  validation_messages: any;
  errorMessage: string = '';
  races: any;

  constructor(
    public nav: NavController,
    private formBuilder: FormBuilder,
    private toast: ToastController,
    private dogSvc: DogService,
    
  ) {}

  async ngOnInit() {
    (await this.dogSvc.getRaces()).subscribe((res: any) => {
      this.races = res.map((res) => {
        return { name: res.name };
      });
    });

    this.validation_messages = {
      name: [{ type: 'required', message: 'El campo nombre es requerido' }],
      race: [{ type: 'required', message: 'El campo raza es requerido' }],
      size: [{ type: 'required', message: 'El campo tamaño es requerido' }],
    };

    this.validations_form = this.formBuilder.group({
      name: new FormControl(null, Validators.compose([Validators.required])),
      race: new FormControl(null, Validators.compose([Validators.required])),
      size: new FormControl(null, Validators.compose([Validators.required])),
      comments: new FormControl(null),
      pp: new FormControl(null),
      photo_1: new FormControl(null),
      photo_2: new FormControl(null),
      photo_3: new FormControl(null),
    });
  }

  fileChange(event) {
    var file = event.target.files[0];
    var reader = new FileReader();
    var id = event.target.id;
    reader.onload = (event) => {
      // El texto del archivo se mostrará por consola aquí
      document.getElementById('holder_' + id).style.backgroundImage =
        "url('" + event.target.result + "')";
    };

    reader.readAsDataURL(file);
  }

  async registrarPerro(value) {

    
    const newDog = await (
      await this.dogSvc.registerDog(value)
    ).subscribe((dog: any) => {
      console.log(dog)
      this.save(dog.name);
    });
  }

  save(dog) {
    this.toast
      .create({
        message: `${dog} ha sido añadido`,
        cssClass: 'pw-toast',
        icon: 'checkmark-circle-outline',
        buttons: [{ icon: 'close', role: 'cancel' }],
      })
      .then((t) => t.present());
   this.nav.navigateForward('tabs');
  }
}
