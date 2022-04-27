export type Config = {
  baseUrl: string;
  paths: {
    [key: string]: string[];
  };
  filePath: string;
};

export type Output = {
  libraryName: string;
  count: number;
};
