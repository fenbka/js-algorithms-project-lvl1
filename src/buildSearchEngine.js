const buildSearchEngine = (docs) => {
  const search = (searchString) => docs
    .filter((doc) => doc.text.includes(` ${searchString} `))
    .map((doc) => doc.id);

  return {
    search,
  };
};

export default buildSearchEngine;
