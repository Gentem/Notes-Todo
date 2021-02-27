import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Note } from '../../models/note.mode';

@Injectable({
  providedIn: 'root',
})
export class ListService {
  constructor(
    private firestore: AngularFirestore,
    public afAuth: AngularFireAuth
  ) {}

  getUserNotes() {}

  addNote(data: Note) {
    this.afAuth.user.subscribe((res) => {
      console.log(res.uid);
    });
    return new Promise<any>((resolve, reject) => {
      this.firestore
        .collection('notes')
        .add(data)
        .then(
          (res) => {},
          (err) => reject(err)
        );
    });
  }
}
