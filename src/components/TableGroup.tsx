"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Ellipsis } from "lucide-react";

import groupList from "@/lib/DataGroup";
import { Group } from "@/lib/DataGroup";
import { PositionBadge } from "@/components/PositionBadge";

export function DataTableGroup() {
  return (
    <div className="border rounded-md overflow-hidden">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-10">Group</TableHead>
            <TableHead className="w-10">Status</TableHead>
            <TableHead className="w-10">Member Count</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {groupList.map((group: Group) => (
            <TableRow key={group.name}>
              <TableCell>
                <PositionBadge position={group.name} />
              </TableCell>
              <TableCell>
                <div className="flex items-center gap-2">
                  <span
                    className={`w-2 h-2 rounded-full ${
                      group.status === "active" ? "bg-green-500" : "bg-gray-400"
                    }`}
                  />
                  <span className="text-sm capitalize">{group.status}</span>
                </div>
              </TableCell>
              <TableCell className="flex items-center justify-between gap-2">
                <span className="px-10">{group.memberCount}</span>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon" className="h-6 w-6">
                      <Ellipsis className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>Edit</DropdownMenuItem>
                    <DropdownMenuItem className="text-red-600">
                      Delete
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
