import { LitElement, html, css } from 'lit-element';

export class AppLit  extends LitElement {

  static get is() {
    return 'app-lit.js';
  }

  static get styles() {
    return css`
      * {
        font-family: sans-serif;
        font-style: italic;
      }

      .container {
        border-radius: 10px;
        width:350px;
        height: 400px;
        text-align: center;
        background-color: rgba(255,255,255,.3)
      }

      h2 {
        color: #fff0f0;
        padding-top: 4vh;
      }

      img{ 
        width: 60px;
        height: 60px;
        opacity: 0.5;
      }

      input {
        width: 90%;
        height: 30px;
        margin-top: 4vh;
        border: none;
        color: white;
        border-bottom: solid 1px #838383;
        background-color: rgba(0,0,0,.3) 
      }

      button {
        width: 60%;
        height: 40px;
        border: none;
        border-radius: 6px; 
        margin-top: 4vh;
        color: white;
        font-size: 16px;
        background: linear-gradient(270deg, rgba(30,0,68,1) 7%, rgba(44,2,86,1) 26%, rgba(22,55,107,1) 61%, rgba(8,66,129,1) 95%);
      }

      button:hover {
        cursor: pointer;
        scale: 1.1;
        transition: all .4s;
    background: linear-gradient(126deg, rgba(51,0,116,1) 7%, rgba(75,21,131,1) 26%, rgba(14,53,113,1) 61%, rgba(0,39,78,1) 95%);
      }
    `;
  }
  static get properties() {
    return {};
  }

//   constructor() {
//     super();
//   }

  render() {
    return html`
      <div class="container-filter">
        <div class="container">
            <h2>Login LitElement</h2>
            <img src="../assets/usuario-de-perfil.png">
            <input id="email" type="email" placeholder="E-mail"></input>
            <input id="pass" type="password" placeholder="Password"></input>

            <button @click="${this._login}">Sing in</button>
        </div>
      </div>

        <!--         <></>       -->
    `;
  }

  _login () {
    const email = this.shadowRoot.querySelector('#email').value;
    const pass = this.shadowRoot.querySelector('#pass').value;

    if (!!email && !!pass) {
        this.dispatchEvent(new CustomEvent('sing', {
            detail: { login: true },
            bubbles: true, composed: true
        }) );
    }
  }
}

 

customElements.define('app-lit', AppLit);