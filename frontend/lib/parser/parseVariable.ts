import type { Statement } from "./statementTypes";

export default function parseVariable(statement: Statement): Statement {
  if (statement.type !== "variable") {
    return statement;
  }

  const regex =
    /^(int|float|double|char|bool)\s+([A-Za-z_]\w*)\s*=\s*(.+);$/;

  const match = statement.text.match(regex);

  if (!match) {
    return statement;
  }

  return {
    ...statement,
    variableType: match[1],
    variableName: match[2],
    initialValue: match[3],
  };
}