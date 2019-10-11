import { DarkDuck } from './dark-duck'
import { Squeak } from './quack-behavior'

console.log("\n", "**** Chapter 01 ****")

const duck = new DarkDuck()

duck.display()
duck.performFly()
duck.performQuack()
duck.swim()
duck.setQuackBehavior(new Squeak())
duck.performQuack()