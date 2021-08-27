class NavBar extends HTMLElement {
  constructor() {
    super();
    this._shadowDOM = this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this._shadowDOM.innerHTML = `
      <style>
        .topnav {
            width: 100%;
            color: #333;
            background-color: #ddd;
            font-size: 16px;
            position: fixed;
            top: 0;
            text-align: center;
            overflow: hidden;
            box-shadow: 10px 10px 20px 0px rgba(0,0,0,0.56);
            -webkit-box-shadow: 10px 10px 20px 0px rgba(0,0,0,0.56);
            -moz-box-shadow: 10px 10px 20px 0px rgba(0,0,0,0.56);
            z-index: 999;
        }
      </style>
      `;

    this._shadowDOM.innerHTML += `
    <div class="topnav" id="myTopnav">
        <h2>Country info app</h2>
    </div>
    `;
  }
}

customElements.define('nav-bar', NavBar);
