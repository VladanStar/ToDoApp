import { Injectable } from '@angular/core';
import {AngularFireDatabase} from "@angular/fire/compat/database";

import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private db:AngularFireDatabase) { }

  getAll(): Observable<any> {
    return this.db
      .list<any>('/category')
      .snapshotChanges()
      .pipe(
        map((x) =>
          x.map((y: any) => ({
            id: y.payload.key,
            ...(y.payload.val() as any),
          }))
        )
      );
  }
  get(id: string): Observable<any> {
    return this.db
      .object<any>('/category/' + id)
      .snapshotChanges()
      .pipe(
        map((x: any) => ({
          id: x.payload?.key,
          ...(x.payload.val() as any),
        }))
      );
  }
  update(anyId: string, any: any): void {
    this.db.object<any>('/category/' + anyId).update(any);
  }
  add(any: any) {
    this.db.list('/category').push(any);
  }
  delete(anyId: any) {
    this.db.object<any>('/category/' + anyId).remove();
  }
}
