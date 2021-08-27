import './country-item';

class CountryList extends HTMLElement {
  constructor() {
    super();
    this._shadowDOM = this.attachShadow({ mode: 'open' });
  }

  set countries(countries) {
    this._countries = countries;
    this.render();
  }

  render() {
    this._shadowDOM.innerHTML = '';
    this._countries.forEach((country) => {
      const countryItemElement = document.createElement('country-item');
      countryItemElement.country = country;

      this._shadowDOM.appendChild(countryItemElement);
    });
  }

  renderError(message) {
    this._shadowDOM.innerHTML = `
    <style>
    .placeholder {
        font-weight: lighter;
        color: rgba(0,0,0,0.5);
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }
    </style>`;
    this._shadowDOM.innerHTML += `<h2 class="placeholder">${message}</h2>`;
  }
}

customElements.define('country-list', CountryList);
