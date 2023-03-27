import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AngularFireModule} from "@angular/fire/compat"
import { environment } from '../environments/environment';
import { TodoComponent } from './components/todo/todo.component';
import { NavComponent } from './shared/nav/nav.component';
import { FooterComponent } from './shared/footer/footer.component';
import { TodoDetailsComponent } from './components/todo-details/todo-details.component';
import { EditTodoComponent } from './components/edit-todo/edit-todo.component';
import {FormsModule} from "@angular/forms";
import { AddTodoComponent } from './components/add-todo/add-todo.component'


@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    NavComponent,
    FooterComponent,
    TodoDetailsComponent,
    EditTodoComponent,
    AddTodoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase)
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
