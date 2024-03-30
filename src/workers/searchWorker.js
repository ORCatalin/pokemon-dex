self.onmessage = function (event) {
  const { data, searchText } = event.data;

  if (searchText.length > 2) {
    let result = data.filter(pokemon => pokemon.name.includes(searchText));
    return self.postMessage({ result });
  }

  return self.postMessage({ result: data.slice(0, 3) });
};
