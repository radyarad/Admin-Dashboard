import { ChartAnnouncementEngagement } from "@/components/AppBarChart";
import { ChartRadialText } from "@/components/AppSpeedoChart";
import { EngagementSummaryCard } from "@/components/EngagementCard";
import PieChart from "@/components/PieChart";
import { RecentActivity } from "@/components/RecentActivity";
import { TableDemo } from "@/components/TableBiasa";
import TotalAnnouncement from "@/components/TotalAnnouncement";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { UnreadTableCard } from "@/components/UnreadTable";
import { FileDigit } from "lucide-react";

export default function Home() {
  return (
    <>
      <div className="space-y-1 pb-4">
        <h1 className="text-3xl font-bold">Selamat Datang Admin! 🙌</h1>
        <p className="text-muted-foreground">
          Dashboard khusus untuk announcement pada PT Pupuk Kujang
        </p>
      </div>
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        {/* ===== MAIN AREA: col-span-2 ===== */}
        <div className="xl:col-span-2 space-y-6">
          {/* Welcome Header */}
          {/* 3 Insight Cards (Pie, Radial, Total) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <PieChart />
            <ChartRadialText />
            <TotalAnnouncement /> {/* dari file kamu */}
          </div>
          {/* Bar Chart */}
          <ChartAnnouncementEngagement />
          {/* Table Summary (Announcement Status Table) */}
          <Card className="max-h-[650px]">
            <CardHeader>
              <CardTitle>Summary</CardTitle>
              <CardDescription>Table of Announcement</CardDescription>
            </CardHeader>
            <TableDemo />
          </Card>
        </div>

        {/* ===== SIDE PANEL: col-span-1 ===== */}
        <div className="xl:col-span-1 space-y-6">
          <EngagementSummaryCard />
          <RecentActivity />
          <UnreadTableCard />
        </div>
      </div>
    </>
  );
}
