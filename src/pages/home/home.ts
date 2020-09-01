import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  lat: any = ''
  lng: any = ''
  location: any = ''

  constructor(public navCtrl: NavController, private geolocation: Geolocation,) {}

  ionViewDidLoad() {
    this.fun();
  }

  getLoc() {
    this.geolocation.getCurrentPosition(
      {
        maximumAge: 1000, timeout: 5000,
        enableHighAccuracy: true
      }
    ).then((resp) => {
      console.log(resp.coords.latitude);
      console.log(resp.coords.longitude);
      this.lat = resp.coords.latitude;
      this.lng = resp.coords.longitude;
      this.location = true;
    }, er => {
      alert('Can not retrieve Location')
    }).catch((error) => {
      alert('Error getting location - ' + JSON.stringify(error))
    });
  }

  //function to get latitude and longitude for every 5 minutes
  fun() {
    setInterval(() => {
      this.getLoc();
    }, 300000)
  }



}
