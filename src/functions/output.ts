//
import fs from "fs";
import path from "path";

const output = async (groupedAndCounted) => {
  fs.writeFileSync(
    path.join(process.cwd(), "output.json"),
    JSON.stringify(groupedAndCounted)
  );
};

export default output;
