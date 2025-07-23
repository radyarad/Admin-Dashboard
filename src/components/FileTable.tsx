import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Trash2, Eye } from "lucide-react";
import uploadedFiles from "@/lib/DataFile";

export function FileTable() {
  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>File Name</TableHead>
            <TableHead>Category</TableHead>
            <TableHead>Size</TableHead>
            <TableHead>Shared With</TableHead>
            <TableHead>Date Uploaded</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {uploadedFiles.map((file) => (
            <TableRow key={file.id}>
              <TableCell className="font-medium">{file.name}</TableCell>
              <TableCell>{file.category}</TableCell>
              <TableCell>{file.size}</TableCell>
              <TableCell>
                {file.sharedWith.length > 0 ? (
                  file.sharedWith.join(", ")
                ) : (
                  <span className="text-muted-foreground italic">Private</span>
                )}
              </TableCell>
              <TableCell>{file.date}</TableCell>
              <TableCell className="text-right space-x-2">
                <Button size="sm" variant="outline">
                  <Eye className="w-4 h-4 mr-1" />
                  View
                </Button>
                <Button size="sm" variant="destructive">
                  <Trash2 className="w-4 h-4 mr-1" />
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
