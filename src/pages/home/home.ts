import { Component, OnInit } from '@angular/core';
import { NavController, Nav } from 'ionic-angular';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  private nav: Nav;
  public events: Observable<any>;
  constructor(public navCtrl: NavController, 
              private db: AngularFirestore,
              nav: Nav) {
    this.nav = nav;
    this.events = this.db.collection('events').valueChanges();
  }
}
