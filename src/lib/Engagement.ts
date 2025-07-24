// lib/announcement-engagement.ts
export type EngagementData = {
  memberId: string;
  read: number;
  unread: number;
};

const engagementData: EngagementData[] = [
  {
    memberId: "m1", // Raihan
    read: 95,
    unread: 10,
  },
  {
    memberId: "m10", // Ola
    read: 80,
    unread: 25,
  },
  {
    memberId: "m6", // Abedul
    read: 70,
    unread: 35,
  },
  {
    memberId: "m15", // Putra
    read: 60,
    unread: 45,
  },
  {
    memberId: "m3", // Radya
    read: 90,
    unread: 15,
  },
];

export { engagementData };
