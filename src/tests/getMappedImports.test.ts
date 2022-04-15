//
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

  it("replaces the file path with the applicable paths", () => {
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
});
