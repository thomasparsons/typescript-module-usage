//
import { Config } from "./types";

const getMappedImports = (config: Config, files: string[]) => {
  if (files.length === 0) {
    return [];
  }

  console.log("files", files);
  console.log(config.paths);

  const groupedAndCounted = [];
  files.map((f) => {
    // if f includes one of the config path values,
    // then swap everything up to the end of that value with the
    // config path key that it matches with
    const mappedFileName = f;
  });

  // console.log(groupedAndCounted);

  return groupedAndCounted;
};

export default getMappedImports;
