// components/EngagementSummaryCard.tsx
import { BarChart4 } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

export function EngagementSummaryCard() {
  // Dummy data — bisa kamu sambungkan ke backend nanti
  const totalAnnouncements = 200;
  const totalRead = 150;
  const totalUnread = totalAnnouncements - totalRead;
  const percentageRead = Math.round((totalRead / totalAnnouncements) * 100);

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center gap-2">
          <BarChart4 className="text-primary" />
          <CardTitle className="text-base">Engagement Summary</CardTitle>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        <div className="grid grid-cols-3 gap-4 text-sm text-muted-foreground">
          <div className="flex flex-col items-center">
            <p className="text-xl font-bold text-foreground">
              {totalAnnouncements}
            </p>
            <span>Total</span>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-xl font-bold text-green-600">{totalRead}</p>
            <span>Read</span>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-xl font-bold text-red-500">{totalUnread}</p>
            <span>Unread</span>
          </div>
        </div>

        <div className="text-sm mt-2">
          <p className="text-muted-foreground mb-1">
            Read rate: {percentageRead}%
          </p>
          <Progress value={percentageRead} className="h-2" />
        </div>
      </CardContent>
    </Card>
  );
}
