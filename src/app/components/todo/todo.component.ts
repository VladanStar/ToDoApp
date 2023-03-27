import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/services/todo.service';
import { Todo } from 'src/app/models/todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
  filteredTodo: Todo[] = [];
  todos: Todo[] = [];
  constructor(private todoService: TodoService) {}
  ngOnInit(): void {
    this.todoService.getAll().subscribe((p) => ( this.todos = p));
  }
  // filter(value: any) {
  //  if(value){
  //   this.filteredTodo = this.todos.filter(p=> p.name?.toLowerCase().includes(value.toLowerCase()))
  //  }
  //  else {
  //   this.filteredTodo = this.todos
  //  }
  // }
}
