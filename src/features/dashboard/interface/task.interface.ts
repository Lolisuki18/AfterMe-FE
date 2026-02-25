import type { TaskPriority, TaskStatus } from "../types";

export interface Task {
  id: string;
  title: string;
  time: string;
  priority: TaskPriority;
  status: TaskStatus;
}
