import { Injectable } from '@angular/core';
import {AngularFireDatabase} from "@angular/fire/compat/database";
import { Todo } from '../models/todo';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private db:AngularFireDatabase) { }

  getAll(): Observable<Todo[]> {
    return this.db
      .list<Todo>('/tasks')
      .snapshotChanges()
      .pipe(
        map((x) =>
          x.map((y: any) => ({
            id: y.payload.key,
            ...(y.payload.val() as Todo),
          }))
        )
      );
  }
  get(id: string): Observable<Todo> {
    return this.db
      .object<Todo>('/tasks/' + id)
      .snapshotChanges()
      .pipe(
        map((x: any) => ({
          id: x.payload?.key,
          ...(x.payload.val() as Todo),
        }))
      );
  }
  update(TodoId: string, Todo: Todo): void {
    this.db.object<Todo>('/tasks/' + TodoId).update(Todo);
  }
  add(Todo: Todo) {
    this.db.list('/tasks').push(Todo);
  }
  delete(todoId: any) {
    this.db.object<Todo>('/tasks/' + todoId).remove();
  }
}
