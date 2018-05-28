import { Component, OnInit } from '@angular/core';
import { NavController, Nav } from 'ionic-angular';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { WorkdayPage } from '../workday/workday';
import { AuthService } from '../../services/auth.service';
import { EventsService } from '../../services/events.service';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  private nav: Nav;
  public events;
  constructor(public navCtrl: NavController, 
              private db: AngularFirestore,
              private auth: AuthService,
              private _eventsService: EventsService,
              nav: Nav) {
    this.nav = nav;
  }
  public navigateToWorkday() {
    this.navCtrl.push(WorkdayPage);
  }
  public getEvents(){
    this.events = this._eventsService.getPromoterEvents(this.auth.authUid);
  }
}
