import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Todo } from '../models/todo.model';
import { ITodoService } from './todo.service.interface';

@Injectable({
  providedIn: 'root'
})
export class TodoService implements ITodoService {


  getTodos(): Observable<Todo[]> {
    return of([
        {
            id: 1,
            name: 'Homework',
            dateAdded: '2020-06-11',
            status: 'Not done'
        },
        {
            id: 2,
            name: 'Do work',
            dateAdded: '2020-06-10',
            status: 'In profress'
        },
        {
            id: 3,
            name: 'chores',
            dateAdded: '2020-06-12',
            status: 'Done'
        },
        
    ]);
  }
}
