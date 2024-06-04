import { createSoybean } from "../seeds/soybean.js"
import { createSunflower } from "../seeds/sunflower.js"
import { createPlan } from "./plan.js"



createPlan()

const sunflower = createSunflower("sunflower", 380, 3)
const soybean = createSoybean("soybean", 20, 4)


const yearlyPlan = createPlan()

console.log("Welcome to the main module")
console.log(sunflower, soybean)
// build a module for each plant type (corn, soybean, sunflower, asparagus, wheat, potato)
// each module should have a function that has the following properties: i. type, ii. height, iii. output
// one exception is corn. it should return an array with two identical objects in it with the proper keys and values