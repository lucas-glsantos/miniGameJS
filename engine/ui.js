import { GameState } from "./state.js";


export class UI {
    static #initialized = false;

    static init() {
        if (this.#initialized) return;
        this.#initialized = true;

        // Screens
        this.menu = document.getElementById("menu");
        this.battle = document.getElementById("battle");
        this.result = document.getElementById("result");
        this.loading = document.getElementById("loading");

        // HUD
        this.heroName = document.getElementById("heroName");
        this.heroSprite = document.getElementById("heroSprite");
        this.enemyName = document.getElementById("enemyName");
        this.enemySprite = document.getElementById("enemySprite");
        this.heroLife = document.getElementById("heroLife");
        this.enemyLife = document.getElementById("enemyLife");

        // Logs / Result
        this.log = document.getElementById("mensagem");
        this.resultText = document.getElementById("resultadoFinal");

        GameState.subscribe(this.render.bind(this));
        this.render(GameState.get()); // render inicial
    }

    // SCREEN RENDER
    static render(state) {
        this.#renderScreens(state);
        this.#renderTurnState(state);
    }

    static #renderScreens(state) {
        [
            this.menu,
            this.battle,
            this.result,
            this.loading
        ].forEach(el => el?.classList.remove("active"));

        switch (state) {
            case GameState.STATES.MENU:
                this.menu?.classList.add("active");
                break;

            case GameState.STATES.BATTLE:
            case GameState.STATES.PLAYER_TURN:
            case GameState.STATES.ENEMY_TURN:
                this.battle?.classList.add("active");
                break;

            case GameState.STATES.RESULT:
                this.result?.classList.add("active");
                break;

            case GameState.STATES.BOOT:
            case GameState.STATES.LOADING:
                this.loading?.classList.add("active");
                break;
        }
    }

    static #renderTurnState(state) {
        document.body.classList.remove("player-turn", "enemy-turn");

        if (state === GameState.STATES.PLAYER_TURN) {
            document.body.classList.add("player-turn");
        }

        if (state === GameState.STATES.ENEMY_TURN) {
            document.body.classList.add("enemy-turn");
        }
    }

    // HUD UPDATE
    static updateHUD(hero, enemy) {
        if (!hero || !enemy) return;

        // Names
        this.heroName.textContent = hero.name;
        this.enemyName.textContent = enemy.name;

        // Sprites
        this.heroSprite.textContent = hero.sprite;
        this.enemySprite.textContent = enemy.sprite;

        // Life bars
        this.heroLife.style.width = `${hero.lifePercent()}%`;
        this.enemyLife.style.width = `${enemy.lifePercent()}%`;
    }

    // LOG
    static logMessage(text) {
        if (!this.log) return;

        const p = document.createElement("p");
        p.textContent = text;
        this.log.prepend(p);
    }

    // RESULT
    static showResult(text) {
        this.resultText.textContent = text;
    }

    // ATTACK OPTIONS
    static renderAttackOptions(hero, callback) {
        const container = document.getElementById("attackOptions");
        if (!hero?.attacks || !container) return;

        container.replaceChildren();

        for (const [key, atk] of Object.entries(hero.attacks)) {
            const btn = document.createElement("button");
            btn.textContent = atk.name;
            btn.onclick = () => callback(key);
            container.appendChild(btn);
        }
    }

    static clearLog() {
        if (!this.log) return;
        this.log.replaceChildren();
    }
}
