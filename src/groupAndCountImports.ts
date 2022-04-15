//
import { Import } from "typescript-parser";
import getMappedImports from "./getMappedImports";
import { Config } from "./types";

const groupAndCountImports = (
  config: Config,
  files: string[],
  imports: Import[]
) => {
  // if (imports.length === 0) {
  //   return [];
  // }

  const mappedImports = getMappedImports(config, files);

  const results = imports.reduce((results, imp) => {
    (results[imp.libraryName] = results[imp.libraryName] || []).push(imp);
    return results;
  }, {});

  return Object.keys(results)
    .map((key) => ({
      libraryName: key,
      count: results[key].length,
    }))
    .sort((a, b) => b.count - a.count);
};

export default groupAndCountImports;
