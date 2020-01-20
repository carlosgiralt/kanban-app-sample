import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Task, TaskStatus } from '../task.model';
import { tasksMock } from './task.mock';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }

  all(status?: TaskStatus): Observable<Task[]> {
    return status ? this.filter(status) : of(tasksMock);
  }

  filter(status?: TaskStatus): Observable<Task[]> {
    return of(tasksMock.filter(task => task.status === status));
  }
}
