import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Branch } from '../models/branch';
@Injectable()
export class BranchesService {
    public branchReference: AngularFirestoreDocument<Branch>;
    constructor(private afs: AngularFirestore){ }
    public getBranchByUid(uid: string) {
        return this.afs.doc(`branches/${uid}`).valueChanges();
    }
}