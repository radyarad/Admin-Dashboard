import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Announcement } from "@/lib/AnnData";
import { PositionBadge } from "@/components/PositionBadge";

type Props = {
  pinned: Announcement[];
};

export function PinnedAnnouncement({ pinned }: Props) {
  const top3 = pinned.slice(0, 3);

  if (top3.length === 0) return null;

  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle className="text-sm text-muted-foreground">
          📌 Pinned Announcements
        </CardTitle>
      </CardHeader>

      <CardContent className="max-h-[500px] overflow-y-auto">
        {top3.map((item) => (
          <div
            key={item.id}
            className="space-y-2 border-b pb-4 last:border-b-0 last:pb-0"
          >
            <h3 className="text-base font-semibold text-foreground">
              {item.title}
            </h3>

            <div className="flex items-center gap-3 text-sm">
              <Image
                src={item.author.image}
                alt={item.author.name}
                width={32}
                height={32}
                className="rounded-full object-cover"
              />
              <div>
                <p className="flex items-center gap-2 font-medium">
                  {item.author.name}
                  <PositionBadge position={item.author.position} />
                </p>
                <p className="text-xs text-muted-foreground">{item.date}</p>
              </div>
            </div>

            <p className="text-sm text-muted-foreground line-clamp-3">
              {item.excerpt}
            </p>

            <Button size="sm" variant="outline" className="w-full">
              View
            </Button>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
