import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@awesome-cordova-plugins/geolocation/ngx';
import { NavController } from '@ionic/angular';

declare var google:any;

@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
})
export class MapPage implements OnInit {

  lat;
  lon;

  geocoder;
  map;
  infowindow;
  latlng;

  address;

  marker;

  constructor(public geolocation: Geolocation, public nav: NavController) { }

  ngOnInit() {
    console.log('nddno')
    this.geolocation.getCurrentPosition().then((resp) => {
     this.lat = resp.coords.latitude;
     this.lon = resp.coords.longitude;


     this.geocoder = new google.maps.Geocoder();

     this.latlng = {
        lat: parseFloat(this.lat),
        lng: parseFloat(this.lon),
      };

     this.initMap();
     this.geocodeLatLng();

    }).catch((error) => {
      console.log('Error getting location', error);
    });
  }

  initMap(): void {
    const map = new google.maps.Map(
      document.getElementById("map") as HTMLElement,
      {
        zoom: 14,
        center: this.latlng,
        zoomControl: false,
        mapTypeControl: false,
        scaleControl: false,
        streetViewControl: false,
        rotateControl: false,
        fullscreenControl: false
      }
    );
    const geocoder = new google.maps.Geocoder();
    const infowindow = new google.maps.InfoWindow();

    this.marker = new google.maps.Marker({
      position: this.latlng,
      map,
      title: "Mi ubicación",
      draggable: true,
    });

    google.maps.event.addListener(this.marker,'dragend',(event)=> {
      this.lat = event.latLng.lat();
      this.lon = event.latLng.lng();

      this.latlng = {
        lat: parseFloat(this.lat),
        lng: parseFloat(this.lon),
      };

      this.geocodeLatLng();
    });

    // (document.getElementById("submit") as HTMLElement).addEventListener(
    //   "click",
    //   () => {
    //     this.geocodeLatLng();
    //   }
    // );
  }


  geocodeLatLng() {
    
    this.geocoder
    .geocode({ location: this.latlng })
    .then((response) => {
      if (response.results[0]) {
        // this.map.setZoom(11);
        const marker = new google.maps.Marker({
          position: this.latlng,
          map: this.map,
        });

        this.address = response.results[0].formatted_address

      } else {
        window.alert("No results found");
      }
    })
    .catch((e) => window.alert("Geocoder failed due to: " + e));
  }

  next()
  {
    localStorage.setItem('latlng',JSON.stringify(this.latlng));
    localStorage.setItem('address',this.address);
    this.nav.navigateForward('tabs/tab1/date');
  }

}
