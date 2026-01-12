import { GameState } from "./state.js";


export class UI {
    static init() {
        this.menu = document.getElementById("menu");
        this.battle = document.getElementById("battle");
        this.result = document.getElementById("result");

        this.heroName = document.getElementById("heroName");
        this.heroSprite = document.getElementById("heroSprite");
        
        this.enemyName = document.getElementById("enemyName");
        this.enemySprite = document.getElementById("enemySprite");

        this.heroLife = document.getElementById("heroLife");
        this.enemyLife = document.getElementById("enemyLife");

        this.log = document.getElementById("mensagem");
        this.resultText = document.getElementById("resultadoFinal");

        GameState.subscribe(this.render.bind(this));
    }

    static render(state) {
        [this.menu, this.battle, this.result].forEach(s =>
            s.classList.remove("active")
        );

        if (state === "MENU") this.menu.classList.add("active");
        if (state === "BATALHA") this.battle.classList.add("active");
        if (state === "RESULTADO") this.result.classList.add("active");
    }

    static updateHUD(hero, enemy) {
        this.heroName.innerText = hero.name;
        this.heroSprite.innerText = hero.sprite;

        this.enemyName.innerText = enemy.name;
        this.enemySprite.innerText = enemy.sprite;

        this.heroLife.style.width = hero.lifePercent() + "%";
        this.enemyLife.style.width = enemy.lifePercent() + "%";
    }

    static logMessage(text) {
        const p = document.createElement("p");
        p.innerText = text;
        this.log.prepend(p);
    }

    static showResult(text) {
        this.resultText.innerText = text;
    }

    static renderAttackOptions(hero, callback) {
        const container = document.getElementById("attackOptions");
        container.innerHTML = "";

        Object.entries(hero.attacks).forEach(([key, atk]) => {
            const btn = document.createElement("button");
            btn.innerText = atk.name;
            btn.onclick = () => callback(key);
            container.appendChild(btn);
        });
    }
}
