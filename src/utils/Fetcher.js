class Fetcher {
  static fetch(url) {
    return fetch(url)
      .then((response) => response.json())
      .then((json) => {
        return json.results;
      });
  }
}

export default Fetcher;
