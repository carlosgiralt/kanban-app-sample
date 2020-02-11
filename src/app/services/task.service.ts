import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Task, TaskStatus } from '../task.model';
import { tasksMock } from './task.mock';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  apiEndpoint = '/api/tasks';

  constructor(
    private http: HttpClient
  ) { }

  all(status?: TaskStatus) {
    return this.http.get(this.apiEndpoint);
  }

  filter(status?: TaskStatus): Observable<Task[]> {
    return of(tasksMock.filter(task => task.status === status));
  }

  create(title: string) {
    return this.http.post(this.apiEndpoint, { title });
  }

  update(task) {
    return this.http.put(`/api/tasks/${task._id}`, task);
  }
}
