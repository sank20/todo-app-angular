import { CreateTodoComponent } from './create-todo/create-todo.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodoListComponent } from './todo-list/todo-list.component';


const routes: Routes = [
  {
    path: '',
    component: TodoListComponent
  },
  {
    path: 'create',
    component: CreateTodoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
