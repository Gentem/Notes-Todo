import { Injectable, NgZone } from '@angular/core';
import { User } from '../shared/models/user.model';
import { AngularFireAuth } from '@angular/fire/auth';
import {
  AngularFirestore,
  AngularFirestoreDocument,
} from '@angular/fire/firestore';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  userData: any;
  constructor(
    public afs: AngularFirestore,
    public afAuth: AngularFireAuth,
    public router: Router,
    public ngZone: NgZone
  ) {}

  SignUserIn(user: User) {
    return this.afAuth
      .signInWithEmailAndPassword(user.email, user.password)
      .catch((error) => {
        window.alert(error.message);
      })
      .then((result) => {
        this.ngZone.run(() => {
          this.router.navigate(['home']);
        });
      });
  }

  SignUp(user: User) {
    return this.afAuth
      .createUserWithEmailAndPassword(user.email, user.password)
      .then((result) => {
        this.ngZone.run(() => {
          this.router.navigate(['todo-list']);
        });
      })
      .catch((error) => {
        window.alert(error.message);
      });
  }

  SetUserData(user) {
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(
      `users/${user.uid}`
    );
    const userData: User = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      emailVerified: user.emailVerified,
      password: user.password,
    };
    return userRef.set(userData, {
      merge: true,
    });
  }
}
