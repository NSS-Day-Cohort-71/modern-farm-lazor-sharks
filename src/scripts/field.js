

let fieldArray = []

export const addPlant = (seed) => {

    if (Array.isArray(seed)) {
        seed.forEach(corn => {
            fieldArray.push(corn) 
        });
    } else {
        fieldArray.push(seed)
    }
    return fieldArray

}




export const usePlants = () => {

    return fieldArray.map(plant => ({ ...plant }));
    
}
