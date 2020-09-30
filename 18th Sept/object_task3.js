"use strict";

let shoppingList = {
    date: "20/09/2020",
    place: ["Big Bazar", 
        "Saibin Complex",
        "School Book Company"
    ],
    item: {
        wheat: {
            brandName: "Aashirvaad",
            quantity: "1 Kg.",
            cost: "Rs. 200"
        },
        riceFlour: {
            brandName: "Anil",
            quantity: "1 Kg.",
            cost: "Rs. 150"
        },
        shirt: {
            brandName: "Levis",
            quantity: 2,
            cost: "Rs. 1700"
        },
        pant: {
            brandName: "Denim",
            quantity: 2,
            cost: "Rs. 800"
        },
        pigmentLiner: {
            brandName: "Stedlar",
            quantity: 6,
            cost: "Rs. 925"
        }
    }
};


let totalCost = 
    parseInt(shoppingList.wheat.cost.substring(4)) +
    parseInt(shoppingList.riceFlour.cost.substring(4)) +
    parseInt(shoppingList.shirt.cost.substring(4)) +
    parseInt(shoppingList.pant.cost.substring(4)) +
    parseInt(shoppingList.pigmentLiner.cost.substring(4));

console.log("The total cost is: "+totalCost);

console.log(shoppingList.wheat);