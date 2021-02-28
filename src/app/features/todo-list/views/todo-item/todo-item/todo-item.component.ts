import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/core/shared/models/user.model';
import { Note } from '../../../models/note.model';
import { ListService } from '../../../services/list-service/list.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss'],
})
export class TodoItemComponent implements OnInit {
  @Input() userNote: Note;
  @Input() user: string;

  constructor(public listService: ListService) {}

  ngOnInit() {}

  deleteNote() {
    const key = 'deleted';
    this.userNote[key] = true;
    this.listService.deleteNote(this.userNote.id, this.user);
  }
}
