//
import glob from "glob";

const getFiles = (config): string[] => {
  return glob.sync(config.filePath, {
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