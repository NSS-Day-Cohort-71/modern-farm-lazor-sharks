


export const catalog = (food) => {
    let foodHTML =""
    for (const morsel of food) {
        foodHTML += `
        <section class="plant">${morsel.type}</section>
        `;
        // const cropList = document.getElementById('container');
        // cropList.innerHTML = foodHTML
    } 
    return foodHTML

}

// export const renderFoodToDom = (foodHTML) => {
//     const cropList = document.getElementById('container');
//     cropList.innerHTML = foodHTML
// }

// renderFoodToDom(foodHTML)