import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { recentActivities } from "@/lib/RecentActivity";
import { Clock } from "lucide-react";
import { formatDistanceToNow } from "date-fns";

export function RecentActivity() {
  return (
    <Card className="h-full max-h-[280px]">
      <CardHeader>
        <CardTitle className="text-sm text-muted-foreground">
          🕒 Recent Activity
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4 max-h-[400px] overflow-y-auto">
        {recentActivities.map((activity) => (
          <div key={activity.id} className="space-y-1 text-sm">
            <div className="flex items-start justify-between">
              <p>
                <span className="font-medium">{activity.user}</span>{" "}
                {activity.type === "read" ? "membaca" : "menambahkan"}{" "}
                <span className="font-semibold text-foreground">
                  "{activity.title}"
                </span>
              </p>
              <span className="text-xs text-muted-foreground whitespace-nowrap">
                {formatDistanceToNow(new Date(activity.date), {
                  addSuffix: true,
                })}
              </span>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
