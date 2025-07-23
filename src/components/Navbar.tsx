"use client";

import { Moon, Scroll, Settings, Shield, Sun, User } from "lucide-react";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "./ui/button";
import { useTheme } from "next-themes";
import { SidebarTrigger } from "./ui/sidebar";

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  return (
    <nav className="p-4 flex items-center justify-between">
      {/* Kiri */}
      <SidebarTrigger />
      {/* kanan */}
      <div className="flex items-center gap-4">
        <Link href="/">Dashboard</Link>
        {/* Theme Menu */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="icon">
              <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
              <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
              <span className="sr-only">Toggle theme</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => setTheme("light")}>
              Light
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("dark")}>
              Dark
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("system")}>
              System
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        {/* User Menu */}
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Avatar className="cursor-pointer">
              <AvatarImage src="/Labib.jpg" />
              <AvatarFallback>LB</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent sideOffset={10}>
            <DropdownMenuLabel>Settings</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="cursor-pointer">
              <Settings className="h-[1.2rem] w-[1.2rem] mr-2" />
              General
            </DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer">
              <Scroll className="h-[1.2rem] w-[1.2rem] mr-2" />
              logs
            </DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer">
              <User className="h-[1.2rem] w-[1.2rem] mr-2" />
              Teams
            </DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer">
              <Shield className="h-[1.2rem] w-[1.2rem] mr-2" />
              Security
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
};

export default Navbar;
