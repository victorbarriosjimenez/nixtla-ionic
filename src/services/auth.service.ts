import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import AuthProvider = firebase.auth.AuthProvider;
import 'rxjs/add/operator/map';
@Injectable()
export class AuthService {
	private user: firebase.User;
	constructor(public afAuth: AngularFireAuth) {
		afAuth.authState.subscribe(user => {
			this.user = user;
		});
	}
	signInWithEmail(credentials) {
		return this.afAuth.auth.signInWithEmailAndPassword(credentials.email,
			 credentials.password);
	}
	getEmail() {
		return this.user && this.user.email;
	}
	signOut(): Promise<void> {
		return this.afAuth.auth.signOut();
	}
	get authenticated(): boolean {
		return this.user !== null;
	}
	get authUid(): string { 
		return this.user.uid;
	}
}