//
import glob from "glob";
import path from "path";
import { Config } from "../types";

const getFiles = (config: Config): string[] => {
  return glob.sync(path.join(process.cwd(), config.filePath), {
    // root: config.baseUrl,
    ignore: [
      "**/*.stories*",
      "**/*.test*",
      "**/*.styles*",
      "**/*_*",
      "**/*.scss",
      "**/*.css",
      "**/*.html",
    ], // ...config.ignore
  });
};

export default getFiles;
