import { create } from "zustand";

type EditorStore = {
  code: string;
  setCode: (code: string) => void;
};

const DEFAULT_CODE = `#include <iostream>

using namespace std;

int main() {
    cout << "Hello CodeAtlas!";
    return 0;
}`;

export const useEditorStore = create<EditorStore>((set) => ({
  code: DEFAULT_CODE,

  setCode: (code) =>
    set({
      code,
    }),
}));