class CountryItem extends HTMLElement {
  constructor() {
    super();
    this._shadowDOM = this.attachShadow({ mode: 'open' });
  }

  set country(country) {
    this._country = country;
    this.render();
  }

  // eslint-disable-next-line class-methods-use-this
  defaultValue(value) {
    if (value === '' || value == null) {
      return '-';
    }
    return value;
  }

  render() {
    this._shadowDOM.innerHTML = `
    <style>
      .countryCard {
        display: inline-block;
        box-shadow: 3px 4px 10px 0 rgba(0, 0, 0, 0.2);
        width: 300px;
        height: 550px;
        text-align: center;
        font-family: arial;
        margin: 0 20px 100px;
        transition: .5s;
        position: relative;
        overflow: hidden;
      }
      
      .countryCard:hover {
        transform: scale(1.1);
      }
      
      .flagThumb {
        width: 100%;
        height: 200px;
        object-fit: cover;
      }
      
      .cardInfo {
        height: 270px;
        padding: 20px;
      }
      
      .title {
        min-height: 50px;
        margin-bottom: 30px;
      }
      
      .nameLabel, .capitalLabel {
        margin-bottom: .7em;
      }
      
      .nameLabel {
        color: #333
      }
      
      .capitalLabel {
        color: grey;
        font-size: 16px;
        font-weight: 100;
      }

      .countryTable {
        width: 100%;
      }
      
      .countryTable th{
        color: #2c2c2c;
        float: left;
        padding: 5px 0;
      }
      
      .countryTable td{
        color: #797979;
        float: right;
      }

      .detailBtn {
        border: none;
        outline: 0;
        display: inline-block;
        padding: 8px;
        color: white;
        background-color: #00113f;
        text-align: center;
        cursor: pointer;
        width: 100%;
        font-size: 18px;
        position: absolute;
        left: 0;
        bottom: 0;
        text-decoration: none;
      }
      
      .detailBtn:hover {
        opacity: 0.7;
      }

      @media screen and (max-width: 600px) {
        .countryCard {
            margin: 0;
            transform: scale(.8);
            transition: .5s;
        }
        
        .countryCard:hover {
          transform: scale(.9);
        }
        
        .cardInfo {
          padding: 10px;
        }
      }
    </style>`;
    this._shadowDOM.innerHTML += `
      <div class="countryCard">
        <img class="flagThumb" src="${this._country.flag}" alt="">
        <article class="cardInfo">
          <header class="title">
            <h3 class="nameLabel">${this.defaultValue(this._country.name)}</h3>
            <h4 class="capitalLabel">${this.defaultValue(this._country.capital)}</h4>
          </header>
          <table class="countryTable">
            <tr>
              <th>Calling Code</th>
              <td>${this.defaultValue(this._country.callingCodes[0])}</td>
            </tr>
            <tr>
              <th>Region</th>
              <td>${this.defaultValue(this._country.region)}</td>
            </tr>
            <tr>
              <th>Currency</th>
              <td>${this.defaultValue(this._country.currencies[0].code)}</td>
            </tr>
            <tr>
              <th>Language</th>
              <td>${this.defaultValue(this._country.languages[0].name)}</td>
            </tr>
            <tr>
              <th>Population</th>
              <td>${this.defaultValue(this._country.population.toLocaleString())}</td>
            </tr>
          </table>
        </article>
        <a class="detailBtn" href="https://www.google.com/search?q=${this._country.name}" target="_blank">Detail+</a>
      </div>
    `;
  }
}

customElements.define('country-item', CountryItem);
