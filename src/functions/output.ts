import fs from "fs";
import path from "path";

const output = (groupedAndCounted) => {
  console.log("groupedAndCounted", groupedAndCounted);
  const outputJson = JSON.stringify(groupedAndCounted);
  fs.writeFile(
    path.join(process.cwd(), "output.json"),
    outputJson,
    (err, result) => {
      if (err) {
        console.log("error", err);
        return;
      }
      return result;
    }
  );
};

export default output;
