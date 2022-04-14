#! /usr/bin/env node
import typescriptModuleUsage from "./functions/typescriptModuleUsage";

console.log("-- Starting --");
const [, , config] = process.argv;

(async () => {
  try {
    // paramValidation(url);
    const jsonData = require(config);
    // configValidation(jsonData);
    await typescriptModuleUsage.run(jsonData);

    console.log(" -- Finished -- ");
  } catch (e) {
    console.error(" -- Something went wrong -- ");
    console.error(e);
  } finally {
    process.exit(0);
  }
})();
