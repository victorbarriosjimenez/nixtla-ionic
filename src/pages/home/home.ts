import { Component, OnInit } from '@angular/core';
import { NavController, Nav } from 'ionic-angular';
import { AngularFirestore } from 'angularfire2/firestore';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  private nav: Nav;
  posts;
  constructor(public navCtrl: NavController, 
              private db: AngularFirestore,
              nav: Nav) {
          this.nav = nav;
    this.posts = this.db.collection('events').valueChanges();
  }
}
