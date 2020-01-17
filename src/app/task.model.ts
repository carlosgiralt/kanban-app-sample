export enum TaskStatus {
  BACKLOG,
  TODO,
  DOING,
  DONE
}

export class Task {
  id: number;
  title: string;
  description?: string;
  status: TaskStatus;
}
