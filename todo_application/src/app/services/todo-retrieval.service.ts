import { Injectable } from '@angular/core';

@Injectable()
export class TodoRetrievalService {

  constructor() { }

  getTodos(): string[]{
    return [
      "Finish this app!",
      "Watch the rest of the presentations!",
      "???",
      "Profit (Pizza & Beer)"
    ];
  }
}
