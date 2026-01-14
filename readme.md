# 🎮 Mini Game RetroJS

Um **mini game retrô em JavaScript puro**, inspirado em RPGs clássicos do NES.

A RetroJS Engine foi projetada para rodar **100% no navegador**, sem dependências externas, utilizando **ES Modules**, arquitetura modular e padrões clássicos de game engines.


## ✨ Principais Características
- ⚙️ Engine modular
- 🧠 Gerenciamento de estados (MENU → BATALHA → RESULTADO)
- ⚔️ Sistema de combate por turnos
- 🧩 Sistema de personagens e ataques
- 🖥️ UI retrô estilo NES
- 📦 100% JavaScript moderno (ES Modules)


## 🗺️ Arquitetura Estrutural do Projeto

![](img/EstruturaProjeto.png)

## 📁 Estrutura do Projeto

```
/engine
 ├─ character.js   # Personagens jogáveis
 ├─ entity.js      # Entidade base (vida, ataque, estado)
 ├─ factory.js     # Factory de personagens
 ├─ game.js        # Orquestração central do jogo
 ├─ loader.js      # loading/boot
 ├─ state.js       # estados global
 └─ ui.js          # Interface, HUD e renderização

/main.js           # Entry point e controle do menu
/style.css         # Estilo retrô NES
/index.html        # HTML declarativo (sem lógica)
```


## 🚀 Como Executar


> **Importante:** Por usar ES Modules, o projeto precisa ser executado via servidor.

Python

```bash
python -m http.server
```

Depois acesse:

```
http://localhost:3000
```


## 🕹️ Fluxo do Jogo

1. Menu inicial
2. Escolha do nome e classe
3. Início da batalha
4. Turnos de ataque
5. Exibição do resultado
6. Retorno ao Menu inicial

## 🛠️ Tecnologias Utilizadas

- ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=000)
- ![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=fff)
- ![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=fff)
- Web APIs nativas

## 🌐 Compatibilidade de Navegadores

| Navegador | Suporte          |
| --------- | ---------------- |
| Chrome    | ✅                |
| Firefox   | ✅                |
| Edge      | ✅                |
| Brave      | ✅                |
| Safari    | ⚠️ Parcial (ESM) |


## 📜 Licença

MIT License — livre para estudo, modificação e uso comercial.

## 👨‍💻 Autor

Me chamo Lucas Santos, este projeto foi um desafio de um amigo de curso, com o objetivo principal de demonstrar design arquitetural frontend, organização de engine e fluxo de estados, desenvolvendo habilidades hands-on e base lógica de programação com Javascript.     

Desenvolvedor • JavaScript • Arquitetura de Software

Conecte-se comigo:       
[LinkedIn](https://www.linkedin.com/in/lucasglsantos/)