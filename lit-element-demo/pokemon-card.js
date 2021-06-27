import { css, html, LitElement, render } from 'lit';
import { getPokemon } from 'pokemon-api';

export class PokemonCard extends LitElement {
    static get properties() {
        return {
            pokemon: { type: String, reflect: true },
            set: { type: String, reflect: true },
            large: { type: Boolean, reflect: true },
            card: { type: Object },
            fetchCard: { type: Boolean }
        };
    }

    constructor() {
        super();

        this.pokemon = null;
        this.set = null;
        this.large = false;
        this.card = null;
        this.fetchCard = false;
    }

    updated(_changedProperties) {
        if (this.fetchCard && (_changedProperties.has('pokemon') || _changedProperties.has('set'))) {
            this.updateCard();
        }
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

    handleSize(e) {
        this.large = e.target.checked;
    }

    render() {
        if (!this.card) return html`<p>No pokemon found</p>`;
        return html`
            <p>Pokemon: ${this.pokemon}</p>
            <p>From set: ${this.set}</p>
            <input type="checkbox" ?checked=${this.large} @input=${this.handleSize}>Enlarge</button>
            <img id="card-image" src="${this.large ? this.card.images.large : this.card.images.small}" />
        `;
    }

    static get styles() {
        return css`
            :host {
                display: block;
            }

            img {
                width: 100%;
            }
        `;
    }
}

customElements.define('pokemon-card', PokemonCard);
