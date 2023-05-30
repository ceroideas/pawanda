import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NavController, ToastController } from '@ionic/angular';
import { DogService } from 'src/app/services/dog.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss'],
})
export class EditPage implements OnInit {
  validations_form: FormGroup;
  validation_messages: any;
  errorMessage: string = '';
  races: any;
  id: number;
  dog: any;

  constructor(
    public nav: NavController,
    private formBuilder: FormBuilder,
    private toast: ToastController,
    private route: ActivatedRoute,
    private dogSvc: DogService
  ) {}

  async ngOnInit() {
    (await this.dogSvc.getRaces()).subscribe((res: any) => {
      this.races = res.map((res) => {
        return { name: res.name };
      });
    });

    this.route.queryParams.subscribe(async (params) => {
      this.id = params['id'];
    });

    (await this.dogSvc.getDog(this.id)).subscribe((dog: any) => {
      this.dog = dog;
      console.log(this.dog);
      this.validations_form = this.formBuilder.group({
        name: new FormControl(
          this.dog?.name,
          Validators.compose([Validators.required])
        ),
        race: new FormControl(
          this.dog?.race,
          Validators.compose([Validators.required])
        ),
        size: new FormControl(
          this.dog?.size.toString(),
          Validators.compose([Validators.required])
        ),
        comments: new FormControl(this.dog?.comments),
        pp: new FormControl(this.dog?.pp),
        photo_1: new FormControl(null),
        photo_2: new FormControl(null),
        photo_3: new FormControl(null),
      });
    });
    this.validation_messages = {
      name: [{ type: 'required', message: 'El campo nombre es requerido' }],
      race: [{ type: 'required', message: 'El campo raza es requerido' }],
      size: [{ type: 'required', message: 'El campo tamaño es requerido' }],
    };

    this.validations_form = this.formBuilder.group({
      name: new FormControl(
        this.dog?.name,
        Validators.compose([Validators.required])
      ),
      race: new FormControl(
        this.dog?.race,
        Validators.compose([Validators.required])
      ),
      size: new FormControl(
        this.dog?.race,
        Validators.compose([Validators.required])
      ),
      comments: new FormControl(this.dog?.comments),
      pp: new FormControl(this.dog?.pp),
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
      await this.dogSvc.updateDog(this.id, value)
    ).subscribe((dog: any) => {
      console.log(dog);
      this.save(dog.name);
    });
    console.log(value);
  }

  save(dog) {
    this.toast
      .create({
        message: `${dog} ha sido actualizado`,
        cssClass: 'pw-toast',
        icon: 'checkmark-circle-outline',
        buttons: [{ icon: 'close', role: 'cancel' }],
      })
      .then((t) => t.present());
    this.nav.navigateForward('dogs');
  }
}
