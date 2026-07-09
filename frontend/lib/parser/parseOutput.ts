import type { Statement } from "./statementTypes";

export default function parseOutput(statement: Statement): Statement {
  if (statement.type !== "output") {
    return statement;
  }

  const regex = /^cout\s*<<\s*(.+);$/;

  const match = statement.text.match(regex);

  if (!match) {
    return statement;
  }

  return {
    ...statement,
    outputExpression: match[1].trim(),
  };
}