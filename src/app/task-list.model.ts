import { Task, TaskStatus } from './task.model';

export class TaskList {
  id: number;
  status: TaskStatus;
  title: string;
  emptyListText: string;
  items: Task[] = [];

  constructor(config: { id: number, status: TaskStatus, title: string, emptyListText?: string, items?: Task[] }) {
    this.id = config.id;
    this.status = config.status;
    this.title = config.title;
    this.emptyListText = config.emptyListText || 'No tasks here';
    this.items = config.items || [];
  }
}
