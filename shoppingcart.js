"use strict";

let itemList = [
    { item: "shirt", price: 50 },
    { item: "pants", price: 80 },
    { item: "sweater", price: 90 },
    { item: "shoes", price: 190 },
    { item: "hat", price: 20 }
];

let shoppingCart = [];

function addItem(itemName, itemPrice) {
    shoppingCart = [...shoppingCart, { itemName, itemPrice }];
}

addItem("tops", 40);
addItem("bottoms", 40);
addItem("scarf", 40);

console.log(shoppingCart);

function removeItem(itemName) {
    let index = shoppingCart.findIndex(element => element.itemName === itemName);
    shoppingCart = [...shoppingCart.slice(0, index), ...shoppingCart.slice(index + 1)];
}

removeItem("tops");
console.log(shoppingCart);

function editItem(itemName, newName, newPrice) {
    let index = shoppingCart.findIndex(element => element.itemName === itemName);
    shoppingCart = [...shoppingCart.slice(0, index), { itemName: newName, itemPrice: newPrice }, ...shoppingCart.slice(index + 1)];

}
editItem("bottoms", "leggings", 20);
console.log(shoppingCart);

function printTotal() {
    let total = 0;
    for (let item of shoppingCart) {
        total += item.itemPrice;
        console.log(`Item: ${item.itemName} Price: ${item.itemPrice}, Price with tax: ${item.itemPrice * 1.06}`);
    }
    console.log(`Total: ${total}`);
}
printTotal();