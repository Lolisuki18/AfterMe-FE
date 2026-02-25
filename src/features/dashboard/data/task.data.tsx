import type { Task } from "../interface";

export const MOCK_TASKS: Task[] = [
  {
    id: "1",
    title: "Do chores",
    time: "2:00 PM",
    priority: "gentle",
    status: "upcoming",
  },
  {
    id: "2",
    title: "Call mom",
    time: "11:00 AM",
    priority: "firm",
    status: "overdue",
  },
  {
    id: "3",
    title: "Morning walk",
    time: "7:30 AM",
    priority: "normal",
    status: "completed",
  },
  {
    id: "4",
    title: "Take morning vitamins",
    time: "8:00 AM",
    priority: "gentle",
    status: "completed",
  },
];
