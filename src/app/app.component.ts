import {Component} from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import {Task, TaskStatus} from './task.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Task board';

  workflows = ['backlog', 'to do', 'doing', 'done'];
  tasks: Task[] = [
    { id: 1, title: 'Go home', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut delectus enim harum mollitia necessitatibus porro reiciendis repellat repudiandae?', status: TaskStatus.BACKLOG },
    { id: 2, title: 'Fall asleep', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut delectus enim harum mollitia necessitatibus porro reiciendis repellat repudiandae?', status: TaskStatus.BACKLOG },
    { id: 3, title: 'Check e-mail', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut delectus enim harum mollitia necessitatibus porro reiciendis repellat repudiandae?', status: TaskStatus.BACKLOG },
    { id: 4, title: 'Walk dog', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut delectus enim harum mollitia necessitatibus porro reiciendis repellat repudiandae?', status: TaskStatus.BACKLOG },

    { id: 5, title: 'Get to work', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut delectus enim harum mollitia necessitatibus porro reiciendis repellat repudiandae?', status: TaskStatus.TODO },
    { id: 6, title: 'Pick up groceries', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut delectus enim harum mollitia necessitatibus porro reiciendis repellat repudiandae?', status: TaskStatus.TODO },

    { id: 7, title: 'Brush teeth', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut delectus enim harum mollitia necessitatibus porro reiciendis repellat repudiandae?', status: TaskStatus.DOING },
    { id: 8, title: 'Take a shower', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut delectus enim harum mollitia necessitatibus porro reiciendis repellat repudiandae?', status: TaskStatus.DOING },

    { id: 9, title: 'Get up', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut delectus enim harum mollitia necessitatibus porro reiciendis repellat repudiandae?', status: TaskStatus.DONE },
  ];

  board = {
    backlog: this.tasks.filter(task => task.status === TaskStatus.BACKLOG),
    'to do': this.tasks.filter(task => task.status === TaskStatus.TODO),
    doing: this.tasks.filter(task => task.status === TaskStatus.DOING),
    done: this.tasks.filter(task => task.status === TaskStatus.DONE)
  };

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }
}
