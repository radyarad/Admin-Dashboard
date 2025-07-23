"use client";
import data from "@/lib/DataPie";

import { ResponsivePie } from "@nivo/pie";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Users } from "lucide-react";
type MyPieProps = {
  data: any;
};

const MyPie = ({ data }: MyPieProps) => {
  return (
    <ResponsivePie /* or Pie for fixed dimensions */
      data={data}
      margin={{ top: 10, right: 10, bottom: 10, left: 0 }}
      innerRadius={0.5}
      padAngle={0.6}
      cornerRadius={2}
      activeOuterRadiusOffset={8}
      enableArcLinkLabels={false}
      arcLinkLabelsSkipAngle={10}
      arcLinkLabelsTextColor="#333333"
      arcLinkLabelsThickness={2}
      arcLinkLabelsColor={{ from: "color" }}
      arcLabel="id"
      arcLabelsSkipAngle={10}
      arcLabelsTextColor={{ from: "color", modifiers: [["darker", 2]] }}
    />
  );
};

export default function PieChart() {
  return (
    <Card className="w-full">
      <CardHeader>
        <div className="flex items-end gap-2">
          <Users
            size={32}
            color="oklch(0.606 0.25 292.717)"
            strokeWidth={1.75}
          />
          <CardTitle className="text-base">Total Karyawan</CardTitle>
        </div>
        <CardDescription className="py-2">
          Total karyawan terdaftar
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4 h-[200px]">
        <MyPie data={data} />
      </CardContent>
    </Card>
  );
}
