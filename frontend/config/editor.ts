import type { Monaco } from "@monaco-editor/react";

export const DEFAULT_LANGUAGE = "cpp";

export const DEFAULT_THEME = "vs-dark";

export const EDITOR_OPTIONS: Monaco['editor']['IStandaloneEditorConstructionOptions'] = {
  fontSize: 15,
  minimap: {
    enabled: false,
  },
  automaticLayout: true,
  scrollBeyondLastLine: false,
};