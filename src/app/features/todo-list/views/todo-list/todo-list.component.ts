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
    status: 'Todo',
    created: new Date(),
    edited: new Date(),
    deleted: false,
    owner: 'Justinas Sinkuans',
  };

  ngOnInit() {
    this.listService.getUserNotes();
  }

  addNote() {
    this.listService.addNote(this.mockData);
  }
}
