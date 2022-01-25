import { LitElement, html } from "lit";
import { customElement } from 'lit/decorators.js';

@customElement( 'app' )
export class App extends LitElement {
    render() {
        return html`
            <h1>Hello World!</h1>
        `;
    }
}