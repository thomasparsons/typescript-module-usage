//
import { Import } from "typescript-parser";
import groupAndCountImports from "../groupAndCountImports";
import { Config } from "../types";

const mockConfig = {} as Config;
const mockFiles = [];

describe("groupAndCountImports function", () => {
  it("returns back an empty object if no imports are passed in", () => {
    const mockImports = [];
    expect(groupAndCountImports(mockConfig, mockFiles, mockImports)).toEqual(
      []
    );
  });

  describe("counts the imports", () => {
    it("returns back an object with the imports counted, unique imports", () => {
      const mockImports = [
        { libraryName: "@import/import-one" },
        { libraryName: "@import/import-two" },
        { libraryName: "@import/import-three" },
      ] as Import[];
      expect(groupAndCountImports(mockConfig, mockFiles, mockImports)).toEqual([
        { libraryName: "@import/import-one", count: 1 },
        { libraryName: "@import/import-two", count: 1 },
        { libraryName: "@import/import-three", count: 1 },
      ]);
    });

    it("returns back an object with the imports counted, multiple of the same imports", () => {
      const mockImports = [
        { libraryName: "@import/import-one" },
        { libraryName: "@import/import-one" },
        { libraryName: "@import/import-two" },
      ] as Import[];
      expect(groupAndCountImports(mockConfig, mockFiles, mockImports)).toEqual([
        { libraryName: "@import/import-one", count: 2 },
        { libraryName: "@import/import-two", count: 1 },
      ]);
    });

    it("returns back an object with the imports counted, multiple of the same imports lots", () => {
      const mockImports = [
        { libraryName: "@import/import-one" },
        { libraryName: "@import/import-one" },
        { libraryName: "@import/import-one" },
        { libraryName: "@import/import-one" },
        { libraryName: "@import/import-two" },
        { libraryName: "@import/import-two" },
        { libraryName: "@import/import-two" },
        { libraryName: "@import/import-two" },
        { libraryName: "@import/import-two" },
        { libraryName: "@import/import-two" },
        { libraryName: "@import/import-two" },
        { libraryName: "@import/import-three" },
        { libraryName: "@import/import-three" },
        { libraryName: "@import/import-three" },
        { libraryName: "@import/import-three" },
        { libraryName: "@import/import-three" },
        { libraryName: "@import/import-three" },
      ] as Import[];
      expect(groupAndCountImports(mockConfig, mockFiles, mockImports)).toEqual([
        { libraryName: "@import/import-two", count: 7 },
        { libraryName: "@import/import-three", count: 6 },
        { libraryName: "@import/import-one", count: 4 },
      ]);
    });
  });

  describe("orders the imports", () => {
    it("orders by most used first", () => {
      const mockImports = [
        { libraryName: "@import/import-four" },
        { libraryName: "@import/import-one" },
        { libraryName: "@import/import-two" },
        { libraryName: "@import/import-two" },
        { libraryName: "@import/import-one" },
        { libraryName: "@import/import-three" },
        { libraryName: "@import/import-five" },
        { libraryName: "@import/import-three" },
        { libraryName: "@import/import-one" },
        { libraryName: "@import/import-two" },
        { libraryName: "@import/import-three" },
        { libraryName: "@import/import-three" },
        { libraryName: "@import/import-five" },
        { libraryName: "@import/import-one" },
        { libraryName: "@import/import-two" },
        { libraryName: "@import/import-two" },
        { libraryName: "@import/import-three" },
        { libraryName: "@import/import-two" },
        { libraryName: "@import/import-two" },
        { libraryName: "@import/import-three" },
      ] as Import[];
      expect(
        groupAndCountImports(mockConfig, mockFiles, mockImports)
      ).toStrictEqual([
        { libraryName: "@import/import-two", count: 7 },
        { libraryName: "@import/import-three", count: 6 },
        { libraryName: "@import/import-one", count: 4 },
        { libraryName: "@import/import-five", count: 2 },
        { libraryName: "@import/import-four", count: 1 },
      ]);
    });

    it("orders by most used first with longer import names", () => {
      const mockImports = [
        { libraryName: "@import/import-four" },
        { libraryName: "@import/import-one" },
        { libraryName: "@import/import-two" },
        { libraryName: "@import/import-two" },
        { libraryName: "@import/import-one" },
        { libraryName: "@import/import-three" },
        { libraryName: "@import/import-five" },
        { libraryName: "@import/import-three" },
        { libraryName: "@import/import-one" },
        { libraryName: "@import/import-two" },
        { libraryName: "@import/import-three" },
        { libraryName: "@import/import-three" },
        { libraryName: "@import/import-five" },
        { libraryName: "@import/import-one" },
        { libraryName: "@import/import-two" },
        { libraryName: "@import/import-two" },
        { libraryName: "@import/import-three" },
        { libraryName: "@import/import-two" },
        { libraryName: "@import/import-two" },
        { libraryName: "@import/import-three" },
        { libraryName: "@import/import-two/hello" },
        { libraryName: "@import/import-three/hello" },
        { libraryName: "@import/import-two/hello" },
        { libraryName: "@import/import-two/hello" },
        { libraryName: "@import/import-three/hello" },
      ] as Import[];
      expect(
        groupAndCountImports(mockConfig, mockFiles, mockImports)
      ).toStrictEqual([
        { libraryName: "@import/import-two", count: 7 },
        { libraryName: "@import/import-three", count: 6 },
        { libraryName: "@import/import-one", count: 4 },
        { libraryName: "@import/import-two/hello", count: 3 },
        { libraryName: "@import/import-five", count: 2 },
        { libraryName: "@import/import-three/hello", count: 2 },
        { libraryName: "@import/import-four", count: 1 },
      ]);
    });
  });
});
