export const THEMES = ["light", "dark", "system"] as const;

export type Theme = (typeof THEMES)[number];

export const DEFAULT_THEME: Theme = "system";

export const STORAGE_KEY = "codeatlas-theme";

export const ENABLE_SYSTEM_THEME = true;

export const DISABLE_TRANSITION_ON_CHANGE = true;