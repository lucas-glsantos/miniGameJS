import { GameState } from "./state.js";
import { CharacterFactory } from "./factory.js";
import { UI } from "./ui.js";
import { EngineLoader } from "./loader.js";

export class Game {
    static hero = null;
    static enemy = null;
    static running = false;

    static #booting = false;

    static async boot() {
        if (this.#booting) return;
        this.#booting = true;

        UI.init();

        GameState.set(GameState.STATES.LOADING);
        await EngineLoader.load(800);

        GameState.set(GameState.STATES.MENU);
        this.#booting = false;
    }

    static async start(name, type) {
        this.reset();
        UI.clearLog();

        GameState.set(GameState.STATES.LOADING);
        await EngineLoader.load(1200);

        this.hero = CharacterFactory.create(name, type);
        this.enemy = CharacterFactory.create("Machine", "maquina");

        this.running = true;

        GameState.set(GameState.STATES.BATTLE);
        UI.updateHUD(this.hero, this.enemy);

        this.startPlayerTurn();
    }

    static reset() {
        this.running = false;
        this.hero = null;
        this.enemy = null;
    }

    static startPlayerTurn() {
        if (!this.running) return;

        GameState.set(GameState.STATES.PLAYER_TURN);

        UI.renderAttackOptions(this.hero, key => {
            if (!this.running) return;
            this.handlePlayerAttack(key);
        });
    }

    static handlePlayerAttack(attackKey) {
        const result = this.performAttack(this.hero, this.enemy, attackKey);
        if (!result) return;

        if (!this.enemy.isAlive()) {
            return this.end(`${this.hero.name} venceu! 🏆`);
        }

        setTimeout(() => this.handleEnemyTurn(), 800);
    }

    static handleEnemyTurn() {
        if (!this.running) return;

        GameState.set(GameState.STATES.ENEMY_TURN);

        const keys = Object.keys(this.enemy.attacks);
        const attackKey = keys[Math.floor(Math.random() * keys.length)];

        this.performAttack(this.enemy, this.hero, attackKey);

        if (!this.hero.isAlive()) {
            return this.end("A Máquina venceu! 💀");
        }

        setTimeout(() => this.startPlayerTurn(), 600);
    }

    static performAttack(attacker, target, attackKey) {
        const result = attacker.performAttack(target, attackKey);
        if (!result) return null;

        UI.logMessage(
            `⚔️ ${result.from} usou ${result.attack} (-${result.damage})`
        );

        UI.updateHUD(this.hero, this.enemy);
        return result;
    }

    static end(text) {
        this.running = false;
        UI.showResult(text);
        GameState.set(GameState.STATES.RESULT);
    }
    
    static async returnToMenu() {
        this.reset();

        GameState.set(GameState.STATES.LOADING);
        await EngineLoader.load(600);

        GameState.set(GameState.STATES.MENU);
    }
}
