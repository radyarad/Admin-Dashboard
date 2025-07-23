import type { Member } from "./DataTableData";

export type FileCategory = "Dokumen" | "Gambar" | "Laporan" | "Lainnya";

export type UploadedFile = {
  id: string;
  name: string;
  size: string;
  category: FileCategory;
  sharedWith: Member[];
  uploadedAt: string;
  type: "pdf" | "jpg" | "xlsx" | "docx" | "other";
  date: string;
};

import members from "./DataTableData";

const uploadedFiles: UploadedFile[] = [
  {
    id: "f1",
    name: "Laporan Keuangan Q1.pdf",
    size: "1.2 MB",
    category: "Laporan",
    sharedWith: [members[1], members[3]],
    uploadedAt: "2025-07-10T10:30:00Z",
    type: "pdf",
    date: "2025-07-15",
  },
  {
    id: "f2",
    name: "Struktur Organisasi.jpg",
    size: "620 KB",
    category: "Gambar",
    sharedWith: [],
    uploadedAt: "2025-07-12T14:50:00Z",
    type: "jpg",
    date: "2025-07-15",
  },
  {
    id: "f3",
    name: "SK Pimpinan.docx",
    size: "845 KB",
    category: "Dokumen",
    sharedWith: [members[0], members[2], members[4]],
    uploadedAt: "2025-07-13T09:00:00Z",
    type: "docx",
    date: "2025-07-15",
  },
  {
    id: "f4",
    name: "Presentasi KPI.xlsx",
    size: "2.4 MB",
    category: "Lainnya",
    sharedWith: [],
    uploadedAt: "2025-07-16T11:20:00Z",
    type: "xlsx",
    date: "2025-07-15",
  },
];

export default uploadedFiles;
