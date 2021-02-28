import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Note } from '../../../models/note.model';
import { DialogService } from '../../../services/dialog/dialog.service';
import { ListService } from '../../../services/list-service/list.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss'],
})
export class TodoItemComponent implements OnInit {
  @Input() userNote: Note;
  @Input() user: string;
  @Output() data = new EventEmitter<any>();

  constructor(public listService: ListService, public dialog: DialogService) {}

  ngOnInit(): void {
    console.log(this.dialog.dialogFlag);
  }

  deleteNote(): void {
    const key = 'deleted';
    this.userNote[key] = true;
    this.listService.deleteNote(this.userNote.id, this.user);
  }

  setToCreate() {
    this.dialog.setDialogFlag(true);
    this.dialog.setDialogMode('create');
  }

  setToEdit(): void {
    this.dialog.setDialogFlag(true);
    this.dialog.setDialogMode('edit');
    this.dialog.data = this.userNote;
  }

  create(data: any): void {
    this.data.emit(data);
  }
}
