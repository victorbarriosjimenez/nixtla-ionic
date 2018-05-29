import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { AngularFirestore } from 'angularfire2/firestore';
import AuthProvider = firebase.auth.AuthProvider;
import { AngularFirestoreCollection } from 'angularfire2/firestore';
import { Event } from '../models/events';
import { Observable } from 'rxjs/Observable'; 
import 'rxjs/add/operator/map';
import { AuthService } from './auth.service';
import { Workday } from '../models/workday';
@Injectable()
export class EventsService {
	public workdaysReference: AngularFirestoreCollection<Workday> = this.afs.collection('workdays');
	constructor(private afs: AngularFirestore,
				private auth: AuthService) { }
	public setNewWorkdayFromStartHour(workday: Workday){
		let uid = this.afs.createId();
		workday.uid = uid;
		return this.workdaysReference.doc(uid).set(workday);
	}
	public searchWorkdayData(queryPromoter: string,queryEvent: string,todayEvent: Date){
	 return this.afs.collection('workdays', ref => ref.where('event','==',queryEvent)
													  .where('workDayDate','==',todayEvent)
													  .where('status','==',true)
													  .limit(1))
													  .valueChanges();
	}
}