import * as fs from "fs";
import * as path from "path";
import { Output } from "./types";

// @todo set output file from command line

const output = async (groupedAndCounted: Output[]) => {
  fs.writeFileSync(
    path.join(process.cwd(), "output.json"),
    JSON.stringify(groupedAndCounted)
  );
};

export default output;
