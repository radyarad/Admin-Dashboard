"use client";

import { DataTableGroup } from "@/components/TableGroup";

export default function GroupPage() {
  return (
    <div className="flex flex-col px-4 space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Group Management</h1>
        <p className="text-sm text-muted-foreground">
          Kelola posisi atau tambahkan posisi baru
        </p>
      </div>

      <div>
        <h2 className="text-xl font-bold pb-4">Group</h2>
        <div className="w-full overflow-x-auto">
          <div className="max-w-5xl">
            <DataTableGroup />
          </div>
        </div>
      </div>
    </div>
  );
}
