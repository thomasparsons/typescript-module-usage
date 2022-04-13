#! /usr/bin/env node
import {typescriptModuleUsage} from "./functions/typescriptModuleUsage";

console.log("-- Starting --");
const [, , url] = process.argv;

(async () => {
  try {
    // paramValidation(url);
    await typescriptModuleUsage();

    console.log(" -- Finished -- ");
  } catch (e) {
    console.error(" -- Something when wrong -- ");
    console.error(e);
  } finally {
    process.exit(0);
  }
})();
