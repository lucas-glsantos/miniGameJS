export class GameState {
    static current = "MENU";
    static observers = [];

    static set(state) {
        this.current = state;
        this.observers.forEach(fn => fn(state));
    }

    static get() {
        return this.current;
    }

    static subscribe(fn) {
        this.observers.push(fn);
    }
}
