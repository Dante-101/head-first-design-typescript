import { Beverage } from './abstract-beverage'
import { Espresso, HouseBlend } from './beverages'
import { Mocha, Whip } from './condiment-decorator'

console.log("\n", "**** Chapter 03 ****")

let beverage: Beverage = new Espresso()
beverage = new Mocha(beverage)
beverage = new Whip(beverage)
console.log("Got " + beverage.getDescription() + " for $" + beverage.cost())

let beverage2: Beverage = new HouseBlend()
beverage2 = new Mocha(beverage2)
beverage2 = new Mocha(beverage2)
console.log("Got " + beverage2.getDescription() + " for $" + beverage2.cost())
