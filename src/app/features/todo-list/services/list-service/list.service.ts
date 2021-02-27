import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Subject } from 'rxjs';
import { Note } from '../../models/note.mode';

@Injectable({
  providedIn: 'root',
})
export class ListService {
  notes = new Subject();

  constructor(
    private firestore: AngularFirestore,
    public afAuth: AngularFireAuth
  ) {}

  addNote(data: Note) {
    let userId: string;
    this.afAuth.user.subscribe((res) => {
      userId = res.uid;
      return new Promise<any>((resolve, reject) => {
        this.firestore
          .collection(userId)
          .add(data)
          .then(
            (res) => {},
            (err) => reject(err)
          );
      });
    });
  }

  loadNotes() {
    let userId: string;
    this.afAuth.user.subscribe((res) => {
      userId = res.uid;
      this.firestore
        .collection(userId)
        .get()
        .subscribe((res) => {
          res.docs.forEach((doc) => {
            this.notes.next(doc.data());
          });
        });
    });
  }
}
