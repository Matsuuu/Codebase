import { getPokemon } from "pokemon-api";

const template = document.createElement("template");
template.innerHTML = `
<style>
:host {
    display: block;
}
</style>

<img />
`;

class PokemonCard extends HTMLElement {
    constructor() {
        super();

        this.attachShadow({ mode: "open" });
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    connectedCallback() {
        this.renderCard();
    }

    attributeChangedCallback(name, oldValue, newValue) {
        console.log("Attribute changed", { name, oldValue, newValue });
        this.renderCard();
    }

    static get observedAttributes() {
        return ["name", "set"];
    }

    async renderCard() {
        const imageTag = this.shadowRoot.querySelector("img");
        const cardInfo = await getPokemon({
            name: this.getAttribute("name"),
            "set.id": this.getAttribute("set"),
        });
        console.log(cardInfo);

        const firstCard = cardInfo.data[0];
        imageTag.src = firstCard.images.small;
    }
}

customElements.define("pokemon-card", PokemonCard);
