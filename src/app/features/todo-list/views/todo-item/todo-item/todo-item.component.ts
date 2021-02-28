import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { merge } from 'rxjs';
import { __extends } from 'tslib';
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
  form: FormGroup;

  constructor(public listService: ListService, public dialog: DialogService) {}

  ngOnInit(): void {
    this.generateForm();
  }

  generateForm(): void {
    this.form = new FormGroup({
      title: new FormControl('', Validators.required),
      body: new FormControl('', Validators.required),
      media: new FormControl(''),
      status: new FormControl(''),
      edited: new FormControl(new Date()),
      deleted: new FormControl(''),
    });
    this.form.patchValue(this.userNote);
  }

  deleteNote(): void {
    this.userNote['delete'] = true;
    this.listService.deleteNote(this.userNote.id, this.user);
  }

  changeNoteStatus() {
    if (this.userNote.status === 'Todo') {
      this.userNote.status = 'Done';
      this.form.patchValue({ status: 'Done' });
    } else {
      this.userNote.status = 'Todo';
      this.form.patchValue({ status: 'Todo' });
    }
    this.form.markAsDirty();
  }

  save(): void {
    this.dialog.setDialogMode('edit');
    this.data.emit(Object.assign(this.userNote, this.form.getRawValue()));
  }
}
