import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.page.html',
  styleUrls: ['./cards.page.scss'],
})
export class CardsPage implements OnInit {

  card = true;
  deleting = false;
  empty = false;

  constructor(public nav: NavController) { }

  ngOnInit() {
  }

}
