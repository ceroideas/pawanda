import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from '@angular/forms';
import { NavController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  validations_form: FormGroup;
  validation_messages: any;
  errorMessage: string = '';
  type = 'password';

  constructor(
    private formBuilder: FormBuilder,
    public nav: NavController,
    private authSvc: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    this.validation_messages = {
      password: [
        { type: 'required', message: 'El campo contraseña es requerido' },
        {
          type: 'minlength',
          message: 'La contraseña debe tener al menos 7 caracteres',
        },
        {
          type: 'pattern',
          message: 'La contraseña debe contener al menos un número',
        },
      ],
      email: [
        { type: 'required', message: 'El campo email es requerido' },
        { type: 'pattern', message: 'El email debe tener un formato correcto' },
      ],
      name: [{ type: 'required', message: 'El campo nombre es requerido' }],
      phone: [{ type: 'required', message: 'El campo teléfono es requerido' }],
      policy: [
        {
          type: 'pattern',
          message: 'Es obligatrio que aceptes la política para continuar.',
        },
      ],
    };

    this.validations_form = this.formBuilder.group({
      password: new FormControl(
        null,
        Validators.compose([
          Validators.minLength(8),
          Validators.pattern('^.*(?=.{7,})((?=.*[a-z]){1}).*$'),
          Validators.required,
        ])
      ),
      email: new FormControl(
        null,
        Validators.compose([
          Validators.required,
          Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$'),
        ])
      ),
      name: new FormControl(null, Validators.compose([Validators.required])),
      phone: new FormControl(null, Validators.compose([Validators.required])),
      policy: new FormControl(
        'false',
        Validators.compose([Validators.pattern('true')])
      ),
    });
  }

  async registerUser(value) {
    const newUser = (await this.authSvc.register(value)).subscribe((res) => {
      console.log(res)
      this.router.navigate(['/start']);
     
      
    });

    
  }

  changeType() {
    if (this.type == 'password') {
      this.type = 'text';
    } else {
      this.type = 'password';
    }
  }
}
