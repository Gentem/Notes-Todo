import { Component, Input, OnInit } from '@angular/core';
import { Note } from '../../../models/note.mode';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss'],
})
export class TodoItemComponent implements OnInit {
  @Input() userNote: Note;

  constructor() {}

  ngOnInit() {
    console.log(this.userNote);
  }
}
