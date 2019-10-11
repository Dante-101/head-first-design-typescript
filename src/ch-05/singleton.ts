export class Singleton {
    private static instance?: Singleton

    private constructor() { }

    getDescription() {
        return "I am a singleton!"
    }

    static getInstance(): Singleton {
        let instance = Singleton.instance
        if (!instance) {
            instance = new Singleton()
            Singleton.instance = instance
        }
        return instance
    }
}