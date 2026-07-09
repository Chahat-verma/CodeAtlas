import type { ExecutionResult } from "@/types/execution";

export interface Parser {
  parse(code: string): ExecutionResult;
}