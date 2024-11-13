export enum TaskStatusEnum {
    TODO = "TODO",
    PENDING = "PENDING",
    DONE = "DONE"
}

export type TaskStatus = keyof typeof TaskStatusEnum;

export interface Task {
  title: string;
  difficulty: number;
  status: TaskStatus;
}
