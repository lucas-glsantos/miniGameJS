import { Character } from "./character.js";

export class CharacterFactory {
    static config = {
        guerreiro: {
            life: 120,
            attack: 12,
            sprite: "🗡️",
            attacks: {
                normal: { name: "Corte", mult: 1 },
                forte: { name: "Golpe Forte", mult: 1.5 }
            }
        },
        mago: {
            life: 80,
            attack: 16,
            sprite: "🧙‍♂️",
            attacks: {
                normal: { name: "Magia", mult: 1 },
                especial: { name: "Explosão", mult: 2 }
            }
        },
        monge: {
            life: 100,
            attack: 10,
            sprite: "🧙",
            attacks: {
                normal: { name: "Punho", mult: 1 },
                rapido: { name: "Golpe Rápido", mult: 0.8 }
            }
        },
        ninja: {
            life: 90,
            attack: 14,
            sprite: "🥷",
            attacks: {
                normal: { name: "Shuriken", mult: 1 },
                rapido: { name: "Ataque Sombrio", mult: 1.2 }
            }
        },
        maquina: {
            life: 110,
            attack: 13,
            sprite: "🤖",
            attacks: {
                normal: { name: "Laser", mult: 1 }
            }
        }
    };

    static create(name, type) {
        const cfg = this.config[type];

        if (!cfg) {
            throw new Error(`Unknow character type: ${type}`)
        }
    
    
        return new Character({ 
            name, 
            type,
            life: cfg.life,
            attack: cfg.sprite,
            attacks: cfg.attacks
        });
    }
}