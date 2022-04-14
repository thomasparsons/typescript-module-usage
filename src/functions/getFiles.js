//
import glob from "glob";

const getFiles = (config) => {
  return glob.sync(config.filePath, {
    root: config.baseUrl,
    ignore: [".stories.", ".test.", "_", ".styles", ".scss", ".css", ".html"], // ...config.ignore
  });
};

export default getFiles;