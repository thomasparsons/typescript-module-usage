import getMappedImports from "../getMappedImports";

// files [
//   'src/cli.ts',
//   'src/getFiles.ts',
//   'src/getInternalImports.ts',
//   'src/getMappedImports.ts',
//   'src/groupAndCountImports.ts',
//   'src/output.ts',
//   'src/types.ts',
//   'src/typescriptModuleUsage.ts'
// ]

describe("getMappedImports function", () => {
  it("returns empty array if files array is empty", () => {
    const mockConfig = {
      baseUrl: "",
      filePath: "",
      paths: { "@src/*": ["src/*"] },
    };
    const mockFiles = [];
    expect(getMappedImports(mockConfig, mockFiles).length).toBe(0);
  });

  it("replaces the file path with the applicable paths with .ts files", () => {
    const mockConfig = {
      baseUrl: "",
      filePath: "",
      paths: { "@src/*": ["src/*"] },
    };
    const mockFiles = ["src/cli.ts", "src/getFiles/getFiles.ts"];

    const mappedImports = getMappedImports(mockConfig, mockFiles);
    expect(mappedImports[0]).toBe("@src/cli");
    expect(mappedImports[1]).toBe("@src/getFiles/getFiles");
  });

  it("replaces the file path with the applicable paths with .tsx files", () => {
    const mockConfig = {
      baseUrl: "",
      filePath: "",
      paths: { "@src/*": ["src/*"] },
    };
    const mockFiles = ["src/cli.tsx", "src/getFiles/getFiles.tsx"];

    const mappedImports = getMappedImports(mockConfig, mockFiles);
    expect(mappedImports[0]).toBe("@src/cli");
    expect(mappedImports[1]).toBe("@src/getFiles/getFiles");
  });

  it("only replaces the end of the file and not in the middle", () => {
    const mockConfig = {
      baseUrl: "",
      filePath: "",
      paths: { "@src/*": ["src/*"] },
    };
    const mockFiles = ["src/ctsxli.tsx", "src/getFiles/gtsxetFiles.tsx"];

    const mappedImports = getMappedImports(mockConfig, mockFiles);
    expect(mappedImports[0]).toBe("@src/ctsxli");
    expect(mappedImports[1]).toBe("@src/getFiles/gtsxetFiles");
  });
});
