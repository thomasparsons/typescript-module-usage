//
const groupAndCountImports = (files, imports) => {
  const groupedAndCounted = [];

  // @todo these files aren't normalised yet to the paths, so wont work for the missing/unused pieces
  // files.map((f) => (groupedAndCounted[f] = 0));

  imports.forEach(({ libraryName }) => {
    groupedAndCounted[libraryName]
      ? groupedAndCounted[libraryName]++
      : (groupedAndCounted[libraryName] = 1);
  });

  // @todo sort
  // return groupedAndCounted.sort((a, b) => a < b);
  return groupedAndCounted;
};

export default groupAndCountImports;
