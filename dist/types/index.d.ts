declare class CounterApp {
    count: number;
    button: HTMLButtonElement;
    display: HTMLDivElement;
    constructor(rootId: string);
    incrementCount(): void;
    updateDisplay(): void;
}
