import type { LucideIcon } from "lucide-react";
import {
  Home,
  Play,
  Code2,
  BookOpen,
  Settings,
} from "lucide-react";

export interface NavigationItem {
  title: string;
  href: string;
  icon: LucideIcon;
}

export const navigation: NavigationItem[] = [
  {
    title: "Dashboard",
    href: "/",
    icon: Home,
  },
  {
    title: "Playground",
    href: "/playground",
    icon: Play,
  },
  {
    title: "Visualizer",
    href: "/visualizer",
    icon: Code2,
  },
  {
    title: "Documentation",
    href: "/docs",
    icon: BookOpen,
  },
  {
    title: "Settings",
    href: "/settings",
    icon: Settings,
  },
];