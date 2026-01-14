export class EngineLoader {
    static load(duration = 3000) {
        return new Promise(resolve => {
            setTimeout(resolve, duration);
        });
    }
}