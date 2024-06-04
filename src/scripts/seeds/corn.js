
export const createCorn = (seedType, plantHeight, plantOutput) => {
        let cornArray = []
        const plant = {
            type: seedType,
            height: plantHeight,
            output: plantOutput
        };
       
        cornArray.push(plant)
        cornArray.push(plant)
        return cornArray
}
