export abstract class Beverage {
    protected description: string = "Unknown beverage"

    getDescription() {
        return this.description
    }

    abstract cost(): number
}