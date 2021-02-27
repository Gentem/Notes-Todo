import { Injectable } from '@angular/core';
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
    public firestore: AngularFirestore,
    public afAuth: AngularFireAuth,
    public router: Router
  ) {}

  SignUserIn(user: User) {
    return this.afAuth
      .signInWithEmailAndPassword(user.email, user.password)
      .catch((error) => {
        window.alert(error.message);
      })
      .then((result) => {
        this.router.navigate(['home']);
      });
  }

  SignUp(user: User) {
    return this.afAuth
      .createUserWithEmailAndPassword(user.email, user.password)
      .then((result) => {
        this.addUser(user);
        this.router.navigate(['login']);
      })
      .catch((error) => {
        window.alert(error.message);
      });
  }

  addUser(user: User) {
    delete user.password;
    return new Promise<any>((resolve, reject) => {
      this.firestore
        .collection('users')
        .add(user)
        .then(
          (res) => {},
          (err) => reject(err)
        );
    });
  }
}
