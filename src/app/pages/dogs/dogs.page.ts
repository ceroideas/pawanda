import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { DogService } from 'src/app/services/dog.service';

@Component({
  selector: 'app-dogs',
  templateUrl: './dogs.page.html',
  styleUrls: ['./dogs.page.scss'],
})
export class DogsPage implements OnInit {
  dogs!: Array<any>;
  constructor(public nav: NavController, private dogSvc: DogService) {}

  async ngOnInit() {
    (await this.dogSvc.getDogs()).subscribe((dogs: Array<any>) => {
      this.dogs = dogs;
      console.log(dogs);
    });
  }
}
