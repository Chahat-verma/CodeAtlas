import { useEditorStore } from "@/store/editor";

export default function useEditor() {
  const code = useEditorStore((state) => state.code);
  const setCode = useEditorStore((state) => state.setCode);

  return {
    code,
    setCode,
  };
}