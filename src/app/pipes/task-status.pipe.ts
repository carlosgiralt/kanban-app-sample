import { Pipe, PipeTransform } from '@angular/core';
import { TaskStatus, TaskStatusIcon } from '../task.model';

@Pipe({
  name: 'taskStatus'
})
export class TaskStatusPipe implements PipeTransform {

  transform(value: any, type: string = 'text'): any {
    const status = TaskStatus[value];
    const statusTypes = {
      icon: TaskStatusIcon
    };
    return type === 'text' ? status : statusTypes[type][status];
  }

}
