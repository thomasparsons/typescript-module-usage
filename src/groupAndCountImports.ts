//
import { Import } from "typescript-parser";
import { Config } from "./types";

const groupAndCountImports = (
  config: Config,
  files: string[],
  imports: Import[]
) => {
  if (imports.length === 0) {
    return [];
  }

  /*
  const groupedAndCounted = [];
  files.map((f) => {
    console.log(config.paths);

    // if f includes one of the config path values,
    // then swap everything up to the end of that value with the
    // config path key that it matches with
    const mappedFileName = f;
    groupedAndCounted[mappedFileName] = 0;
  });
  */

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
