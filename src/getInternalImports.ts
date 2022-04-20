import { File, Import } from "typescript-parser";

const getInternalImports = ({ paths }, parsed: File[]) => {
  if (!parsed.length) {
    return [];
  }

  const importsUsed: Import[] = [];

  parsed.forEach((element) => {
    element.imports.forEach((importObj) => {
      const { libraryName } = importObj;
      if (
        Object.keys(paths).some((path) =>
          libraryName.includes(path.replace("/*", ""))
        )
      ) {
        importsUsed.push(importObj);
      }
    });
  });

  return importsUsed;
};

export default getInternalImports;
