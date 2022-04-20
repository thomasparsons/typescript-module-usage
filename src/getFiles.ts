import { sync } from "glob";
import { Config } from "./types";

const getFiles = (config: Config): string[] => {
  return sync(config.filePath, {
    root: config.baseUrl,
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
