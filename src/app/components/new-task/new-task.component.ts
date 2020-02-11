import { Component, Input, OnInit } from '@angular/core';
import { TaskStatus } from '../../task.model';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.scss']
})
export class NewTaskComponent implements OnInit {

  @Input() status: TaskStatus = TaskStatus.BACKLOG;

  addTask = false;

  constructor(private taskService: TaskService) { }

  ngOnInit() {
  }

  save(event) {
    this.taskService.create(event).subscribe(task => console.log('new', task));
  }

}
