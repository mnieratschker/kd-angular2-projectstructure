import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  todos: string[];

  constructor() { }

  ngOnInit() {
    this.todos = [
      "Finish this app!",
      "Watch the rest of the presentations!",
      "???",
      "Profit (Pizza & Beer)"
    ];
  }

}
