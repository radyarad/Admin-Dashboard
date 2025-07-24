// lib/group-data.ts

import members from "./DataTableData";

export type GroupStatus = "active" | "inactive";

export type Group = {
  name: "Direksi" | "VP" | "Officer" | "Staff" | "Intern";
  status: GroupStatus;
  memberCount: number;
};

const groupList: Group[] = [
  {
    name: "Direksi",
    status: "active",
    memberCount: members.filter((m) => m.position === "Direksi").length,
  },
  {
    name: "VP",
    status: "active",
    memberCount: members.filter((m) => m.position === "VP").length,
  },
  {
    name: "Officer",
    status: "active",
    memberCount: members.filter((m) => m.position === "Officer").length,
  },
  {
    name: "Staff",
    status: "active",
    memberCount: members.filter((m) => m.position === "Staff").length,
  },
  {
    name: "Intern",
    status: "inactive",
    memberCount: members.filter((m) => m.position === "Intern").length,
  },
];

export default groupList;
