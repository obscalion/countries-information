class SearchBar extends HTMLElement {
  constructor() {
    super();
    this._shadowDOM = this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  set clickEvent(event) {
    this._clickEvent = event;
    this.render();
  }

  get value() {
    return this._shadowDOM.querySelector('#searchElement').value;
  }

  render() {
    this._shadowDOM.innerHTML = `
            <style>
            #searchContainer {
                position: relative;
                margin: auto;
                margin-top: 50px;
                max-width: 700px;
                transition: 1s;
            }
            
            #searchContainer:focus-within {
                transform: scale(1.2);
                transition: 1s;
            }
            
            #searchElement {
              color: #444;
              font-size: 18px;
              margin-top: 5px;
              float: left;
              padding: 10px 130px 10px 20px;
              width: 100%;
              outline: none;
            }
            
            #searchButton {
                font-size: 18px;
                position: absolute;
                padding: 12px 20px 12px 20px;
                top: 6px;
                right: 0;
                width: 100px;
                color: white;
                background-color: #e94100;
                overflow: hidden;
                cursor: pointer;
                border: none;
            }
            
            #searchButton:hover {
              background-color: #b84300b6;
            }

            @media screen and (max-width: 600px) {

                #searchContainer {
                  transform: scale(.8);
                }
                #searchContainer:focus-within {
                  transform: scale(.9);
                }
              
                #searchElement {
                  padding: 5px 100px 5px 10px;
                }
              
                #searchButton {
                  padding: 7px 5px;
                }
              }
            </style>
        `;
    this._shadowDOM.innerHTML += `
        <div id="searchContainer">
            <input placeholder="Country name" id="searchElement" type="search">
            <button id="searchButton" type="submit">Search</button>
        </div>
        `;

    this._shadowDOM.querySelector('#searchButton').addEventListener('click', this._clickEvent);
  }
}

customElements.define('search-bar', SearchBar);
