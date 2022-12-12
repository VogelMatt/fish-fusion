const { mongerInventory } = require("./fishMonger.js")

const forSale = (maxPrice) => {
    let allFish = mongerInventory();
    let purchasedInventory = ""
    let menuInventory = []
    for (let fish of allFish) {
        if (fish.price < maxPrice) {
            fish.amount = fish.amount / 2
            menuInventory.push(fish)
            purchasedInventory += `<h1>Menu</h1>\n<article class="menu">\n\t<h2>${fish.species}</h2>\n\t<section class="menu_item">${fish.species} Soup</section>\n\t<section class="menu_item">${fish.species} sandwich</section>\n\t<section class="menu_item">Grilled ${fish.species}</section>\n`
        }
    }
    return purchasedInventory 
}
module.exports = { forSale }
const fishMenu = forSale(9.00);
console.log(fishMenu)
