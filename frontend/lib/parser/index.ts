import normalizeSource from "./normalize";
import extractStatements from "./extractStatements";
import classifyStatements from "./classifyStatements";
import parseVariable from "./parseVariable";
import parseOutput from "./parseOutput";

import type { Parser } from "./types";

const cppParser: Parser = {
  parse(code: string) {
    const normalizedLines = normalizeSource(code);

    const statements = extractStatements(normalizedLines);

    const classifiedStatements = classifyStatements(statements);

    const parsedStatements = classifiedStatements
      .map(parseVariable)
      .map(parseOutput);

    console.log(parsedStatements);

    return {
      success: true,
      steps: [],
      errors: [],
    };
  },
};

export default cppParser;