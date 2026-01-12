import { GameCore } from "./core.js";
import { GameState } from "./state.js";
import { CharacterFactory } from "./factory.js";
import { UI } from "./ui.js";

export class Game {
    static hero = null;
    static enemy = null;

    static start(name, type) {
        this.hero = CharacterFactory.create(name, type);
        this.enemy = CharacterFactory.create("Máquina", "maquina");

        GameState.set("BATALHA");
        UI.updateHUD(this.hero, this.enemy);

        this.playerTurn();
    }

    static playerTurn() {
        UI.renderAttackOptions(this.hero, attack => {
            this.attack(this.hero, this.enemy, attack);

            if (!this.enemy.isAlive()) {
                return this.end(`${this.hero.name} venceu! 🏆`);
            }

            setTimeout(() => this.enemyTurn(), 800);
        });
    }

    static enemyTurn() {
        const keys = Object.keys(this.enemy.attacks);
        const attack = keys[Math.floor(Math.random() * keys.length)];

        this.attack(this.enemy, this.hero, attack);

        if (!this.hero.isAlive()) {
            this.end("A Máquina venceu! 💀");
        } else {
            this.playerTurn();
        }
    }

    static attack(attacker, target, type) {
        const r = attacker.attack(target, type);

        UI.logMessage(
            `⚔️ ${r.from} usou ${r.attack} (-${r.damage})`
        );
        UI.updateHUD(this.hero, this.enemy);
    }

    static end(text) {
        GameCore.stop();
        UI.showResult(text);
        GameState.set("RESULTADO");
    }
}
