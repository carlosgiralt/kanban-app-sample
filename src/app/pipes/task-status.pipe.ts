import { Pipe, PipeTransform } from '@angular/core';
import { TaskStatus } from '../task.model';

@Pipe({
  name: 'taskStatus'
})
export class TaskStatusPipe implements PipeTransform {

  transform(value: any): any {
    return TaskStatus[value];
  }

}
