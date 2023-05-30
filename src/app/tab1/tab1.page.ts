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
import { EventsService } from 'src/app/services/events.service';
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

  selected = [];

  constructor(
    private formBuilder: FormBuilder,
    public nav: NavController,
    private route: ActivatedRoute,
    private dogSvc: DogService,
    private events: EventsService,
  ) {}

  async ngOnInit() {

    this.events.subscribe('reloadDogs',()=>{
      this.getDogs();
    });

    this.getDogs();

    this.route.params.subscribe((params) => {
      const user = params['newUser'];
      console.dir(user);
    });

  }

  async getDogs() {
    (await this.dogSvc.getDogs()).subscribe((dogs: Array<any>) => {
      this.dogs = dogs;
      console.log(dogs);
    });
  }

  registrarPaseo(value) {}

  next() {
    localStorage.setItem('dogs',JSON.stringify(this.selected));
    this.nav.navigateForward(['tabs/tab1/map']);
  }

  addRemove(id)
  {
    let d = this.selected.findIndex(x=>x == id);

    if (d === -1) {
      this.selected.push(id);
    }else{
      this.selected.splice(d,1);
    }

    console.log(this.selected);
  }
}
