import { Game } from "./engine/game.js";

// -------- BOOT --------
Game.boot();

// Elements
const btnIniciar = document.getElementById("btnIniciar");
const btnReiniciar = document.getElementById("btnReiniciar");

const inputNome = document.getElementById("nomeHeroi");
const selectTipo = document.getElementById("tipoHeroi");

// Menu -> StartGame
btnIniciar.addEventListener("click", () => {
    const nome = inputNome.value.trim();
    const tipo = selectTipo.value;

    if (!nome || !tipo) {
        alert("Digite o nome do herói e escolha uma classe.");
        return;
    }

    Game.start(nome, tipo);
});

// Result -> ReturnToMenu
btnReiniciar.addEventListener("click", () => {
    // Limpa inputs para nova partida
    inputNome.value = "",
    selectTipo.value = "";

    Game.returnToMenu();
});