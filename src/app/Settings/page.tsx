"use client";

import { House, Lock, Settings, User } from "lucide-react";

import {
  Command,
  CommandGroup,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { SelectTheme } from "@/components/SelectTheme";
import { SelectLanguage } from "@/components/SelectLanguage";

export default function SettingsPage() {
  return (
    <>
      <div className="p-4">
        <div className="space-y-1 pb-4">
          <div className="flex items-center">
            <Settings size={40} className="mr-4" />
            <h1 className="text-3xl font-bold">Settings</h1>
          </div>
          <p className="text-muted-foreground">
            Dashboard khusus untuk announcement pada PT Pupuk Kujang
          </p>
        </div>
      </div>
      <div className="grid grid-cols-4 p-4 ">
        {/* Cattegory */}
        <div className="col-span-1 max-w-[200px]">
          <Command>
            <CommandList>
              <CommandGroup heading="Admin">
                <CommandItem>
                  <User className="mr-2" />
                  My Profile
                </CommandItem>
                <CommandItem>
                  <House className="mr-2" />
                  General
                </CommandItem>
                <CommandItem>
                  <Lock className="mr-2" />
                  Security
                </CommandItem>
              </CommandGroup>
            </CommandList>
          </Command>
        </div>
        {/* Settings */}
        <div className="col-span-2">
          <h2 className="text-2xl font-bold">My Notification</h2>
          <Separator className="my-3" />
          <div className="flex items-center pt-2 pb-8">
            <div className="flex flex-col">
              <h4 className="text-md font-bold">Desktop Notifications</h4>
              <p className="text-sm">
                menerima pemberitahuan desktop kapan pun organisasi anda
                memerlukan perhatian anda
              </p>
            </div>
            <Switch className="ml-auto justify-self-end" />
          </div>
          <div className="flex items-center pb-8">
            <div className="flex flex-col">
              <h4 className="text-md font-bold">Email Notifications</h4>
              <p className="text-sm">
                Terima email kapan pun organisasi anda memerlukan perhatian anda
              </p>
            </div>
            <Switch className="ml-auto justify-self-end" />
          </div>
          <div className="flex items-center pb-8">
            <div className="flex flex-col">
              <h4 className="text-md font-bold pb-2">Notify when</h4>
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <Checkbox id="terms" />
                  <Label htmlFor="terms">Daily Update</Label>
                </div>
                <div className="flex items-center gap-3">
                  <Checkbox id="terms" />
                  <Label htmlFor="terms">Maintenance</Label>
                </div>
                <div className="flex items-center gap-3">
                  <Checkbox id="terms" />
                  <Label htmlFor="terms">Announcement fully read</Label>
                </div>
              </div>
            </div>
          </div>
          <h2 className="text-2xl font-bold">My Settings</h2>
          <Separator className="my-3" />
          <div className="flex items-center pt-2 pb-8">
            <div className="flex flex-col">
              <h4 className="text-md font-bold">Appearance</h4>
              <p className="text-sm">
                sesuaikan tampilan tema di perangkat anda
              </p>
            </div>
            <div className="ml-auto justify-self-end">
              <SelectTheme />
            </div>
          </div>
          <div className="flex items-center pb-8">
            <div className="flex flex-col">
              <h4 className="text-md font-bold">Two-factor authentication</h4>
              <p className="text-sm">
                jaga keamanan akun Anda dengan mengaktifkan 2FA melalui SMS atau
                menggunakan OTP
              </p>
            </div>
            <Switch className="ml-auto justify-self-end" />
          </div>
          <div className="flex items-center pt-2 pb-8">
            <div className="flex flex-col">
              <h4 className="text-md font-bold">Language</h4>
              <p className="text-sm">Pilih bahasa sesuai preferensi anda</p>
            </div>
            <div className="ml-auto justify-self-end">
              <SelectLanguage />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
