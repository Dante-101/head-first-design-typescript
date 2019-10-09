export interface QuackBehavior {
    quack(): void
}

export class Quack implements QuackBehavior {
    quack() { console.log("I am quacking!") }
}

export class QuackNoWay implements QuackBehavior {
    quack() { console.log("I can't quack! :(") }
}

export class Squeak implements QuackBehavior {
    quack() { console.log("I am Squeaking. Squeak is my quack!") }
}