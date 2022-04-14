//
import { TypescriptParser } from "typescript-parser";
import getInternalImports from "./getInternalImports";
import groupAndCountImports from "./groupAndCountImports";
import getFiles from "./getFiles";

const parser = new TypescriptParser();

function run(config) {
  const files = getFiles(config);

  if (files.length === 0) {
    console.error(" -- No Files to search -- ");
    return;
  }

  const baseUrl = config?.baseUrl || "./";

  return parser.parseFiles(files, baseUrl).then((parsed) => {
    const internalImports = getInternalImports(config, parsed);
    const groupedAndCounted = groupAndCountImports(internalImports);
    // if output var, write to file
    console.log("groupedAndCounted", groupedAndCounted);
    return groupedAndCounted;
  });
}

export default {
  run,
};
