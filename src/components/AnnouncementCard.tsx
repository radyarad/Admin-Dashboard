import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Announcement } from "@/lib/AnnData";
import { PositionBadge } from "@/components/PositionBadge";

type Props = {
  announcement: Announcement;
};

export function AnnouncementCard({ announcement }: Props) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">{announcement.title}</CardTitle>
        <CardDescription className="flex items-center gap-3 mt-2 text-sm text-muted-foreground">
          <Image
            src={announcement.author.image}
            alt={announcement.author.name}
            width={32}
            height={32}
            className="rounded-full object-cover"
          />
          <div>
            <p className="flex items-center gap-2 font-medium text-foreground">
              {announcement.author.name}
              <PositionBadge position={announcement.author.position} />
            </p>
            <p className="text-xs">{announcement.date}</p>
          </div>
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-4">
        <p className="text-sm text-muted-foreground line-clamp-4">
          {announcement.excerpt}
        </p>

        <Button size="sm" variant="secondary">
          View Details
        </Button>
      </CardContent>
    </Card>
  );
}
