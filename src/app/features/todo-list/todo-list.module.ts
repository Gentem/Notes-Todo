import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoListComponent } from './views/todo-list/todo-list.component';
import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { TodoItemComponent } from './views/todo-item/todo-item/todo-item.component';
import { CreateItemComponent } from './views/create-item/create-item/create-item.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    ReactiveFormsModule,
  ],
  declarations: [TodoItemComponent, TodoListComponent, CreateItemComponent],
})
export class TodoListModule {}
