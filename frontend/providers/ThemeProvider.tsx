"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import type { ThemeProviderProps } from "next-themes";

import {
  DEFAULT_THEME,
  STORAGE_KEY,
  ENABLE_SYSTEM_THEME,
  DISABLE_TRANSITION_ON_CHANGE,
} from "@/config/theme";

export default function ThemeProvider({
  children,
  ...props
}: ThemeProviderProps) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme={DEFAULT_THEME}
      storageKey={STORAGE_KEY}
      enableSystem={ENABLE_SYSTEM_THEME}
      disableTransitionOnChange={DISABLE_TRANSITION_ON_CHANGE}
      {...props}
    >
      {children}
    </NextThemesProvider>
  );
}