import { Component, Input, OnInit } from '@angular/core';
import { Task, TaskStatus } from '../../task.model';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss']
})
export class TaskItemComponent implements OnInit {

  @Input() task: Task = null;

  showMarkAsDone = false;

  constructor() { }

  ngOnInit() {
  }

  markAsDone() {
    const status = this.task.status;
    this.task.status = this.InReview ? TaskStatus.DONE : status;
    this.showMarkAsDone = false;
  }

  get InReview() {
    return this.task.status === TaskStatus['IN REVIEW'];
  }
}
