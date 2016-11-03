import { Component, OnInit } from '@angular/core';

import { TodoRetrievalService } from './../services/todo-retrieval.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  todos: string[];

  constructor(private todoRetrievalService: TodoRetrievalService) {
  }

  ngOnInit() {
    this.todos = this.todoRetrievalService.getTodos();
  }
}
