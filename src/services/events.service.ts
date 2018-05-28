import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import AuthProvider = firebase.auth.AuthProvider;
import 'rxjs/add/operator/map';
@Injectable()
export class AuthService {
    public eventsUserReference: any;
	constructor() {
    }
    public getPromoterEvents( ){
        
    }
}