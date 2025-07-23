"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { BarChart, Bar, CartesianGrid, XAxis } from "recharts";
import { ChartNoAxesCombined } from "lucide-react";

import { engagementData } from "@/lib/Engagement";
import members from "@/lib/DataTableData";

// Gabungkan nama dari members ke dalam engagementData
const chartData = engagementData.map((item) => {
  const member = members.find((m) => m.id === item.memberId);
  return {
    name: member?.name ?? "Unknown",
    read: item.read,
    unread: item.unread,
  };
});

const chartConfig = {
  read: {
    label: "Read",
    color: "var(--chart-1)",
  },
  unread: {
    label: "Unread",
    color: "var(--chart-2)",
  },
} satisfies ChartConfig;

export function ChartAnnouncementEngagement() {
  return (
    <Card className="max-h-[650px]">
      <CardHeader>
        <div className="flex items-end gap-2">
          <ChartNoAxesCombined
            size={32}
            color="oklch(0.606 0.25 292.717)"
            strokeWidth={1.75}
          />
          <CardTitle className="text-base">Announcement Engagement</CardTitle>
        </div>
        <CardDescription>Engagement by team member</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={chartConfig}
          className="w-full h-[220px] overflow-visible"
        >
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="name"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dashed" />}
            />
            <Bar dataKey="read" fill="var(--color-read)" radius={4} />
            <Bar dataKey="unread" fill="var(--color-unread)" radius={4} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
