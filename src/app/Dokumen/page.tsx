import { FileText, CalendarDays, Users, EyeOff, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FileStatsCard } from "@/components/FileStatsCards";
import { FileUploadDialog } from "@/components/FileUploadDialog";
import { FileTable } from "@/components/FileTable";
import { fileStats } from "@/lib/FileStats"; // dummy stats dari file-data.ts

export default function FilePage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">📁 File Management</h1>
          <p className="text-muted-foreground">
            Manage and share uploaded files.
          </p>
        </div>

        {/* Upload Button */}
        <FileUploadDialog>
          <Button>
            <Plus className="w-4 h-4 mr-2" />
            Upload File
          </Button>
        </FileUploadDialog>
      </div>

      {/* Stats Cards */}
      <FileStatsCard />

      {/* File Table */}
      <FileTable />
    </div>
  );
}
