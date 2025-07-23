// lib/file-stats.ts

import uploadedFiles from "./DataFile";

// Total semua file
const total = uploadedFiles.length;

// File yang diupload di bulan ini
const thisMonth = uploadedFiles.filter((file) => {
  const uploadDate = new Date(file.uploadedAt);
  const now = new Date();
  return (
    uploadDate.getMonth() === now.getMonth() &&
    uploadDate.getFullYear() === now.getFullYear()
  );
}).length;

// File yang dibagikan (sharedWith tidak kosong)
const shared = uploadedFiles.filter(
  (file) => file.sharedWith.length > 0
).length;

// File yang tidak dibagikan
const unshared = uploadedFiles.filter(
  (file) => file.sharedWith.length === 0
).length;

export const fileStats = {
  total,
  thisMonth,
  shared,
  unshared,
};
