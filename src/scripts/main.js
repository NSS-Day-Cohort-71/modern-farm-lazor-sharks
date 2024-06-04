
import { createPlan } from './plan.js'
import { addPlant, usePlants } from './field.js'
import { plantSeeds } from './tractor.js'

export let yearlyPlan = createPlan()


plantSeeds(yearlyPlan)

addPlant(yearlyPlan)


console.log(usePlants())
// build a module for each plant type (corn, soybean, sunflower, asparagus, wheat, potato)
// each module should have a function that has the following properties: i. type, ii. height, iii. output
// one exception is corn. it should return an array with two identical objects in it with the proper keys and values





