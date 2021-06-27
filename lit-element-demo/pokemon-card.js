import { css, html, LitElement, render } from 'lit';
import { getPokemon } from 'pokemon-api';

export class PokemonCard extends LitElement {
    static get properties() {
        return {
            pokemon: { type: String, reflect: true },
            set: { type: String, reflect: true },
            large: { type: Boolean, reflect: true },
            card: { type: Object },
            fetchCard: { type: Boolean },
            realistic: { type: Boolean, reflect: true },
            opaque: { type: Boolean, reflect: true }
        };
    }

    constructor() {
        super();

        this.pokemon = null;
        this.set = null;
        this.large = false;
        this.card = null;
        this.fetchCard = false;
        this.realistic = false;
        this.opaque = false;
    }

    updated(_changedProperties) {
        if (this.fetchCard && (_changedProperties.has('pokemon') || _changedProperties.has('set'))) {
            this.updateCard();
        }
    }

    firstUpdated() {
        this.addEventListener("mouseenter", e => {
            this.dispatchEvent(new CustomEvent("pokemon-hover-start", { detail: this.card.id }));
        });
        this.addEventListener("mouseleave", e => {
            this.dispatchEvent(new CustomEvent("pokemon-hover-end"));
        });

    }

    async updateCard() {
        if (!this.pokemon && !this.set) return;

        const cardInfo = await getPokemon({
            name: this.pokemon,
            'set.id': this.set,
        });
        if (!cardInfo || cardInfo.data.length <= 0) return; // No card

        this.card = cardInfo.data[0];
    }

    render() {
        if (!this.card) return html`<p>No pokemon found</p>`;
        return html`
            ${this.large
                ? html`
                      <p>Pokemon: ${this.pokemon}</p>
                      <p>From set: ${this.set}</p>
                  `
                : ''}
            <img id="card-image" src="${this.large ? this.card.images.large : this.card.images.small}" />
        `;
    }

    static get styles() {
        return css`
            :host {
                display: block;
                cursor: pointer;
                transition: 200ms ease-in-out;
            }

            :host([realistic]) {
                margin: 0.5rem;

            }

            :host([realistic]:hover) {
                filter: drop-shadow(2px 4px 6px black);
            }

            img {
                width: 100%;
            }
        `;
    }
}

customElements.define('pokemon-card', PokemonCard);
