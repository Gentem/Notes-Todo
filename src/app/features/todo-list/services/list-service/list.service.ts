import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Subject } from 'rxjs';
import { Note } from '../../models/note.model';

@Injectable({
  providedIn: 'root',
})
export class ListService {
  userId = new Subject();
  userName: string;

  constructor(
    private firestore: AngularFirestore,
    public afAuth: AngularFireAuth
  ) {}

  getUser(): void {
    this.afAuth.user.subscribe((res) => {
      this.userId.next(res.uid);
    });
  }

  getNotes(id: any): any {
    return this.firestore.collection(id).snapshotChanges();
  }

  createNote(note: Note, uid: string): any {
    return this.firestore
      .collection(uid)
      .add(note)
      .then((res) => {
        note['id'] = res.id;
        note['owner'] = uid;
        this.firestore.doc(uid + '/' + note.id).update(note);
      });
  }

  updateNote(note: Note, uid: string): void {
    console.log(note);
    this.firestore.doc(uid + '/' + note.id).update(note);
  }

  deleteNote(noteId: string, uid: string): void {
    this.firestore.doc(uid + '/' + noteId).delete();
  }
}
