"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function ThemeToggle() {
  const { setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="border-muted">
        <Button variant="outline" size={"icon"} className="h-8 w-8">
          <div>
            <Sun
              size={18}
              // className="rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
              className="block dark:hidden"
            />
            <Moon
              size={18}
              // className="absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
              className="hidden dark:block"
            />
            <span className="sr-only">Toggle theme</span>
          </div>
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
  );
}
