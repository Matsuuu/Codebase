class CounterButton extends HTMLButtonElement {
    constructor() {
        super();
        this.count = 0;

        const counterText = document.createElement("p");
        counterText.innerHTML = `I've been clicked <span>${this.count}</span> times`;

        const counterField = counterText.querySelector("span");

        this.parentNode.insertBefore(counterText, this);

        this.addEventListener("click", () => {
            this.count++;
            console.log(`I've been clicked ${this.count} times`);
            counterField.innerText = this.count.toString();
        });
    }
}

customElements.define("counter-button", CounterButton, { extends: "button" });
