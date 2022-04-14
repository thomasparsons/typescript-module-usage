//
const getInternalImports = ({ paths }, parsed) => {
  if (!parsed.length) {
    return [];
  }

  const importsUsed = [];

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
