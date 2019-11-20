import { Todo } from './../model/todo.model';
import { TodoService } from './../todo.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  todos: Array<Todo>;
  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.todoService.list().subscribe(todos => {
      this.todos = todos;
      console.log(todos);
    });
  }

}
