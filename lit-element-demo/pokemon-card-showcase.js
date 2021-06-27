import { css, html, LitElement } from 'lit';
import { getPokemon } from 'pokemon-api';

export class PokemonCardShowcase extends LitElement {
    static get properties() {
        return {
            cards: { type: Array },
            pokemon: { type: String },
            hoveredCardId: { type: String },
        };
    }

    constructor() {
        super();
        this.pokemon = 'NO_POKEMON';
        this.cards = [];
        this.hoveredCardId = null;
    }

    updated(_changedProperties) {
        if (_changedProperties.has('pokemon') && _changedProperties.get('pokemon') !== this.pokemon) {
            this._getCards();
        }
    }

    async _getCards() {
        const res = await getPokemon({ name: this.pokemon });
        this.cards = res.data;
    }

    _handleClick(e) {
        e.target.toggleAttribute('large');
    }

    _onHoverStart(e) {
        this.hoveredCardId = e.detail;
    }

    _onHoverEnd(e) {
        this.hoveredCardId = null;
    }

    render() {
        return html`<p>All cards of the pokemon ${this.pokemon}</p>

            ${this.cards?.map(
            card => html`
                    <pokemon-card
                        pokemon=${card.name}
                        set=${card.set.name}
                        ?fetchCard=${false}
                        .card=${card}
                        @click=${this._handleClick}
                        realistic
                        @pokemon-hover-start=${this._onHoverStart}
                        @pokemon-hover-end=${this._onHoverEnd}
                        ?opaque=${this.hoveredCardId && this.hoveredCardId !== card.id}
                    ></pokemon-card>
                `,
        )} `;
    }

    static get styles() {
        return css`
            :host {
                display: flex;
                flex-wrap: wrap;
            }
            pokemon-card {
                width: 200px;
            }

            pokemon-card[large] {
                width: 500px;
            }

        pokemon-card[opaque] {
            opacity: 0.3;
        }
        `;
    }
}

customElements.define('pokemon-card-showcase', PokemonCardShowcase);
