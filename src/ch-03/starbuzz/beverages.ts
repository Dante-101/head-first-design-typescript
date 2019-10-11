import { Beverage } from './abstract-beverage'

export class Espresso extends Beverage {
    constructor() {
        super()
        this.description = "Espresso"
    }

    cost() {
        return 1.99
    }
}

export class HouseBlend extends Beverage {
    constructor() {
        super()
        this.description = "House Blend"
    }

    cost() {
        return 1.89
    }
}

export class DarkRoast extends Beverage {
    constructor() {
        super()
        this.description = "Dark Roast"
    }

    cost() {
        return 2.89
    }
}

export class Decaf extends Beverage {
    constructor() {
        super()
        this.description = "Decaf"
    }

    cost() {
        return 1.89
    }
}