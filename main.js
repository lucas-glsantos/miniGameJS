import { Game } from "./engine/game.js";
import { UI } from "./engine/ui.js";

document.addEventListener("DOMContentLoaded", () => {
    UI.init();

    const btnStart = document.getElementById("btnIniciar");
    const btnRestart = document.getElementById("btnReiniciar");

    btnStart.addEventListener("click", () => {
        const name = document.getElementById("nomeHeroi").value.trim();
        const type = document.getElementById("tipoHeroi").value;
    
        if (!name || !type) {
        alert("Preencha nome e classe");
        return;
    }

    Game.start(name, type);
    });

    btnRestart.addEventListener("click", () => {
        location.reload();
    });
});