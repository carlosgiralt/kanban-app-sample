import { Component, Input, OnInit } from '@angular/core';
import { TaskStatus } from '../../task.model';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.scss']
})
export class NewTaskComponent implements OnInit {

  @Input() status: TaskStatus = TaskStatus.BACKLOG;

  addTask = false;

  constructor() { }

  ngOnInit() {
  }

}
