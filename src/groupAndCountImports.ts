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

  const usedImports = Object.keys(results)
    .map((key) => ({
      libraryName: key,
      count: results[key].length,
    }))
    .sort((a, b) => b.count - a.count);

  mappedImports.map((mappedImport) => {
    if (!results[mappedImport]) {
      usedImports.push({
        libraryName: mappedImport,
        count: 0,
      });
    }
  });
  return usedImports;
};

export default groupAndCountImports;
