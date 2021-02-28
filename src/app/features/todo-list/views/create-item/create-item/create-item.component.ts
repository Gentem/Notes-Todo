import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Form, FormControl, FormGroup, Validators } from '@angular/forms';
import { DialogService } from '../../../services/dialog/dialog.service';
import { ListService } from '../../../services/list-service/list.service';

@Component({
  selector: 'app-create-item',
  templateUrl: './create-item.component.html',
  styleUrls: ['./create-item.component.scss'],
})
export class CreateItemComponent implements OnInit {
  @Output() closeFlag = new EventEmitter<boolean>();
  @Output() formData = new EventEmitter<any>();
  @Input() dialogMode: string;
  @Input() note: any;

  form: FormGroup;

  constructor(public listService: ListService, public dialog: DialogService) {}

  ngOnInit(): void {
    console.log('sdsd');
    this.generateForm();
  }

  generateForm(): void {
    this.form = new FormGroup({
      title: new FormControl('', Validators.required),
      body: new FormControl('', Validators.required),
      media: new FormControl(''),
      status: new FormControl('Todo'),
      created: new FormControl(new Date()),
      edited: new FormControl(new Date()),
      deleted: new FormControl(false),
      owner: new FormControl(''),
    });

    if (this.dialog.dialogMode === 'edit') {
      this.form.patchValue(this.dialog.data);
    }
  }

  save(e: Event): void {
    e.preventDefault();
    this.formData.emit(this.form.getRawValue());
    this.dialog.setDialogFlag(false);
  }
}
