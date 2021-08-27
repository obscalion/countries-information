import '../components/country-list';
import '../components/country-item';
import '../components/search-bar';
import DataSource from '../data/data-source';

const main = () => {
  const searchElement = document.querySelector('search-bar');
  const countryListElement = document.querySelector('country-list');

  const renderResult = (results) => {
    countryListElement.countries = results;
  };

  const fallbackResult = (message) => {
    countryListElement.renderError(message);
  };

  const onButtonSearchClicked = async () => {
    try {
      const result = await DataSource.searchCountry(searchElement.value);
      renderResult(result);
    } catch (message) {
      fallbackResult(message);
    }
  };
  searchElement.clickEvent = onButtonSearchClicked;
};

export default main;
