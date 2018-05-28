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
@Injectable()
export class EventsService {
	constructor(private afs: AngularFirestore,
				private auth: AuthService) { }
}