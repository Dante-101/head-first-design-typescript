import { Singleton } from './singleton'

console.log("\n", "**** Chapter 05 ****")

// const singleton = new Singleton()
const singleton = Singleton.getInstance()
console.log(singleton.getDescription())
