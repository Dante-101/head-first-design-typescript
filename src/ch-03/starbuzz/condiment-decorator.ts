import { Beverage } from './abstract-beverage'

export abstract class CondimentDecorator extends Beverage {
    abstract getDescription(): string
}

export class Mocha extends CondimentDecorator {
    constructor(private beverage: Beverage) {
        super()
    }

    cost() {
        return this.beverage.cost() + 0.99
    }

    getDescription() {
        return this.beverage.getDescription() + ", Mocha"
    }
}

export class Whip extends CondimentDecorator {
    constructor(private beverage: Beverage) {
        super()
    }

    cost() {
        return this.beverage.cost() + 1.10
    }

    getDescription() {
        return this.beverage.getDescription() + ", Whip"
    }
}