export class Entity {
    constructor(name, maxLife) {
        this.name = name;
        this.maxLife = maxLife;
        this.life = maxLife;
    }

    damage(value) {
        this.life = Math.max(0, this.life - value);
    }

    isAlive() {
        return this.life > 0;
    }

    lifePercent() {
        return (this.life / this.maxLife) * 100;
    }
}
