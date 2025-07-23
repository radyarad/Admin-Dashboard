"use client";
import { FileDigit } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

export default function TotalAnnouncement() {
  return (
    <Card className="">
      <CardHeader>
        <div className="flex items-end gap-2">
          <FileDigit
            size={32}
            color="oklch(0.606 0.25 292.717)"
            strokeWidth={1.75}
          />
          <CardTitle className="text-base">Announcement Given</CardTitle>
        </div>
        <CardDescription>Total amount of Announcement Given</CardDescription>
      </CardHeader>
      <CardContent className="flex items-end justify-center h-28 gap-2">
        <h1 className="text-5xl font-bold leading-none">105</h1>
        <p className="text-sm text-muted-foreground leading-none">
          Announcement
        </p>
      </CardContent>
    </Card>
  );
}
