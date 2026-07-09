import type { Statement } from "./statementTypes";

export default function classifyStatements(
  statements: string[]
): Statement[] {
  return statements.map((statement) => {
    if (statement.startsWith("int main")) {
      return {
        type: "function",
        text: statement,
      };
    }

    if (
      statement.startsWith("int ") ||
      statement.startsWith("float ") ||
      statement.startsWith("double ") ||
      statement.startsWith("char ") ||
      statement.startsWith("bool ")
    ) {
      return {
        type: "variable",
        text: statement,
      };
    }

    if (statement.startsWith("cout")) {
      return {
        type: "output",
        text: statement,
      };
    }

    if (statement.startsWith("return")) {
      return {
        type: "return",
        text: statement,
      };
    }

    return {
      type: "unknown",
      text: statement,
    };
  });
}