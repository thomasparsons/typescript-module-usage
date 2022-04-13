import { TypescriptParser } from "typescript-parser";

const commandArguments = process.argv.slice(2);

// const data = require("./tsconfig.json");
// console.log(data);

const parser = new TypescriptParser();

const getInternalImports = (parsed) => {
  const importsUsed = [];

  parsed.forEach((element) => {
    element.imports.forEach((importObj) => {
      const { libraryName } = importObj;
      if (
        // @todo pull out of config
        libraryName.includes("@images") ||
        libraryName.includes("@utils") ||
        libraryName.includes("@Simpsons")
      ) {
        importsUsed.push(importObj);
      }
    });
  });

  return importsUsed;
};

const groupAndCountImports = (imports) => {
  const groupedAndCounted = [];

  imports.forEach(({ libraryName }) => {
    groupedAndCounted[libraryName]
      ? groupedAndCounted[libraryName]++
      : (groupedAndCounted[libraryName] = 1);
  });

  return groupedAndCounted;
};

function run() {
  return parser
    .parseFiles(
      [
        // @todo how do we get this list?
        // we need this complete list to see what files have zero import
        // exclude tests/stories/mocks/json/_ etc
        // "src/pages/index.tsx",
        // "src/pages/404.tsx",
        // "src/Components/Simpsons/Frame/Frame.tsx",
      ],
      "./" // @todo pull out of config
    )
    .then((parsed) => {
      const internalImports = getInternalImports(parsed);
      const groupedAndCounted = groupAndCountImports(internalImports);
      // if output var, write to file
      console.log("groupedAndCounted", groupedAndCounted);
      return groupedAndCounted;
    });
}

export default {
  run,
};
