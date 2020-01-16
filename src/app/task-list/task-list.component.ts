import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {

  @Input() title = 'ItemList';
  @Input() tasks: string[] = [];
  @Output() OnDrop = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  drop(event) {
    this.OnDrop.emit(event);
  }

}
