// lib/unread-data.ts
import members from "./DataTableData";

export const unreadMembers = members.filter(
  (member) => member.name === "Ola" || member.name === "Putra"
);
