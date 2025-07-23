// lib/announcement-categories.ts
export const announcementCategories = [
  { label: "All Announcement", slug: "all" },
  { label: "General", slug: "general" },
  { label: "New Hire", slug: "new-hire" },
  { label: "SOP Updates", slug: "sop-updates" },
  { label: "Policy Updates", slug: "policy-updates" },
  { label: "Promotion", slug: "promotion" },
  { label: "Transfer", slug: "transfer" },
  { label: "Training", slug: "training" },
  { label: "Special", slug: "special" },
];

export type AnnCategory = {
  label: string;
  slug: string;
};
