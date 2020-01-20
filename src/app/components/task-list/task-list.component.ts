import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TaskList } from '../../task-list.model';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {

  @Input() taskList: TaskList = null;
  @Input() isFirst = false;
  @Input() isLast = false;
  @Output() OnDrop = new EventEmitter();

  showCreateButton = false;

  constructor() { }

  ngOnInit() {
  }

  drop(event) {
    this.OnDrop.emit(event);
  }

}
