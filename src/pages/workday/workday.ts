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
  public hasCheckedStartHour = true;
  public hasCheckedEndHour = true;
  public promoter: string;
  public userLocationLat: number = 0;
  public userLocationLng: number = 0;
  public branchLocation;
  constructor(public navCtrl: NavController,
              public geolocation: Geolocation,
              public navParams: NavParams) { }
  ionViewDidLoad() { 
    this.promoter = this.navParams.get('promoter');
    this.branchLocation = this.navParams.get('coordinates');
  }
  public getLocation(): void {
    this.geolocation.getCurrentPosition().then(
      position => {
          this.isUserLocated = true;
          this.userLocationLat = position.coords.latitude;
          this.userLocationLng = position.coords.longitude;
      },
      err => { 
          console.log("No se pudo localizar este dispositivo.")
      });
  }
  public compareLocationDistanceFromEvent() {
    var R = 6378137; 
    var dLat = this.rad(this.userLocationLat - this.branchLocation.lat)
    var dLong = this.rad(this.userLocationLng - this.branchLocation.lng)
    var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
         Math.cos(this.rad(this.branchLocation.lat)) * Math.cos(this.rad(this.userLocationLat)) *
      Math.sin(dLong / 2) * Math.sin(dLong / 2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var d = R * c;
    return d/1000; 
  }
  private rad(x): number {
    return x * Math.PI / 180;
  }
  public checkStartHour(){
    console.log("Hola");
  }
  public checkEndHour(){
    console.log("Bai");
  }

}
