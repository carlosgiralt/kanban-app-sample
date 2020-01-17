import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Task, TaskStatus } from './task.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Task board';

  workflows = ['backlog', 'to do', 'doing', 'done'];
  tasks: Task[] = [
    {id: 1, title: 'Go home', description: '', status: TaskStatus.BACKLOG},
    {id: 2, title: 'Fall asleep', description: '', status: TaskStatus.BACKLOG},
    {id: 3, title: 'Check e-mail', description: '', status: TaskStatus.BACKLOG},
    {id: 4, title: 'Walk dog', description: '', status: TaskStatus.BACKLOG},

    {id: 5, title: 'Get to work', description: '', status: TaskStatus['TO DO']},
    {id: 6, title: 'Pick up groceries', description: '', status: TaskStatus['TO DO']},

    {id: 7, title: 'Brush teeth', description: '', status: TaskStatus.DOING},
    {id: 8, title: 'Take a shower', description: '', status: TaskStatus.DOING},

    {id: 9, title: 'Get up', description: '', status: TaskStatus.DONE},
    {id: 10, title: 'Get up', description: '', status: TaskStatus['IN REVIEW']},
  ];

  board = {
    backlog: this.tasks.filter(task => task.status === TaskStatus.BACKLOG),
    'to do': this.tasks.filter(task => task.status === TaskStatus['TO DO']),
    doing: this.tasks.filter(task => task.status === TaskStatus.DOING),
    done: this.tasks.filter(
      task => [TaskStatus['IN REVIEW'], TaskStatus.DONE].find(status => status === task.status)
    )
  };

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
