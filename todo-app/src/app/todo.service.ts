import { Todo } from './model/todo.model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http: HttpClient) { }

  public list(): Observable<Array<Todo>> {
    const todos$ = this.http
    .get<Todo[]>('localhost:1337/localhost:3000/todos/');
    return todos$;
  }
}
