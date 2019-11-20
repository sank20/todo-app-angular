import { Todo } from './../model/todo.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-todo-details',
  templateUrl: './todo-details.component.html',
  styleUrls: ['./todo-details.component.scss']
})
export class TodoDetailsComponent implements OnInit {
  // todoItem: Todo;
  constructor() { }
  @Input() todoItem: Todo;
  ngOnInit() {
  }
  display(todo: Todo){
    // let detailsElement = document.getElementById('details');
    // console.log(detailsElement);
    // this.todoItem = todo;
    // detailsElement.innerHTML = todo.content;
  }

}
