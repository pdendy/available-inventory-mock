import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from '../models/todo.model';
import { ITodoService } from './todo.service.interface';

@Injectable({
  providedIn: 'root'
})
export class TodoService implements ITodoService {

  constructor(private httpClient: HttpClient) { }

  getTodos() {
    return this.httpClient.get('/api/todo') as Observable<Todo[]>;
  }
}
