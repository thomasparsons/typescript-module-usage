import { Config } from "./types";

const getMappedImports = (config: Config, files: string[]) => {
  if (files.length === 0) {
    return [];
  }

  const mappedImports: string[] = [];

  files.forEach((fileObject) => {
    Object.keys(config.paths).forEach((path) => {
      const value = config.paths[path][0].replace("/*", "");
      if (fileObject.includes(value)) {
        const filePathWithoutWildCard = fileObject.replace(
          value,
          path.replace("/*", "")
        );
        const filPathWithoutFileType = filePathWithoutWildCard
          .replace(".tsx", "")
          .replace(".ts", "")
          .replace(".jsx", "")
          .replace(".js", "");
        mappedImports.push(filPathWithoutFileType);
      }
    });
  });

  return mappedImports;
};

export default getMappedImports;
