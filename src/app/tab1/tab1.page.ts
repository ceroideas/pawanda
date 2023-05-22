import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from '@angular/forms';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { DogService } from '../services/dog.service';
declare var google: any;

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page implements OnInit {
  validations_form: FormGroup;
  validation_messages: any;
  errorMessage: string = '';
  dogs!: Array<any>;

  constructor(
    private formBuilder: FormBuilder,
    public nav: NavController,
    private route: ActivatedRoute,
    private dogSvc: DogService
  ) {}

  async ngOnInit() {
    (await this.dogSvc.getDogs()).subscribe((dogs: Array<any>) => {
      this.dogs = dogs;
      console.log(dogs);
    });

    this.route.params.subscribe((params) => {
      const user = params['newUser'];
      console.dir(user);
    });

  }

  registrarPaseo(value) {}

  next() {
    this.nav.navigateForward(['tabs/tab1/map']);
  }
}
