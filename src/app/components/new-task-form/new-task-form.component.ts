import { Component, ElementRef, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-new-task-form',
  templateUrl: './new-task-form.component.html',
  styleUrls: ['./new-task-form.component.scss']
})
export class NewTaskFormComponent implements OnInit {
  @Input() show = false;
  @Output() OnClickOut = new EventEmitter();




  constructor(private eRef: ElementRef) {
  }

  ngOnInit() {
  }

}
