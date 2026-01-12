export class GameCore {
    static loop = null;

    static start(callback, interval = 1200) {
        this.stop();
        this.loop = setInterval(callback, interval);
    }

    static stop() {
        if (this.loop) clearInterval(this.loop);
        this.loop = null;
    }
}
