import { DarkDuck } from './dark-duck'
import { Squeak } from './quack-behavior'

const duck = new DarkDuck()

duck.display()
duck.performFly()
duck.performQuack()
duck.swim()
duck.setQuackBehavior(new Squeak())
duck.performQuack()