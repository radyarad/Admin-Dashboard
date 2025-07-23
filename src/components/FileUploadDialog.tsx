"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useState } from "react";
import members from "@/lib/DataTableData";

type Props = {
  children: React.ReactNode;
};

export function FileUploadDialog({ children }: Props) {
  const [selectedUsers, setSelectedUsers] = useState<string[]>([]);

  const toggleUser = (id: string) => {
    setSelectedUsers((prev) =>
      prev.includes(id) ? prev.filter((uid) => uid !== id) : [...prev, id]
    );
  };

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>Upload File</DialogTitle>
        </DialogHeader>

        {/* File Input */}
        <div className="space-y-2">
          <Label htmlFor="file">Choose file</Label>
          <Input id="file" type="file" />
        </div>

        {/* Kategori */}
        <div className="space-y-2">
          <Label htmlFor="category">Category</Label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Dokumen">Dokumen</SelectItem>
              <SelectItem value="Presentasi">Presentasi</SelectItem>
              <SelectItem value="Laporan">Laporan</SelectItem>
              <SelectItem value="Lainnya">Lainnya</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Share to Position */}
        <div className="space-y-2">
          <Label>Share with Position</Label>
          <div className="border rounded p-2 space-y-1 max-h-40 overflow-y-auto">
            {["Direksi", "VP", "Officer", "Staff", "Intern"].map((position) => (
              <div key={position} className="flex items-center space-x-2">
                <Checkbox
                  id={position}
                  checked={selectedUsers.includes(position)}
                  onCheckedChange={() => toggleUser(position)}
                />
                <Label htmlFor={position}>{position}</Label>
              </div>
            ))}
          </div>
        </div>

        {/* Submit */}
        <Button className="w-full mt-4">Upload</Button>
      </DialogContent>
    </Dialog>
  );
}
