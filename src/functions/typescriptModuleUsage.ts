//
import { TypescriptParser } from "typescript-parser";
import getInternalImports from "./getInternalImports";
import groupAndCountImports from "./groupAndCountImports";
import getFiles from "./getFiles";
import { Config } from "../types";

const parser = new TypescriptParser();

function run(config: Config) {
  const files = getFiles(config);

  if (files.length === 0) {
    console.error(" -- No Files to search -- ");
    return;
  }

  const baseUrl = config?.baseUrl || "./";

  return parser.parseFiles(files, baseUrl).then((parsed) => {
    const internalImports = getInternalImports(config, parsed);

    if (internalImports.length === 0) {
      console.error(" -- No Internal Imports found -- ");
      return [];
    }

    const groupedAndCounted = groupAndCountImports(
      config,
      files,
      internalImports
    );
    // if output var, write to file
    console.log("groupedAndCounted", groupedAndCounted);
    return groupedAndCounted;
  });
}

export default {
  run,
};
