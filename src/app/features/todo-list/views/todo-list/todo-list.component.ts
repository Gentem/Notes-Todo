import { Component, OnInit } from '@angular/core';
import { Note } from '../../models/note.mode';
import { ListService } from '../../services/list-service/list.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {
  constructor(public listService: ListService) {}

  mockData: Note = {
    title: 'test title',
    body: 'test body',
    media: '',
    status: 'todo',
    created: { seconds: 1, nanoseconds: 1 },
    edited: { seconds: 1, nanoseconds: 1 },
    deleted: false,
    owner: 'Justinas Sinkuans',
  };

  userNotes: Note[] = [];

  ngOnInit() {
    this.loadNotes();
  }

  addNote() {
    this.listService.addNote(this.mockData);
  }

  loadNotes() {
    this.listService.loadNotes();
    this.listService.notes.subscribe((notes: Note) => {
      this.userNotes.push(notes);
    });
  }
}
