// lib/announcement-engagement.ts
export type EngagementData = {
  memberId: string;
  read: number;
  unread: number;
};

const engagementData: EngagementData[] = [
  {
    memberId: "m5gr84i9", // Raihan
    read: 95,
    unread: 10,
  },
  {
    memberId: "3u1reuv4", // Ola
    read: 80,
    unread: 25,
  },
  {
    memberId: "derv1ws0", // Abedul
    read: 70,
    unread: 35,
  },
  {
    memberId: "5kma53ae", // Putra
    read: 60,
    unread: 45,
  },
  {
    memberId: "bhqecj4p", // Radya
    read: 90,
    unread: 15,
  },
];

export { engagementData };
