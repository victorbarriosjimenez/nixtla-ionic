import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
@IonicPage()
@Component({
  selector: 'page-map-details',
  templateUrl: 'map-details.html',
})
export class MapDetailsPage {
  public lat: number = 19.5015841;
  public lng: number = -99.4042516;
  public zoom = 17; 
  public name: string;
  public mlat;
  constructor(public navCtrl: NavController, public navParams: NavParams) { }
  ionViewDidLoad() { 
    this.mlat = this.navParams.get('coordinates');    
  }
}
