"use client";

import Editor from "@monaco-editor/react";
import useEditor from "@/hooks/useEditor";
import {
  DEFAULT_LANGUAGE,
  DEFAULT_THEME,
  EDITOR_OPTIONS,
} from "@/config/editor";

export default function CodeEditor() {
  const { code, setCode } = useEditor();

  return (
    <Editor
      height="500px"
      language={DEFAULT_LANGUAGE}
      theme={DEFAULT_THEME}
      value={code}
      onChange={(value) => setCode(value ?? "")}
      options={EDITOR_OPTIONS}
    />
  );
}