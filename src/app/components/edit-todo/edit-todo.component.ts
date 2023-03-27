import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Todo } from 'src/app/models/todo';
import { TodoService } from 'src/app/services/todo.service';

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
  constructor(
    private todoService: TodoService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {

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
   window.alert('Igrac je editovan')
   this.router.navigate([""])
   
  }
}


