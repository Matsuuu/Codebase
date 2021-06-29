class MyCounter extends HTMLButtonElement {
    constructor() {
        super();
        this.count = 0;

        const counterText = document.createElement("p");
        counterText.innerHTML = `I have been clicked <span></span> times!`;

        const counterField = counterText.querySelector("span");
        counterField.innerText = this.count;
        this.parentNode.insertBefore(counterText, this);

        this.addEventListener("click", () => {
            this.count++;
            console.log("I've been clicked " + this.count + " times!");
            counterField.innerText = this.count;
        });
    }
}

customElements.define("my-counter", MyCounter, { extends: "button" });
