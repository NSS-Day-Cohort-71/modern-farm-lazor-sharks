import { createPlan  }from "./plan.js"
import { createAsparagus } from "./seeds/asparagus.js"

createPlan()

const asparagus = createAsparagus("asparagus", 24, 4)
const yearlyPlan= createPlan()


console.log("Welcome to the main module")

console.log(asparagus)


//build a module for each plant type (corn, soybeen, sunflower, asparagus, what, potato)
// each module shouild have a function that has the following properties: i type ii. height, iii. output
// one exception is corn. It should return an array with two identical objects in it with the proper keys and values