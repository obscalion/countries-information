class DataSource {
  static searchCountry(keyword) {
    if (keyword !== '') {
      return fetch(`https://restcountries.eu/rest/v2/name/${keyword}`)
        .then((response) => response.json())
        .then((responseJson) => {
          if (responseJson.status === 404) {
          // eslint-disable-next-line prefer-promise-reject-errors
            return Promise.reject(`${keyword} is not found!`);
          }
          return Promise.resolve(responseJson);
        });
    }
    return fetch('https://restcountries.eu/rest/v2/all')
      .then((response) => response.json())
      .then((responseJson) => {
        if (responseJson.status === 404) {
          // eslint-disable-next-line prefer-promise-reject-errors
          return Promise.reject('Data is not found!');
        }
        return Promise.resolve(responseJson);
      });
  }
}

export default DataSource;