export enum TaskStatus {
  BACKLOG = 1,
  'TO DO',
  DOING,
  'IN REVIEW',
  DONE
}

export const TaskStatusIcon = {
  BACKLOG: 'assignment',
  'TO DO': 'assignment_ind',
  DOING: 'schedule',
  'IN REVIEW': 'done',
  DONE: 'done_all'
};

export class Task {
  id: number;
  title: string;
  description?: string;
  status: TaskStatus;
}
