// components/position-badge.tsx
import { Badge } from "@/components/ui/badge";

type Props = {
  position: "Direksi" | "VP" | "Officer" | "Staff" | "Intern";
};

export function PositionBadge({ position }: Props) {
  const colorMap = {
    Direksi: "bg-red-500 text-white",
    VP: "bg-purple-500 text-white",
    Officer: "bg-orange-500 text-white",
    Staff: "bg-blue-500 text-white",
    Intern: "bg-yellow-400 text-black",
  };

  return <Badge className={`text-xs ${colorMap[position]}`}>{position}</Badge>;
}
