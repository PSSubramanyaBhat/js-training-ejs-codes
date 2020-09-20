"use strict";

let restaurant = {
    category: "Veg",
    foodDetails: {
        starters: {
            dishname: "Gobimanchuri",
            quantity: "6 plates",
            cost: "Rs. 540",
        },
        maincourse: {
            dishname: "Naan and Paneer Butter Masala",
            quantity: "2 plates",
            cost: "Rs. 350",
        },
        dessert: {
            dishname: "Vanilla slab",
            quantity: "1 plate",
            cost: "Rs. 150",
        },
        chats: {
            dishname: "Sev Puri and French Fries",
            quantity: "1 plate each",
            cost: "Rs. 200",
        },
        drinks: {
            drinkname: "Lemon Juice",
            quantity: "4 glass",
            cost: "Rs. 80",
        }
    }
};

let totalBill = 
parseInt(restaurant.foodDetails.starters.cost.substring(4)) +
parseInt(restaurant.foodDetails.maincourse.cost.substring(4)) +
parseInt(restaurant.foodDetails.dessert.cost.substring(4)) +
parseInt(restaurant.foodDetails.chats.cost.substring(4)) +
parseInt(restaurant.foodDetails.drinks.cost.substring(4));
console.log(totalBill);