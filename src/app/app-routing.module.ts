import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoComponent } from './components/todo/todo.component';
import { TodoDetailsComponent } from './components/todo-details/todo-details.component';

const routes: Routes = [
  {path:"", component:TodoComponent},
  {path:"todo/:id", component: TodoDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
