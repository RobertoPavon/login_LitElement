import { LitElement, html, css } from 'lit';
import {AppLit} from './app-lit' ;


class LoginLit extends LitElement {
  static properties = {
    success: { type : Boolean }
  }

  static styles = css`
    * {
      padding: 0;
      margin: 0;
      box-sizing: border-box;
      font-family: sans-serif;
      font-style: italic;
      color: white;
      }

    app-lit {
      display: flex;
      justify-content: center;
      margin-top: 10%;
    }
  `;



  render() {
    return html`
      ${ this.success ? 
      html`<h1>Welcome</h1>` : 
      html`<app-lit @sing="${ this._hiddenLogin }"></app-lit>`
       }
    `;
  }

  _hiddenLogin (){
    this.success = true;
  }

}

customElements.define('login-lit', LoginLit);