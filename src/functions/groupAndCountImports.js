//
const groupAndCountImports = (imports) => {
  const groupedAndCounted = [];

  imports.forEach(({ libraryName }) => {
    groupedAndCounted[libraryName]
      ? groupedAndCounted[libraryName]++
      : (groupedAndCounted[libraryName] = 1);
  });

  return groupedAndCounted;
};

export default groupAndCountImports;
