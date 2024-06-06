


export const catalog = (food) => {
    let foodHTML =""
    for (const morsel of food) {
        foodHTML += `
        <section class="plant">${morsel.type}</section>
        `;
       
    } 
    return foodHTML

}

