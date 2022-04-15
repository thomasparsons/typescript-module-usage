//
import { Config } from "./types";

const getMappedImports = (config: Config, files: string[]) => {
  if (files.length === 0) {
    return [];
  }

  const mappedImports: string[] = [];

  files.forEach((f) => {
    Object.keys(config.paths).forEach((path) => {
      const value = config.paths[path][0].replace("/*", "");
      if (f.includes(value)) {
        mappedImports.push(f.replace(value, path.replace("/*", "")));
      }
    });
  });

  return mappedImports;
};

export default getMappedImports;
