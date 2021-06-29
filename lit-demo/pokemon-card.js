import { getPokemon } from 'pokemon-api';
import { render, html } from 'lit';

export class PokemonCard extends HTMLElement {
    constructor() {
        super();

        this.pokemon = null;
        this.set = null;
        this.large = false;

        this._requestedRender = false;

        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.renderCard();
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (oldValue === newValue) return;

        console.log('Attribute Changed: ', { name, oldValue, newValue });
        this[name] = newValue === '' ? true : newValue;
        this.requestRender();
    }

    requestRender() {
        this._requestedRender = true;
        window.requestAnimationFrame(() => {
            this._requestedRender = false;
            this.renderCard();
        });
    }

    static get observedAttributes() {
        return ['pokemon', 'set', 'large'];
    }

    sayFoo() {
        console.log("foo", this.pokemon);
    }

    async renderCard() {
        const cardInfo = await getPokemon({
            name: this.pokemon,
            'set.id': this.set,
        });
        if (!cardInfo || cardInfo.data.length <= 0) return; // No card

        const firstCard = cardInfo.data[0];

        render(
            html`
                <style>
                    :host {
                        display: block;
                    }
                </style>
                <p>Pokemon: ${this.pokemon}</p>
                <p>From set: ${this.set}</p>
                <img @click=${this.sayFoo} id="card-image" src="${this.large ? firstCard.images.large : firstCard.images.small}" />
            `,
            this.shadowRoot,
        );
    }
}

customElements.define('pokemon-card', PokemonCard);
