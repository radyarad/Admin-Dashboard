import Link from "next/link";
import { usePathname } from "next/navigation";
import { announcementCategories } from "@/lib/AnnCategory";
import { cn } from "@/lib/utils";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function CategoryCard() {
  const pathname = usePathname();
  const current = pathname?.split("/")[2] ?? "all";

  return (
    <Card className="w-full">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">
          Category
        </CardTitle>
        <Button variant="ghost" size="sm" className="text-xs px-1.5">
          + Add New
        </Button>
      </CardHeader>

      <CardContent className="space-y-1 pt-0">
        {announcementCategories.map((cat) => {
          const isActive = current === cat.slug;
          return (
            <Link
              key={cat.slug}
              href={`/announcement/${cat.slug}`}
              className={cn(
                "flex items-center justify-between rounded-md px-3 py-2 text-sm font-medium transition-colors",
                isActive
                  ? "bg-muted text-primary"
                  : "text-muted-foreground hover:bg-muted"
              )}
            >
              {cat.label}
              {cat.slug === "all" && (
                <span className="ml-2 rounded-full bg-background px-2 text-xs text-muted-foreground">
                  8
                </span>
              )}
            </Link>
          );
        })}
      </CardContent>
    </Card>
  );
}

export default CategoryCard;
