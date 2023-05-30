import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { DogService } from 'src/app/services/dog.service';
import { EventsService } from 'src/app/services/events.service';

@Component({
  selector: 'app-dogs',
  templateUrl: './dogs.page.html',
  styleUrls: ['./dogs.page.scss'],
})
export class DogsPage implements OnInit {
  dogs!: Array<any>;
  constructor(public nav: NavController, private dogSvc: DogService, public events: EventsService) {}

  async ngOnInit() {

    this.events.subscribe('reloadDogs1',()=>{
      this.getDogs();
    });

    this.getDogs();
  }

  async getDogs() {
    (await this.dogSvc.getDogs()).subscribe((dogs: Array<any>) => {
      this.dogs = dogs;
      console.log(dogs);
    });
  }
}
