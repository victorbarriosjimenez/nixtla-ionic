import { Component, OnInit } from '@angular/core';
import { NavController, Nav, LoadingController } from 'ionic-angular';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { WorkdayPage } from '../workday/workday';
import { AuthService } from '../../services/auth.service';
import { EventsService } from '../../services/events.service';
import * as moment from 'moment'; 
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  private nav: Nav;
  private promoterUid: string = this.auth.authUid;
  public events;
  constructor(public navCtrl: NavController, 
              private db: AngularFirestore,
              private auth: AuthService,
              private _eventsService: EventsService,
              nav: Nav) {
    this.nav = nav;
    this.events = this.db.collection('events', ref => ref.where('promoter','==',this.auth.authUid)).valueChanges();
  }
  public navigateToWorkday() {
    this.navCtrl.push(WorkdayPage);
  }
}
