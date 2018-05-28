import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
@IonicPage()
@Component({
  selector: 'page-workday',
  templateUrl: 'workday.html',
})
export class WorkdayPage {
  workday: string = "regular";
  public isUserLocated: boolean = false;
  public userLocationLat: number = 0;
  public userLocationLng: number = 0;
  constructor(public navCtrl: NavController,
              public geolocation: Geolocation,
              public navParams: NavParams) { }
  ionViewDidLoad() {
     /* this.geolocation.getCurrentPosition().then(
        position => {
            this.isUserLocated = true;
            this.userLocationLat = position.coords.latitude;
            this.userLocationLng = position.coords.longitude;
        },
        err => { 
            console.log("No se pudo localizar este dispositivo.")
        });*/
  }
}
