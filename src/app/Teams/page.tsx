"use client";

import { DataTableDemo } from "@/components/DataTable";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function page() {
  return (
    <div className="grid px-4 gap-4">
      <div className="flex flex-col gap-2 pb-5">
        <h1 className="text-3xl font-bold">Karyawan Management</h1>
        <p className="text-sm">Kelola karyawan atau tambahkan karyawan baru</p>
      </div>
      <div>
        <h2 className="text-xl font-bold">Invite New Member</h2>
        <p className="text-sm pb-4">Share link atau invite via email</p>
        <div className="flex w-full">
          <div className="flex w-full max-w-sm items-center gap-2 mr-6">
            <Input disabled type="text" placeholder="https://linkinvite.com" />
            <Button type="submit" variant="outline">
              Copy Link
            </Button>
          </div>
          <p className="flex items-center mr-6">Or</p>
          <div className="flex w-full max-w-sm items-center gap-2">
            <Input type="email" placeholder="Email Address" />
            <Button type="submit" variant="outline">
              Send Invite
            </Button>
          </div>
        </div>
      </div>
      <div>
        <h2 className="text-xl font-bold">Member</h2>
        <DataTableDemo />
      </div>
    </div>
  );
}
