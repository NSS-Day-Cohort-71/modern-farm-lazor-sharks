
import { createPlan } from './plan.js'
import { addPlant, usePlants } from './field.js'
import { plantSeeds, plants } from './tractor.js'
import { harvestPlants, seeds } from './harvester.js'

export let yearlyPlan = createPlan()



plantSeeds(yearlyPlan)

plants.forEach(plant => addPlant(plant));

// addPlant(plants)

console.log(usePlants())
harvestPlants(usePlants())


// console.log(harvestPlants())
// build a module for each plant type (corn, soybean, sunflower, asparagus, wheat, potato)
// each module should have a function that has the following properties: i. type, ii. height, iii. output
// one exception is corn. it should return an array with two identical objects in it with the proper keys and values




// NOTE: We need to fix the yearly plan with regards to how it logs with only the names of the veggies and no other values.
// NOTE: Use breakpoints to investigate what values are being assigned and used and see where they might be fall off.
