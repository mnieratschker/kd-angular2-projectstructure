/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TodoRetrievalService } from './todo-retrieval.service';

describe('Service: TodoRetrieval', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TodoRetrievalService]
    });
  });

  it('should ...', inject([TodoRetrievalService], (service: TodoRetrievalService) => {
    expect(service).toBeTruthy();
  }));
});
