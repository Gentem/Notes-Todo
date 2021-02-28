import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/core/authentication/authentication.service';
import { Note } from '../../models/note.model';
import { ListService } from '../../services/list-service/list.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {
  dialogFlag = false;

  notes: Note[];
  userId: any;

  constructor(public listService: ListService, private router: Router) {}

  ngOnInit(): void {
    this.listService.getUser();
    this.listService.userId.subscribe((id) => {
      this.userId = id;
      this.listService.getNotes(id).subscribe((data) => {
        this.notes = data.map((e) => {
          return {
            id: e.payload.doc.id,
            ...e.payload.doc.data(),
          } as Note;
        });
      });
    });
  }

  create(note: Note): void {
    this.listService.createNote(note, this.userId);
  }

  update(note: Note): void {
    this.listService.updateNote(note, this.userId);
  }

  delete(noteId: string): void {
    this.listService.deleteNote(noteId, this.userId);
  }

  setDialogMode(flag: boolean): void {
    this.dialogFlag = flag ? true : false;
  }

  logout(): void {
    this.router.navigate(['/login']);
  }
}
