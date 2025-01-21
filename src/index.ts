class CounterApp {
    count: number;
    button: HTMLButtonElement;
    display: HTMLDivElement;
  
    constructor(rootId: string) {
      this.count = 0;
  
      // Get the root element
      const root = document.getElementById(rootId);
      if (!root) {
        throw new Error(`Root element with id '${rootId}' not found.`);
      }
  
      // Create display element
      this.display = document.createElement("div");
      this.display.style.fontSize = "20px";
      this.display.style.marginBottom = "10px";
      this.updateDisplay();
  
      // Create button
      this.button = document.createElement("button");
      this.button.textContent = "Increase Count";
      this.button.style.padding = "10px 20px";
      this.button.style.fontSize = "16px";
      this.button.onclick = this.incrementCount.bind(this);
  
      // Append elements to the root
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
  
  // Initialize the app
  new CounterApp("root");
  