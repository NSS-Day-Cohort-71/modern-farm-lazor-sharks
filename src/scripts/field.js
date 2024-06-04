import { yearlyPlan } from "./main.js";

let fieldArray = []

export const addPlant = (seed) => {

    if (Array.isArray(seed)) {
        yearlyPlan.forEach(seed => {
            fieldArray.push(seed) 
        });
    } else {
        fieldArray.push(seed)
    }
    return fieldArray

}


export const usePlants = () => {

    return fieldArray.slice()
    
}



// export const usePlants = () => {

//     let newPlan = fieldArray.slice();

//     yearlyPlan.map(seed => {
//         newPlan.push(seed);
//     });
//     return newPlan
// }
// return usePlants

