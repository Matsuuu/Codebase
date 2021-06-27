import { getPokemon } from "pokemon-api";

const template = document.createElement("template");
template.innerHTML = `
<style>
:host {
    display: block;
}
</style>

<img id="card-image" src="" />
`;

export class PokemonCard extends HTMLElement {
    constructor() {
        super();

        this.pokemon = null;
        this.set = null;
        this.large = false;

        const root = this.attachShadow({ mode: "open" });
        root.appendChild(template.content.cloneNode(true));
    }

    connectedCallback() {
        this.renderCard();
    }

    attributeChangedCallback(name, oldValue, newValue) {
        console.log("Attribute Changed: ", { name, oldValue, newValue });
        this[name] = newValue === "" ? true : newValue;
    }

    static get observedAttributes() {
        return ["pokemon", "set", "large"];
    }

    async renderCard() {
        /** @type HTMLImageElement */
        const cardImage = this.shadowRoot.querySelector("#card-image");
        const cardInfo = await getPokemon({ name: this.pokemon, "set.id": this.set });
        if (!cardInfo || cardInfo.data.length <= 0) return; // No card

        const firstCard = cardInfo.data[0];
        cardImage.src = this.large ? firstCard.images.large : firstCard.images.small;
    }
}

customElements.define("pokemon-card", PokemonCard);
