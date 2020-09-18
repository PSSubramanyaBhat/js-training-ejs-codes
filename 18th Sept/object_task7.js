"use strict";

let reciepe = {
    category: "Veg",
    dishName: "Gobi Manchuri",
    description: {
        looksLike: "solid and gravy",
        type: "Starters",
        taste: "Spicy",
    },
    procedure: function() {
        console.log(
            "Step 1: Medium size Cauliflower\n"+
			"Step 2: 1/2 Tea Spoon Garam Masala powder\n"+
			"Step 3: 1 Tea Chilli powder\n"+
			"Step 4: 1/2 Tea Spoon Salt\n"+
			"Step 5: 2 pinch baking soda\n"+
			"Step 6: 3 Tea Spoon Maida\n"+
			"Step 7: 3 Tea Spoon Courn Flour\n"+
			"Step 8: Deep Fry the Gobi pieces in oil\n"+
			"Step 9: Add 2 Table Spoon oil now on a pan with medium flame\n"+
			"Step 10: Add 1 Table Spoon Ginger Garlic Paste\n"+
			"Step 11: 2 medium size onions and mix them properly\n"+
			"Step 12: Add 1 Tea Spoon Chilli powder and 1 Tea Spoon Soya Sauce\n"+
			"Step 13: Add proportionate (2 Tea spoon) Tomato Ketchup\n"+
			"Step 14: 2 Tea Spoon Lemon drops\n"+
			"Step 15: Mix it and fry it properly\n"+
			"Step 16: Add coriander leaves"+
			"Step 17:  Gobi Manchurian is ready!!!"
        );
    },
    ingredients: {
        cauliflower: "2",
        garamMasalaPowder: "200 gm.",
        chilliPowder: "200 gm.",
        salt: "200 gm.",
        bakingSoda: "200 gm.",
        maida: "500 gm.",
        cournFlour: "500 gm.",
        oil: "200 ml.",
        gingerGarlicPaste: "50 mg.",
        onions: "2",
        soyaSauce: "100 mg.",
        tomatoKetchup: "100mg.",
        lemon: "1",
        corianderLeave: "50mg.",
    },
    remarks: [
        "Gobi Manchurian is something that is not advised by any dietitian anywhere", 
        "Home made Gobi manchuri can be given to pregnant women since gobi can reduce BP"
    ],
    blendsWith: "Any Main course meals",
};


// console.log(reciepe.procedure());
// console.log(reciepe.ingredients.tomatoKetchup);
// console.log(reciepe.ingredients);
// console.log(reciepe.remarks);
console.log(reciepe);