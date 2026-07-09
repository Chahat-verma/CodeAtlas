export interface ExecutionVariable {
  id: string;
  name: string;
  type: string;
  value: string;
  scope: string;
}

export interface StackFrame {
  id: string;
  functionName: string;
  line: number;
}

export interface ExecutionStep {
  id: number;
  currentLine: number;
  variables: ExecutionVariable[];
  stack: StackFrame[];
  output: string[];
}

export interface ExecutionResult {
  success: boolean;
  steps: ExecutionStep[];
  errors: string[];
}