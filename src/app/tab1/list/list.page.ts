import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@awesome-cordova-plugins/geolocation/ngx';
import { NavController } from '@ionic/angular';

declare var google:any;

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  constructor(public geolocation: Geolocation, public nav: NavController) { }

  viewMap = false;

  changeMap()
  {
    this.viewMap = true;

    setTimeout(()=>{

      this.initMap();
      // this.geocodeLatLng();

    },10)
  }

  changeList()
  {
    this.viewMap = false;
  }

  lat;
  lon;

  geocoder;
  map;
  infowindow;
  latlng;

  address;

  marker;

  showDetail = false;

  ngOnInit() {
    this.geolocation.getCurrentPosition().then((resp) => {
     this.lat = resp.coords.latitude;
     this.lon = resp.coords.longitude;


     this.geocoder = new google.maps.Geocoder();

     this.latlng = {
        lat: parseFloat(this.lat),
        lng: parseFloat(this.lon),
      };

    }).catch((error) => {
      console.log('Error getting location', error);
    });
  }

  markers = [];

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

    this.markers.push(new google.maps.Marker({
      icon: 'assets/marker.svg', position: {lat: 8.100558254055416, lng: -63.539610623599714}, map}));
    this.markers.push(new google.maps.Marker({
      icon: 'assets/marker.svg', position: {lat: 8.061383202659886, lng: -63.52742266845539}, map}));
    this.markers.push(new google.maps.Marker({
      icon: 'assets/marker.svg', position: {lat: 8.076084915431974, lng: -63.51841044878469}, map}));
    this.markers.push(new google.maps.Marker({
      icon: 'assets/marker.svg', position: {lat: 8.053989653801594, lng: -63.5446746427327}, map}));

    this.markers.push(new google.maps.Marker({
      icon: 'assets/marker.svg', position: {lat: 40.14124579898364, lng: -3.976809583952985}, map}));
    this.markers.push(new google.maps.Marker({
      icon: 'assets/marker.svg', position: {lat: 41.1084834327353, lng: -2.988040052702985}, map}));
    this.markers.push(new google.maps.Marker({
      icon: 'assets/marker.svg', position: {lat: 39.26218908470364, lng: -2.328860365202985}, map}));
    this.markers.push(new google.maps.Marker({
      icon: 'assets/marker.svg', position: {lat: 39.466041721357875, lng: -5.2951687913149215}, map}));

    for (let i of this.markers)
    {
      google.maps.event.addListener(i,'click',(event)=> {
        this.showDetail = true;
      });
    }

    // google.maps.event.addListener(this.marker,'dragend',(event)=> {
    //   console.log(event.latLng.lat(),event.latLng.lng());
    // });

    // console.log(this.markers);

    // (document.getElementById("submit") as HTMLElement).addEventListener(
    //   "click",
    //   () => {
    //     this.geocodeLatLng();
    //   }
    // );
  }


  // geocodeLatLng() {
    
  //   this.geocoder
  //   .geocode({ location: this.latlng })
  //   .then((response) => {
  //     if (response.results[0]) {
  //       // this.map.setZoom(11);
  //       const marker = new google.maps.Marker({
  //         position: this.latlng,
  //         map: this.map,
  //       });

  //       this.address = response.results[0].formatted_address

  //     } else {
  //       window.alert("No results found");
  //     }
  //   })
  //   .catch((e) => window.alert("Geocoder failed due to: " + e));
  // }


  viewProfile()
  {
    this.nav.navigateForward('/walker-profile');
  }

}
