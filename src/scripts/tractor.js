import { createPotato } from "./seeds/potato.js"
import { createSunflower } from "./seeds/sunflower.js"
import { createWheat } from "./seeds/wheat.js"
import { createSoybean } from "./seeds/soybean.js"
import { createAsparagus } from "./seeds/asparagus.js"
import { createCorn } from "./seeds/corn.js"
import { addPlant } from "./field.js"

export const plantSeeds = (plan) => {
   
    
    for (let array of plan) {
        for (const plant of array) { 
            if (plant === "Wheat") {
               addPlant(createWheat());
            } else if (plant === "Sunflower"){
                addPlant(createSunflower());
            } else if (plant === "Soybean") {
                addPlant(createSoybean());
            } else if (plant === "Potato") {
                addPlant(createPotato());
            } else if (plant === "Asparagus") {
                addPlant(createAsparagus());
            } else if (plant === "Corn") {
                addPlant(createCorn());
            } 
        }
         
    } 
  
   
}