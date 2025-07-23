import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from "@/components/ui/card";
import { FileText, Users, Lock, Layers } from "lucide-react";
import uploadedFiles from "@/lib/DataFile";

export function FileStatsCard() {
  const totalFiles = uploadedFiles.length;
  const sharedFiles = uploadedFiles.filter(
    (f) => f.sharedWith.length > 0
  ).length;
  const privateFiles = uploadedFiles.filter(
    (f) => f.sharedWith.length === 0
  ).length;

  // Total size dalam MB
  const totalSizeMB = uploadedFiles.reduce((acc, curr) => {
    const size = parseFloat(curr.size);
    return acc + (isNaN(size) ? 0 : size);
  }, 0);

  const formatSize = `${totalSizeMB.toFixed(2)} MB`;

  const stats = [
    {
      icon: <FileText size={28} strokeWidth={1.5} className="text-blue-500" />,
      title: "Total Files",
      value: totalFiles,
      description: "Semua file yang sudah diunggah",
    },
    {
      icon: <Users size={28} strokeWidth={1.5} className="text-green-500" />,
      title: "Shared Files",
      value: sharedFiles,
      description: "File yang dibagikan ke tim",
    },
    {
      icon: <Lock size={28} strokeWidth={1.5} className="text-red-500" />,
      title: "Private Files",
      value: privateFiles,
      description: "File yang tidak dibagikan",
    },
    {
      icon: <Layers size={28} strokeWidth={1.5} className="text-purple-500" />,
      title: "Total Size",
      value: formatSize,
      description: "Akumulasi ukuran file",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat, index) => (
        <Card key={index}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
            {stat.icon}
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stat.value}</div>
            <p className="text-xs text-muted-foreground">{stat.description}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
