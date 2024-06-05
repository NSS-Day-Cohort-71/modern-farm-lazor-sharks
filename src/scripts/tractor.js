import { createPotato } from "./seeds/potato.js"
import { createSunflower } from "./seeds/sunflower.js"
import { createWheat } from "./seeds/wheat.js"
import { createSoybean } from "./seeds/soybean.js"
import { createAsparagus } from "./seeds/asparagus.js"
import { createCorn } from "./seeds/corn.js"

export let plants = []

export const plantSeeds = (plan) => {
   
    
    for (let array of plan) {
        for (const plant of array) { // iterate through the elements of each sub-array
            if (plant === "Wheat") {
                plants.push(createWheat("Wheat", 230, 6));
            } else if (plant === "Sunflower"){
                plants.push(createSunflower("Sunflower", 380, 3));
            } else if (plant === "Soybean") {
                plants.push(createSoybean("Soybean", 20, 4));
            } else if (plant === "Potato") {
                plants.push(createPotato("Potato", 32, 2));
            } else if (plant === "Asparagus") {
                plants.push(createAsparagus("Asparagus", 24, 4));
            } else if (plant === "Corn") {
                plants.push(createCorn("Corn", 180, 6));
            } 
        } 
    } 
    
    return plants;
}

// export const seedsCopy = () => {

//     return plants.slice()
    
// }



// For Posterity
// export const plantSeeds = (plan) => {
//     let seeds = []
//     for (let array of plan) {
//         for (const plant of plan) {
//             if (plant === "wheat") {
//                 createWheat("Wheat", 230, 6)
//             } else if (plant === "sunflower"){
//                 createSunflower("Sunflower", 380, 3)
//             } else if (plant === "soybean") {
//                 createSoybean("Soybean", 20, 4)
//             } else if (plant === "potato") {
//                 createPotato("Potato", 32, 2)
//             } else if (plant === "asparagus") {
//                 createAsparagus("Asparagus", 24, 4)
//             } else if (plant === "corn") {
//                 createCorn("Corn", 180, 6)
//             }
//             array++
            
//         }
        
//     }
//     return seeds
// }



// let usePlants = usePlants().map(plan => type:)