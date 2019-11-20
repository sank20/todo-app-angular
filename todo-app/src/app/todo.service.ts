import { Todo } from './model/todo.model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http: HttpClient) { }

  public list(): Observable<Array<Todo>> {
    const todos$ = this.http
    .get<Array<Todo>>(environment.todoEndpoint + '/todos/');
    return todos$;
  }



}
