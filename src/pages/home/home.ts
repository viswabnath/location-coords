import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  lat:any=''
  lng:any=''
  location:any=''

  constructor(public navCtrl: NavController, private geolocation: Geolocation) {

  }

  getLoc(){
    this.geolocation.getCurrentPosition(
      {maximumAge: 1000, timeout: 5000,
       enableHighAccuracy: true }
      ).then((resp) => {
            // console.log (resp.coords.latitude);
            // console.log(resp.coords.longitude);
            // alert("r succ"+resp.coords.latitude)
            // console.log( JSON.stringify(resp.coords));
            this.lat=resp.coords.latitude;
            this.lng=resp.coords.longitude;
            this.location=true;

            // console.log(this.lat,  this.lng);
            
            },er=>{
              //alert("error getting location")
              alert('Can not retrieve Location')
            }).catch((error) => {
            //alert('Error getting location'+JSON.stringify(error));
            alert('Error getting location - '+JSON.stringify(error))
            });

    // this.geolocation.getCurrentPosition().then((resp) => {
    //   console.log(resp.coords.latitude);
    //   console.log(resp.coords.longitude);
    //  }).catch((error) => {
    //    console.log('Error getting location', error);
    //  });

  }

}
