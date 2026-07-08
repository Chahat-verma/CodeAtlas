"use client";

import { PanelLeft } from "lucide-react";

import ThemeToggle from "@/components/theme/ThemeToggle";
import { Button } from "@/components/ui/button";
import { useSidebarStore } from "@/store/sidebar";

export default function Navbar() {
  const toggle = useSidebarStore((state) => state.toggle);

  return (
    <header className="flex h-16 items-center justify-between border-b border-border px-6">
      <div className="flex items-center gap-3">
        <Button
          variant="ghost"
          size="icon"
          onClick={toggle}
          aria-label="Toggle Sidebar"
        >
          <PanelLeft className="size-5" />
        </Button>

        <h1 className="text-xl font-bold">
          CodeAtlas
        </h1>
      </div>

      <div className="flex items-center gap-3">
        <ThemeToggle />
      </div>
    </header>
  );
}