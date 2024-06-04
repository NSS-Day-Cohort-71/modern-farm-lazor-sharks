
import { createPlan } from './plan.js'
import { createPotato } from './seeds/potato.js'
import { createWheat } from './seeds/wheat.js'
import { createSoybean } from "../seeds/soybean.js"
import { createSunflower } from "../seeds/sunflower.js"

const yearlyPlan = createPlan()

const wheat = createWheat('Wheat', 230, 6)
const potato = createPotato('Potato', 32, 2)
const sunflower = createSunflower("sunflower", 380, 3)
const soybean = createSoybean("soybean", 20, 4)


// build a module for each plant type (corn, soybean, sunflower, asparagus, wheat, potato)
// each module should have a function that has the following properties: i. type, ii. height, iii. output
// one exception is corn. it should return an array with two identical objects in it with the proper keys and values

