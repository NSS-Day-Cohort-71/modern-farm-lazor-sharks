export let seeds = []

export const harvestPlants = (plan) => {
    
    
    for (let piece of plan) {

        if (piece.type !== "Corn") {
            for (let i = 0; i < piece.output; i++) {
                seeds.push(piece);
            }
        } else {
           for (let j = 0; j < piece.output; j+=2) {
                seeds.push(piece);
            }
        }
         
    } return seeds 
}

