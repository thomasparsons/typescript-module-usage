import * as path from "path";
import { Output } from "./types";

// @todo set output file from command line
const outputFile = "./output.json";

export function count(libraryName: string) {
  const output: Output[] = require(path.join(process.cwd(), outputFile));

  const item = output.find((o) => {
    return o.libraryName === libraryName;
  });

  return item ? item.count : 0;
}

export default {
  count,
};
