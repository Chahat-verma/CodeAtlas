export default function extractStatements(lines: string[]): string[] {
  return lines.filter((line) => {
    // Ignore preprocessor directives
    if (line.startsWith("#")) {
      return false;
    }

    // Ignore namespace declarations
    if (line.startsWith("using namespace")) {
      return false;
    }

    // Ignore braces
    if (line === "{" || line === "}") {
      return false;
    }

    return true;
  });
}