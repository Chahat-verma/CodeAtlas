"use client";

import Editor from "@monaco-editor/react";
import useEditor from "@/hooks/useEditor";

export default function CodeEditor() {
  const { code, setCode } = useEditor();

  return (
    <Editor
      height="500px"
      language="cpp"
      theme="vs-dark"
      value={code}
      onChange={(value) => setCode(value ?? "")}
      options={{
        fontSize: 15,
        minimap: {
          enabled: false,
        },
        automaticLayout: true,
        scrollBeyondLastLine: false,
      }}
    />
  );
}