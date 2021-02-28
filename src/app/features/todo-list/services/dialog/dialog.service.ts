import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DialogService {
  dialogMode = 'read';
  dialogFlag = false;
  data: any;

  constructor() {}

  setDialogMode(mode: string): void {
    this.dialogMode = mode ? 'edit' : 'create';
  }

  setDialogFlag(flag: boolean): void {
    this.dialogFlag = flag ? true : false;
  }
}
