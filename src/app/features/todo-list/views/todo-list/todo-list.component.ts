import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Note } from '../../models/note.model';
import { DialogService } from '../../services/dialog/dialog.service';
import { ListService } from '../../services/list-service/list.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit, AfterViewInit {
  notes: Note[];
  userId: any;

  constructor(
    public listService: ListService,
    private router: Router,
    public dialog: DialogService
  ) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    // this.getNoteData();
  }

  getNoteData() {
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

  save(note: Note): void {
    if (this.dialog.dialogMode === 'edit') {
      this.update(note);
    } else {
      this.create(note);
    }
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

  logout(): void {
    this.router.navigate(['/login']);
  }

  openCreate(): void {
    this.dialog.setDialogFlag(true);
  }
}
