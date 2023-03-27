import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Todo } from 'src/app/models/todo';
import { TodoService } from 'src/app/services/todo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-todo-details',
  templateUrl: './todo-details.component.html',
  styleUrls: ['./todo-details.component.css'],
})
export class TodoDetailsComponent implements OnInit {
  id: any;

  todo: Todo = {};

  constructor(
    private todoService: TodoService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id) {
      this.todoService.get(this.id).subscribe((p) => {
        this.todo = p;
        console.log(this.todo);
      });
    }
  }
  deleteTodo(){
    let id = this.id as string;
    if(confirm("Da li ste sigurni?")){
      if(id){
    this.todoService.delete(this.id);
    this.router.navigate([""])
  
    }
  }
  }
}
