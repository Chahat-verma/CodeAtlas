export type StatementType =
  | "function"
  | "variable"
  | "output"
  | "return"
  | "unknown";

export interface Statement {
  type: StatementType;
  text: string;

  // Variable information
  variableType?: string;
  variableName?: string;
  initialValue?: string;

  // Output information
  outputExpression?: string;
}