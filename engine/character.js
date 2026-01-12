import { Entity } from "./entity.js";

export class Character extends Entity {
    constructor({ name, type, life, attack, sprite, attacks }) {
        super(name, life);
        this.type = type;
        this.attackBase = attack;
        this.sprite = sprite;
        this.attacks = attacks;
    }

    attack(target, key) {
        const atk = this.attacks[key];
        const damage = Math.floor(this.attackBase * atk.mult);

        target.damage(damage);

        return {
            from: this.name,
            to: target.name,
            attack: atk.name,
            damage
        };
    }
}
