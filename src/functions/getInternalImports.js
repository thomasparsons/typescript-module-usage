//
const getInternalImports = (config, parsed) => {
  const importsUsed = [];

  const { paths } = config;

  parsed.forEach((element) => {
    element.imports.forEach((importObj) => {
      const { libraryName } = importObj;
      if (paths.some((path) => libraryName.includes(path))) {
        importsUsed.push(importObj);
      }
    });
  });

  return importsUsed;
};

export default getInternalImports;
