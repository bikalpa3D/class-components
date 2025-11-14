export interface ContactInfo {
  phone: string;
  office: string;
}

export interface User {
  id: string;
  name: string;
  email?: string;
  role?: string;
  skills?: string[];
  contact?: ContactInfo;
}

export interface Comment {
  id: string;
  by: string;
  message: string;
  date: string; // ISO date
}

export type TaskStatus = "completed" | "in-progress" | "pending";
export type TaskPriority = "high" | "medium" | "low";

export interface Task {
  id: string;
  title: string;
  status: TaskStatus;
  priority: TaskPriority;
  tags: string[];
  assignedTo: User[];
  comments: Comment[];
}

export type DocumentType = "pdf" | "iframe" | "image";

export interface DocumentItem {
  id: string;
  name: string;
  type: DocumentType;
  url: string;
}

export interface Milestone {
  id: string;
  title: string;
  deadline: string;
  tasks: Task[];
  documents: DocumentItem[];
}

export interface Asset {
  id: string;
  name: string;
  type: string;
  usage: number;
}

export interface ResourceInfo {
  budget: number;
  spent: number;
  assets: Asset[];
}

export interface NotificationRef {
  projectId: number;
  milestoneId?: string;
  taskId?: string;
}

export interface ProjectNotification {
  id: string;
  message: string;
  type: "task" | "comment" | "project";
  ref: NotificationRef;
  seen: boolean;
}

export type ProjectStatus =
  | "active"
  | "paused"
  | "completed"
  | "planning"
  | "on-hold";

export interface Project {
  id: number;
  name: string;
  department: string;
  owner: User;
  status: ProjectStatus;
  milestones: Milestone[];
  resources: ResourceInfo;
  notifications: ProjectNotification[];
}

export type ProjectList = Project[];
