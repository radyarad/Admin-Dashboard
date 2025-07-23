import type { Member } from "./DataTableData";

export type Announcement = {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  author: Member;
  pinned?: boolean;
};

import members from "./DataTableData";

const announcements: Announcement[] = [
  {
    id: "a1",
    title: "Quarterly Townhall - Please Join!",
    date: "2025-07-16",
    excerpt: "We will present Q2 performance, new hires, and promotions.",
    author: members[0], // Raihan
    pinned: true,
  },
  {
    id: "a2",
    title: "Welcome Our New Interns!",
    date: "2025-07-15",
    excerpt: "Let's warmly welcome the new batch of interns.",
    author: members[4], // Radya
  },
  {
    id: "a3",
    title: "SOP Update: Remote Work",
    date: "2025-07-10",
    excerpt: "We have updated our SOP for remote work flexibility...",
    author: members[1], // Ola
    pinned: true,
  },
  {
    id: "a4",
    title: "Ada Turnamen Emel",
    date: "2025-07-15",
    excerpt:
      "Raka mau mitik mau ikut turnamen emel nya terus mau sepeg di turnamen itu...",
    author: members[3], // Putra
    pinned: true,
  },

  // Tambahan data tidak pinned (regular announcements)
  {
    id: "a5",
    title: "New Snack Bar Opened!",
    date: "2025-07-12",
    excerpt: "The new snack bar at 5th floor is now open. Enjoy!",
    author: members[2], // Abedul
  },
  {
    id: "a6",
    title: "Fire Drill This Friday",
    date: "2025-07-11",
    excerpt:
      "There will be a mandatory fire drill at 3PM. Please gather at the assembly point.",
    author: members[1], // Ola
  },
  {
    id: "a7",
    title: "Team Building Activity 🌲",
    date: "2025-07-09",
    excerpt: "Join us for a fun outdoor team-building retreat next weekend!",
    author: members[3], // Putra
  },
  {
    id: "a8",
    title: "Q3 Budget Planning",
    date: "2025-07-08",
    excerpt: "Submit all department budget requests by July 20.",
    author: members[0], // Raihan
  },
  {
    id: "a9",
    title: "Security Policy Reminder",
    date: "2025-07-07",
    excerpt:
      "Remember to lock your computers and wear your ID badges at all times.",
    author: members[2], // Abedul
  },
];

export default announcements;
