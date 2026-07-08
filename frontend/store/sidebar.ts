import { create } from "zustand";

interface SidebarStore {
  collapsed: boolean;
  toggle: () => void;
  expand: () => void;
  collapse: () => void;
}

export const useSidebarStore = create<SidebarStore>((set) => ({
  collapsed: false,

  toggle: () =>
    set((state) => ({
      collapsed: !state.collapsed,
    })),

  expand: () =>
    set({
      collapsed: false,
    }),

  collapse: () =>
    set({
      collapsed: true,
    }),
}));