import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController, ToastController } from '@ionic/angular';
import { DogService } from '../../../services/dog.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.page.html',
  styleUrls: ['./delete.page.scss'],
})
export class DeletePage implements OnInit {
  id: number;
  constructor(
    public nav: NavController,
    private toast: ToastController,
    private route: ActivatedRoute,
    private dogSvc: DogService
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.id = params['id'];

      console.log(this.id);
    });
  }

  async delete() {
    (await this.dogSvc.deleteDog(this.id)).subscribe((res: any) => {
      this.toast
        .create({
          message: 'Mona ha sido eliminado',
          cssClass: 'pw-toast',
          icon: 'checkmark-circle-outline',
          buttons: [{ icon: 'close', role: 'cancel' }],
        })
        .then((t) => t.present());
      this.nav.back();
    });
  }
}
