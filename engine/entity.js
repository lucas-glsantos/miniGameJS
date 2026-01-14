export class Entity {
    constructor(name, maxLife) {
        if (!name) {
            throw new Error("Entity must have a name");
        }

        if (!Number.isFinite(maxLife) || maxLife <= 0) {
            throw new Error("Entity maxLife must be a positive number");
        }

        this.name = name;
        this.maxLife = maxLife;
        this.life = maxLife;
    }

    damage(value) {
        if (!Number.isFinite(value) || value <= 0)
            return;

        this.life = Math.max(0, this.life - value);
    }

    heal(value) {
        if (!Number.isFinite(value) || value <= 0)
            return;
    }

    isAlive() {
        return this.life > 0;
    }

    isDead() {
        return this.life === 0;
    }

    resetLife() {
        thislife = this.maxLife;
    }

    lifePercent() {
        if (this.maxLife === 0)
            return 0;
        
        return Math.round((this.life / this.maxLife) * 100);
    }
}
