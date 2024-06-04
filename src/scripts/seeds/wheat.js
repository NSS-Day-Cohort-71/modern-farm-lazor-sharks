export const createWheat = (seedType, plantHeight, plantOutput) => {
    const plant = {
        type: seedType,
        height: plantHeight,
        output: plantOutput
    };
    return plant
}