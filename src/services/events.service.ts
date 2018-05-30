import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import AuthProvider = firebase.auth.AuthProvider;
import { AngularFirestoreCollection } from 'angularfire2/firestore';
import { Event } from '../models/events';
import { Observable } from 'rxjs/Observable'; 
import 'rxjs/add/operator/map';
import { AuthService } from './auth.service';
import { Workday } from '../models/workday';
import { query } from '@angular/core/src/animation/dsl';
import { Branch } from '../models/branch';
@Injectable()
export class EventsService {
	public workdaysReference: AngularFirestoreCollection<Workday> = this.afs.collection('workdays');
	public calendarEventsRef: AngularFirestoreCollection<any> =  this.afs.collection('calendar_events');
	public branchRef: AngularFirestoreDocument<Branch>;
	public branch: string;
	public calendarEventModel = {};
	constructor(private afs: AngularFirestore,
				private auth: AuthService) { }
	public getBranchData(uid: string){
		return this.afs.doc(`branches/${uid}`).valueChanges();
	}
	public setNewWorkdayFromStartHour(workday: Workday){
		let uid = this.afs.createId();
		workday.uid = uid;
		return this.workdaysReference.doc(uid).set(workday);
	}
	public completeWorkDayFromEndHour(workday: Workday) {
		return this.workdaysReference
				.doc(workday.uid)
				.update(workday)
				.then(succ =>{
					this.setNewEventCalendar(workday);
				});
	}
	public searchWorkdayData(queryPromoter: string ,todayEvent: Date){
		return this.afs.collection('workdays', ref => ref.where('promoter','==',queryPromoter)
													  .where('workDayDate','==',todayEvent)
													  .where('hasCheckedStartHour','==',true)
													  .limit(1))
													  .valueChanges();
	}
	public setNewEventCalendar(workday: Workday){
	    this.getBranchData(workday.branch)
			.subscribe((branch: Branch) => {
				this.branch = branch.name
				let calendarEventModel = { 
					start: workday.startCheckTime,
					end: workday.endHourCheckTime,
					title: this.branch
				}
				this.calendarEventsRef.add(calendarEventModel);
			});
		
		}		
}