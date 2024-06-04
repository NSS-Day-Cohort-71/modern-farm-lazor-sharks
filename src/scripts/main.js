import { createPlan } from './plan.js'
import { createPotato } from './seeds/potato.js'
import { createWheat } from './seeds/wheat.js'

console.log("Welcome to the main module")

const yearlyPlan = createPlan()

const wheat = createWheat('Wheat', 230, 6)
const potato = createPotato('Potato', 32, 2)

console.log(wheat, potato)