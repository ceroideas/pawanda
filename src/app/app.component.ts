import { Component } from '@angular/core';
import { Geolocation } from '@awesome-cordova-plugins/geolocation/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  providers: [Geolocation]
})
export class AppComponent {
  constructor(private geolocation: Geolocation) {
    // this.geolocation.watchPosition().subscribe(data=>{
    //   console.log(data);
    //   if (localStorage.getItem('token')) {
        
    //   }else{

    //   }
    // })
    this.geolocation.getCurrentPosition().then(position=>{
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;

      localStorage.setItem('actualLatLon',JSON.stringify([lat,lon]));

      let latlng = JSON.parse(localStorage.getItem('actualLatLon'));
    });
  }
}
