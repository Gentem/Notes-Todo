/* tslint:disable:no-unused-variable */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';

import { TodoListComponent } from './todo-list.component';
import { ListService } from '../../services/list-service/list.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { User } from '../../models/user.model';

describe('TodoListComponent', () => {
  const user: User = {
    id: 'sadlksadjJ8sjJ8Jj8SISNDSANDMa',
  };
  let listServiceMock = jasmine.createSpyObj(ListService, ['getUser']);

  let component: TodoListComponent;
  let fixture: ComponentFixture<TodoListComponent>;
  const AngularFirestoreStub = {
    collection: 'stub',
  };

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [TodoListComponent],
      imports: [RouterTestingModule],
      providers: [
        { provide: ListService, useValue: listServiceMock },
        { provide: AngularFirestore, useValue: AngularFirestoreStub },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoListComponent);
    component = fixture.componentInstance;
    listServiceMock = TestBed.inject(ListService);
    fixture.detectChanges();
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  describe('Render', () => {
    it('should display logo', () => {
      const imgElement = fixture.debugElement.queryAll(By.css('img'));
      expect(imgElement.length).toBe(1);
      expect(imgElement[0].nativeElement.getAttribute('src')).toContain(
        'take-note-logo'
      );
    });
    it('should display two buttons', () => {
      const buttonElements = fixture.debugElement.queryAll(By.css('button'));
      expect(buttonElements.length).toBe(2);
      expect(buttonElements[0].nativeElement.innerHTML).toContain('Add Note');
      expect(buttonElements[1].nativeElement.innerHTML).toContain('Sign Out');
    });
  });
});
