export function filterCharacters(searchString, response) {
  if (response === undefined) {
    return [];
  }
  return response.results.filter((response) => {
    return response.name
      .toLocaleLowerCase()
      .includes(searchString.toLocaleLowerCase());
  });
}
