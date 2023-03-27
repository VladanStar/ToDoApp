import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { TodoService } from 'src/app/services/todo.service';
import { CategoryService } from 'src/app/services/category.service';


@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {
 
  category:any;
  constructor(private todoService:TodoService, 
    private router:Router,
    private categoryService:CategoryService){}
  ngOnInit(): void {
this.categoryService.getAll().subscribe(p=>this.category=p)
  }
  addTodo(f:NgForm){
      // console.log(f.value)

  this.todoService.add(f.value);

  window.alert('Todo je dodat');
  this.router.navigate(['/']);

  }
}
