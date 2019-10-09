import { Duck } from './duck-abstract'
import { FlyWithWings } from './fly-behavior'
import { Quack } from './quack-behavior'

export class DarkDuck extends Duck {
    constructor() {
        super("dark")
        this.flyBehavior = new FlyWithWings()
        this.quackBehavior = new Quack()
    }

    display() {
        console.log("Showing dark duck")
    }
}