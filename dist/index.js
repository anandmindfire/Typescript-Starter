class CounterApp {
    constructor(rootId) {
        this.count = 0;
        const root = document.getElementById(rootId);
        if (!root) {
            throw new Error(`Root element with id '${rootId}' not found.`);
        }
        this.display = document.createElement("div");
        this.display.style.fontSize = "20px";
        this.display.style.marginBottom = "10px";
        this.updateDisplay();
        this.button = document.createElement("button");
        this.button.textContent = "Increase Count";
        this.button.style.padding = "10px 20px";
        this.button.style.fontSize = "16px";
        this.button.onclick = this.incrementCount.bind(this);
        root.appendChild(this.display);
        root.appendChild(this.button);
    }
    incrementCount() {
        this.count++;
        this.updateDisplay();
    }
    updateDisplay() {
        this.display.textContent = `Current Count: ${this.count}`;
    }
}
new CounterApp("root");
