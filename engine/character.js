import { Entity } from "./entity.js";

export class Character extends Entity {
    constructor({ name, type, maxLife, attackBase, sprite, attacks }) {
        super(name, maxLife);

        this.type = type;
        this.attackBase = attackBase;
        this.sprite = sprite;
        this.attacks = attacks;
    }

    performAttack(target, key) {
        const atk = this.attacks[key];
        if (!atk) return null;

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
