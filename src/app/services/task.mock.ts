import { TaskStatus } from '../task.model';

export const tasksMock = [
  {id: 1, title: 'Go home', description: '', status: TaskStatus.BACKLOG},
  {id: 2, title: 'Fall asleep', description: '', status: TaskStatus.BACKLOG},
  {id: 3, title: 'Check e-mail', description: '', status: TaskStatus.BACKLOG},
  {id: 4, title: 'Walk dog', description: '', status: TaskStatus.BACKLOG},

  {id: 5, title: 'Get to work', description: '', status: TaskStatus['TO DO']},
  {id: 6, title: 'Pick up groceries', description: '', status: TaskStatus['TO DO']},

  {id: 7, title: 'Brush teeth', description: '', status: TaskStatus.DOING},
  {id: 8, title: 'Take a shower', description: '', status: TaskStatus.DOING},

  {id: 9, title: 'Get up', description: '', status: TaskStatus.DONE},
  {id: 10, title: 'Get up', description: '', status: TaskStatus['IN REVIEW']},
];
