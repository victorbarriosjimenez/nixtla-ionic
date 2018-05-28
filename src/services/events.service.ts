import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { AngularFirestore } from 'angularfire2/firestore';
import AuthProvider = firebase.auth.AuthProvider;
import { AngularFirestoreCollection } from 'angularfire2/firestore';
import { Event } from '../models/events';
import 'rxjs/add/operator/map';
@Injectable()
export class EventsService {
    public eventsUserReference;
	constructor(private afs: AngularFirestore) { }
    public getPromoterEvents(uid: string){
        this.eventsUserReference = this.afs.collection('events', ref => ref.where('promoter','==',uid)).valueChanges();
    }
}