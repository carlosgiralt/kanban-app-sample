import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component } from '@angular/core';
import { tap } from 'rxjs/operators';
import { TaskService } from './services/task.service';
import { TaskList } from './task-list.model';
import { Task, TaskStatus } from './task.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Task board';

  taskLists: TaskList[] = [
    new TaskList({ id: 1, title: 'Backlog', status: TaskStatus.BACKLOG }),
    new TaskList({ id: 2, title: 'To Do', status: TaskStatus['TO DO'] }),
    new TaskList({ id: 3, title: 'Doing', status: TaskStatus.DOING }),
    new TaskList({ id: 4, title: 'In Review', status: TaskStatus['IN REVIEW'] }),
    new TaskList({ id: 5, title: 'Done', status: TaskStatus.DONE }),
  ];

  constructor(private taskService: TaskService) {
    taskService.all().subscribe(tasks => {
      this.taskLists.map(taskList => {
        taskList.items = tasks.filter(task => taskList.status === task.status);
      });
    });
  }



  drop(event: CdkDragDrop<Task[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
      const newStatus = +event.container.id.replace('cdk-drop-list-', '');
      const task = {...event.container.data[event.currentIndex]};
      task.status = newStatus;
      event.container.data[event.currentIndex] = task;
    }
  }
}
