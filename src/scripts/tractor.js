import { createPotato } from "./seeds/potato.js"
import { createSunflower } from "./seeds/sunflower.js"
import { createWheat } from "./seeds/wheat.js"
import { createSoybean } from "./seeds/soybean.js"
import { createAsparagus } from "./seeds/asparagus.js"
import { createCorn } from "./seeds/corn.js"

export const plantSeeds = (plan) => {

    for (let array of plan) {
        for (const plant of plan) {
            if (plant === "wheat") {
                createWheat("Wheat", 230, 6)
            } else if (plant === "sunflower"){
                createSunflower("Sunflower", 380, 3)
            } else if (plant === "soybean") {
                createSoybean("Soybean", 20, 4)
            } else if (plant === "potato") {
                createPotato("Potato", 32, 2)
            } else if (plant === "asparagus") {
                createAsparagus("Asparagus", 24, 4)
            } else if (plant === "corn") {
                createCorn("Corn", 180, 6)
            }
            array++
        }
        
    }
    return plan
}