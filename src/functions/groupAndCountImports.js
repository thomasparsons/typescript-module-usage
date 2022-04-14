//
const groupAndCountImports = (config, files, imports) => {
  const groupedAndCounted = [];

  /*
  // add Zero Used files in
  files.map((f) => {
    console.log(config.paths);

    // if f includes one of the config path values,
    // then swap everything up to the end of that value with the
    // config path key that it matches with
    const mappedFileName = f;
    groupedAndCounted[mappedFileName] = 0;
  });
  */

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
