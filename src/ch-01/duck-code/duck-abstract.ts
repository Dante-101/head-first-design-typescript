import { FlyBehavior } from './fly-behavior'
import { QuackBehavior } from './quack-behavior'

export abstract class Duck {
    flyBehavior!: FlyBehavior
    quackBehavior!: QuackBehavior

    constructor(protected type: String) {}

    setFlyBehavior(fb: FlyBehavior) {
        this.flyBehavior = fb
    }

    setQuackBehavior(qb: QuackBehavior) {
        this.quackBehavior = qb
    }

    performFly() {
        this.flyBehavior.fly()
    }

    performQuack() {
        this.quackBehavior.quack()
    }

    swim() {
        console.log(`${this.type} duck is floating`)
    }

    abstract display(): void
}