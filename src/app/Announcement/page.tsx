"use client";

import announcements from "@/lib/AnnData";
import { PinnedAnnouncement } from "@/components/PinnedAnnouncement";
import { AnnouncementCard } from "@/components/AnnouncementCard";
import CategoryCard from "@/components/CategoryCard";
import { CreateAnnouncementForm } from "@/components/CreateAnnouncement";

export default function AnnouncementPage() {
  const pinned = announcements.filter((a) => a.pinned);
  const regular = announcements.filter((a) => !a.pinned);

  return (
    <>
      <div className="space-y-1 pb-4">
        <h1 className="text-3xl font-bold">🔊 Announcement Dashboard</h1>
        <p className="text-muted-foreground px-12">
          Bagikan announcement kepada semua karyawan PT Pupuk Kujang sekarang.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Kategori Card bisa di sini */}
        <aside className="lg:col-span-2">
          <div className="sticky top-4 max-h-[calc(100vh-100px)] overflow-y-auto">
            <CategoryCard />
          </div>
        </aside>

        {/* Announcement Cards */}
        <main className="lg:col-span-7 space-y-4">
          {/* Form Buat Pengumuman */}
          <CreateAnnouncementForm />
          {regular.map((announcement) => (
            <AnnouncementCard
              key={announcement.id}
              announcement={announcement}
            />
          ))}
        </main>

        {/* Pinned Announcement */}
        <aside className="lg:col-span-3">
          <div className="sticky top-4 max-h-[calc(100vh-100px)] overflow-y-auto">
            <PinnedAnnouncement pinned={pinned} />
          </div>
        </aside>
      </div>
    </>
  );
}
