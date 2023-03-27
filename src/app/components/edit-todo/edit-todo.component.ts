import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Todo } from 'src/app/models/todo';
import { TodoService } from 'src/app/services/todo.service';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-edit-todo',
  templateUrl: './edit-todo.component.html',
  styleUrls: ['./edit-todo.component.css'],
})
export class EditTodoComponent implements OnInit {
  id: any;
  todo: Todo = {
    name: '',
    status: '',
    date: new Date(),
    done: '',
    category: '',
  };
  category: any;
  constructor(
    private todoService: TodoService,
    private route: ActivatedRoute,
    private router: Router,
    private categoryService:CategoryService
  ) {}

  ngOnInit(): void {
    this.categoryService.getAll().subscribe(p=>this.category=p)
    this.id= this.route.snapshot.paramMap.get("id")
    if(this.id){
  
  
    this.todoService.get(this.id).subscribe(p => {
     this.todo = p;
     console.log(this.todo);
   });
  }
}
  updateTodo(f:NgForm) {
   let id =this.id as string;
   this.todoService.update(id, f.value);
   window.alert('Todo je editovan')
   this.router.navigate([""])
   
  }
}


