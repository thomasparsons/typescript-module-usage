//
import { File } from "typescript-parser";
import getInternalImports from "../getInternalImports";

describe("getInternalImports function", () => {
  it("returns an empty array when parsed is an empty array", () => {
    const mockConfig = {
      paths: [],
    };
    const mockParsed = [];
    expect(getInternalImports(mockConfig, mockParsed).length).toBe(0);
  });

  it("if no paths are there, nothing is returned", () => {
    const mockConfig = {
      paths: [],
    };
    const mockParsed = [
      {
        filePath: "src/currentFile",
        imports: [{ libraryName: "@import/one" }],
      },
    ] as File[];
    expect(getInternalImports(mockConfig, mockParsed).length).toBe(0);
  });

  describe("uses paths", () => {
    it("returns back import library names that match the exact paths", () => {
      const mockConfig = {
        paths: { "@import/one": "src/import/one" },
      };
      const mockParsed = [
        {
          filePath: "src/currentFile",
          imports: [{ libraryName: "@import/one" }],
        },
      ] as File[];
      expect(getInternalImports(mockConfig, mockParsed)[0]).toEqual({
        libraryName: "@import/one",
      });
    });

    it("returns back import library names that match the paths", () => {
      const mockConfig = {
        paths: { "@import": "src/import" },
      };
      const mockParsed = [
        {
          filePath: "src/currentFile",
          imports: [{ libraryName: "@import/one" }],
        },
      ] as File[];
      expect(getInternalImports(mockConfig, mockParsed)[0]).toEqual({
        libraryName: "@import/one",
      });
    });

    it("returns back import library names that string match", () => {
      const mockConfig = {
        paths: { "port/one": "src/import" },
      };
      const mockParsed = [
        {
          filePath: "src/currentFile",
          imports: [{ libraryName: "@import/one" }],
        },
      ] as File[];
      expect(getInternalImports(mockConfig, mockParsed)[0]).toEqual({
        libraryName: "@import/one",
      });
    });

    it("returns back import library names when they're wild carded", () => {
      const mockConfig = {
        paths: { "@import/one/*": "src/import" },
      };
      const mockParsed = [
        {
          filePath: "src/currentFile",
          imports: [{ libraryName: "@import/one" }],
        },
      ] as File[];
      expect(getInternalImports(mockConfig, mockParsed)[0]).toEqual({
        libraryName: "@import/one",
      });
    });
  });
});
