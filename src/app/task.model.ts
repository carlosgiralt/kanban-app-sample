export enum TaskStatus {
  BACKLOG,
  'TO DO',
  DOING,
  DONE
}

export class Task {
  id: number;
  title: string;
  description?: string;
  status: TaskStatus;
}
