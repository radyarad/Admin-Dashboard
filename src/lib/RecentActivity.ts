// lib/recent-activity.ts

export type ActivityType = "read" | "created";

export type Activity = {
  id: string;
  type: ActivityType;
  user: string; // Nama orang (misalnya dari member)
  title: string; // Judul announcement
  date: string; // ISO date
};

export const recentActivities: Activity[] = [
  {
    id: "1",
    type: "read",
    user: "Ola",
    title: "Quarterly Townhall - Please Join!",
    date: "2025-07-17T10:00:00Z",
  },
  {
    id: "2",
    type: "read",
    user: "Radya",
    title: "SOP Update: Remote Work",
    date: "2025-07-17T09:45:00Z",
  },
  {
    id: "3",
    type: "created",
    user: "Admin",
    title: "Ada Turnamen Emel",
    date: "2025-07-17T08:00:00Z",
  },
  {
    id: "4",
    type: "read",
    user: "Putra",
    title: "Welcome Our New Interns!",
    date: "2025-07-16T17:30:00Z",
  },
];
