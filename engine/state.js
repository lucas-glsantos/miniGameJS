export class GameState {
    static STATES = Object.freeze({
        BOOT: "BOOT",
        MENU: "MENU",
        LOADING: "LOADING",
        BATTLE: "BATTLE",
        PLAYER_TURN: "PLAYER_TURN",
        ENEMY_TURN: "ENEMY_TURN",
        RESULT: "RESULT"
    });

    // Estado inicial sem loading
    static #state = GameState.STATES.BOOT;
    static #observers = new Set();

    static set(newState) {
        if (!Object.values(this.STATES).includes(newState)) {
            console.warn("Invalid GameState:", newState);
            return;
        }

        if (this.#state === newState) return;

        this.#state = newState;
        this.#observers.forEach(fn => fn(this.#state));
    }

    static get() {
        return this.#state;
    }

    static subscribe(fn) {
        this.#observers.add(fn);
        return () => this.#observers.delete(fn);
    }

    static reset() {
        this.#state = GameState.STATES.BOOT;
    }
}