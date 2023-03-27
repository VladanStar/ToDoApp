import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {
  constructor(private todoService:TodoService, private router:Router){}
  ngOnInit(): void {

  }
  addTodo(f:NgForm){
      // console.log(f.value)

  this.todoService.add(f.value);

  window.alert('Todo je dodat');
  this.router.navigate(['/']);

  }
}
