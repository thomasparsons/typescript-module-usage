#! /usr/bin/env node
import path from "path";
import typescriptModuleUsage from "./functions/typescriptModuleUsage";
import { Config } from "./types";

console.log("-- Starting --");
const [, , config] = process.argv;

(async () => {
  try {
    // paramValidation(url);
    const jsonData: Config = require(path.join(process.cwd(), config));
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
