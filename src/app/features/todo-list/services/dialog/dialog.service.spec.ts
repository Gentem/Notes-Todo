/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DialogService } from './dialog.service';

xdescribe('Service: Dialog', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DialogService],
    });
  });

  it('should ...', inject([DialogService], (service: DialogService) => {
    expect(service).toBeTruthy();
  }));
});
