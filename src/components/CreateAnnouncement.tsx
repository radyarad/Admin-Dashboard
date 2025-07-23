"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export function CreateAnnouncementForm() {
  const [title, setTitle] = useState("");
  const [excerpt, setExcerpt] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Kirim ke backend/API
    console.log("Submitted", { title, excerpt });
    setTitle("");
    setExcerpt("");
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-base">📝 Create New Announcement</CardTitle>
      </CardHeader>

      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            placeholder="Announcement Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <Textarea
            placeholder="Write announcement..."
            value={excerpt}
            onChange={(e) => setExcerpt(e.target.value)}
            required
          />
          <Button type="submit">Submit</Button>
        </form>
      </CardContent>
    </Card>
  );
}
