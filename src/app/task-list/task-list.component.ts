import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Task} from '../task.model';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {

  @Input() title = 'ItemList';
  @Input() tasks: Task[] = [];
  @Output() OnDrop = new EventEmitter();

  showCreateButton = false;

  constructor() { }

  ngOnInit() {
  }

  drop(event) {
    this.OnDrop.emit(event);
  }

}
