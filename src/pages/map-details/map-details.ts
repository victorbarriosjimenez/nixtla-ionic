import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
@IonicPage()
@Component({
  selector: 'page-map-details',
  templateUrl: 'map-details.html',
})
export class MapDetailsPage {
  public origin: any;
  public markerLocation: any;
	public zoom: number;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.markerLocation =  this.navParams.get('coordinates');
    this.origin = {
			lat: 19.5015841,
			lng: -99.4042516
		};
		this.zoom = 8;
  }
  ionViewDidLoad() { }
}
