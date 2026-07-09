import { create } from "zustand";

import type { ExecutionResult } from "@/types/execution";

type ExecutionStore = {
  result: ExecutionResult | null;

  setResult: (result: ExecutionResult) => void;

  clearResult: () => void;
};

export const useExecutionStore = create<ExecutionStore>((set) => ({
  result: null,

  setResult: (result) =>
    set({
      result,
    }),

  clearResult: () =>
    set({
      result: null,
    }),
}));