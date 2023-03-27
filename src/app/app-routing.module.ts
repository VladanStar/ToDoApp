import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoComponent } from './components/todo/todo.component';
import { TodoDetailsComponent } from './components/todo-details/todo-details.component';
import { EditTodoComponent } from './components/edit-todo/edit-todo.component';
import { AddTodoComponent } from './components/add-todo/add-todo.component';

const routes: Routes = [
  {path:"", component:TodoComponent},
  {path:'todo/add', component:AddTodoComponent},
  {path:"todo/:id", component: TodoDetailsComponent},
  {path: 'todo/edit/:id', component:EditTodoComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
