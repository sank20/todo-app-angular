import { TodoDetailsComponent } from './../todo-details/todo-details.component';
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
  selectedTodo: Todo;
  detailsComponent: TodoDetailsComponent;
  constructor(private todoService: TodoService) {
    this.detailsComponent = new TodoDetailsComponent();
  }

  ngOnInit() {
    this.todoService.list().subscribe(todos => {
      this.todos = todos;
      console.log(todos);
    });

    let todoItems = document.getElementsByClassName('todo-item');
  }
  displayDetails(todo: Todo) {
    console.log(todo);
    console.log("clicked");
    // this.detailsComponent.display(todo);
    this.selectedTodo= todo;
  }


}
