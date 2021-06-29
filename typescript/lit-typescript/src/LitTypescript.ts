import { html, css, LitElement, property } from 'lit-element';

export class LitTypescript extends LitElement {
  static styles = css`
    :host {
      display: block;
      padding: 25px;
      color: var(--lit-typescript-text-color, #000);
    }
  `;

  @property({ type: String }) title = 'Hey there';

  @property({ type: Number }) counter = 5;

  __increment() {
    this.counter += 1;
  }

  render() {
    return html`
      <slot name="greeting"><h2>${this.title} Nr. ${this.counter}!</h2></slot>
      <button @click=${this.__increment}>increment</button>
    `;
  }
}
