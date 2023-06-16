import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ModalComponent } from './components/modal/modal.component';
import { TodoComponent } from './components/todo/todo.component';
import { TodoViewComponent } from './components/todo-view/todo-view.component';
import { TodoEditComponent } from './components/todo-edit/todo-edit.component';
import { TodoAddComponent } from './components/todo-add/todo-add.component';

@NgModule({
  declarations: [
    AppComponent,
    ModalComponent,
    TodoComponent,
    TodoViewComponent,
    TodoEditComponent,
    TodoAddComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
