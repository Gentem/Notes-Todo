/* tslint:disable:no-unused-variable */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TodoItemComponent } from './todo-item.component';
import { AngularFirestore } from '@angular/fire/firestore';
import { ListService } from '../../../services/list-service/list.service';

describe('TodoItemComponent', () => {
  let component: TodoItemComponent;
  let fixture: ComponentFixture<TodoItemComponent>;
  const AngularFirestoreStub = {
    collection: 'stub',
  };
  const userNote = {
    deleted: false,
    title: 'test',
    body: 'body',
    media: '',
    created: {
      seconds: 2,
    },
    edited: {
      seconds: 2,
    },
    owner: '',
    id: 'd2dsdasdsa',
    status: 'Todo',
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TodoItemComponent],
      providers: [
        { provide: AngularFirestore, useValue: AngularFirestoreStub },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    component.userNote = userNote;
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });
});
