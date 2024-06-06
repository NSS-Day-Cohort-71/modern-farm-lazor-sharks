
import { createPlan } from './plan.js'
import { usePlants} from './field.js'
import { plantSeeds } from './tractor.js'
import { harvestPlants, seeds } from './harvester.js'
import { catalog } from './catalog.js'

export let yearlyPlan = createPlan()




plantSeeds(yearlyPlan)

harvestPlants(usePlants())

console.log(catalog(seeds))

const cropList = document.querySelector('.container');
cropList.innerHTML = catalog(seeds)
