export enum TaskStatusEnum {
    TODO="To Do",
    PENDING="Pending",
    DONE="Done"
}

export type TaskStatus = keyof typeof TaskStatusEnum;

export interface Task {
  title: string;
  difficulty: number;
  status: TaskStatus;
}
