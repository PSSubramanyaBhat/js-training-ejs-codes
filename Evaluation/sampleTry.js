"use strict";

class Deck {
    constructor() {
        this.cards = new Array(52);

    }
	
    randomCardPosition(min, max) {  
        return Math.floor(Math.random() * (max - min) + min);
    } 

    shuffle() {
        let count = 0;
        for (let i = 0; i < this.cards.length; i++) {
            let j = i + 1;
            // let j = i;
            // this.cards[i] = i+1;
            this.cards[0] = "C" + 1;
            if ((i + 1) % 13 === 0) {
                count++;
            }
            if (count === 0) {
                this.cards[i + 1] = "C" + (j + 1);

            }
            if (count === 1) {
                j = j - 13;
                this.cards[i + 1] = "D" + (j + 1);

            }
            if (count === 2) {
                j = j - 26;
                this.cards[i + 1] = "H" + (j + 1);

            }
            if (count === 3) {
                j = j - 39;
                this.cards[i + 1] = "S" + (j + 1);

            }
        }
        console.log("Deck Before Shuffeling");
        console.log(this.cards);
		
        for (let i = 0; i < this.cards.length; i++) {
            let randomCardValue = this.randomCardPosition(0,this.cards.length);
            let temp = this.cards[i];
            this.cards[i] = this.cards[randomCardValue];
            this.cards[randomCardValue] = temp;
        }
        console.log("Deck After Shuffeling");
        console.log(this.cards);
    }
}

function main() {
    let deck = new Deck();
    console.log(deck.shuffle());
}

main();