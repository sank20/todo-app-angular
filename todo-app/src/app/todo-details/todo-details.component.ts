import { TodoService } from './../todo.service';
import { Todo } from './../model/todo.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-todo-details',
  templateUrl: './todo-details.component.html',
  styleUrls: ['./todo-details.component.scss']
})
export class TodoDetailsComponent implements OnInit {
  // todoItem: Todo;
  constructor(private todoService: TodoService) { }
  @Input() todoItem: Todo;
  ngOnInit() {
  }
  markDone(todo: Todo){
    const newStatus = !todo.isdone;
    this.todoService.updateDone(newStatus, todo.id).subscribe(todoNew => {
    todo.isdone = newStatus;
    });
  }

}
