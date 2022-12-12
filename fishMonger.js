const { boatInventory } = require("./fishingBoat.js")

const mongerInventory = () => {
    let allInventory = boatInventory();
    let availableInventory = []
    for (let fish of allInventory) {
        if (fish.price < 7.50 && fish.amount > 10) {
            availableInventory.push()
        }
    }
    return availableInventory
}
// const inventory = mongerInventory();
// console.log(inventory)

module.exports = { mongerInventory }



