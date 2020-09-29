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
            this.cards[0] = "Club-" + 1;
            if ((i + 1) % 13 === 0) {
                count++;
            }
            if (count === 0) {
                this.cards[i + 1] = "Club-" + (j + 1);

            }
            if (count === 1) {
                j = j - 13;
                this.cards[i + 1] = "Diamond-" + (j + 1);

            }
            if (count === 2) {
                j = j - 26;
                this.cards[i + 1] = "Heart-" + (j + 1);

            }
            if (count === 3) {
                j = j - 39;
                this.cards[i + 1] = "Spades-" + (j + 1);

            }
        }
        // console.log("Deck Before Shuffeling");
        

        this.cards[0] = "Club-Ace";
        this.cards[13] = "Diamond-Ace";
        this.cards[26] = "Heart-Ace";
        this.cards[39] = "Spades-Ace";

        this.cards[10] = "Club-Jack";
        this.cards[23] = "Diamond-Jack";
        this.cards[36] = "Heart-Jack";
        this.cards[49] = "Spades-Jack";

        this.cards[11] = "Club-Queen";
        this.cards[24] = "Diamond-Queen";
        this.cards[37] = "Heart-Queen";
        this.cards[50] = "Spades-Queen";

        this.cards[12] = "Club-King";
        this.cards[25] = "Diamond-King";
        this.cards[38] = "Heart-King";
        this.cards[51] = "Spades-King";

        // console.log(this.cards);
        
        for (let i = 0; i < this.cards.length; i++) {
            let randomCardValue = this.randomCardPosition(0,this.cards.length);
            let temp = this.cards[i];
            this.cards[i] = this.cards[randomCardValue];
            this.cards[randomCardValue] = temp;
        }
        // console.log("Deck After Shuffeling");
        // console.log(this.cards);

        return this.cards;
    }
}

class Eights {
    // Player one;
    constructor() {
        // this.one = new Player("Player A");
        // this.two = new Player("Player B");
        this.one = new Player();
        this.two = new Player();
        this.player = new Player();
        this.currentPlayer = new Player();
        this.drawPile = new Hand();
        this.discardPile = new Hand();
        let deck = new Deck();
        this.drawPile = deck.shuffle();
    }
	
    drawFromPile() {
        // console.log("The Draw pile for Crazy Eight:");
        // console.log(this.drawPile);
        if (this.drawPile.isEmpty) {
            let topCard = this.discardPile.pop();
            
            this.drawPile = this.shuffleDiscardedPile(this.discardPile);

           
            while (this.discardPile.length !== 0) {
                this.discardPile.pop();
            }
            this.discardPile.push(topCard);
        }
        
        let cardChosen = this.drawPile.pop();

        return cardChosen;
    }

    discardToPile() {
        let topDiscardedCard = this.discardPile[this.discardPile.length-1];
        let checkCondition = "";
        let flag = 0;

        if (topDiscardedCard.includes("Club-")) {
            checkCondition = "Club-";
        }
        if (topDiscardedCard.includes("Diamond--")) {
            checkCondition = "Diamond-";
        }
        if (topDiscardedCard.includes("Heart-")) {
            checkCondition = "Heart-";
        }
        if (topDiscardedCard.includes("Spades-")) {
            checkCondition = "Spades-";
        }

        if (checkCondition === "" && topDiscardedCard.includes("-Ace")) {
            checkCondition = "-Ace";
        }
        if (checkCondition === "" && topDiscardedCard.includes("-2")) {
            checkCondition = "-2";
        }
        if (checkCondition === "" && topDiscardedCard.includes("-3")) {
            checkCondition = "-3";
        }
        if (checkCondition === "" && topDiscardedCard.includes("-4")) {
            checkCondition = "-4";
        }
        if (checkCondition === "" && topDiscardedCard.includes("-5")) {
            checkCondition = "-5";
        }
        if (checkCondition === "" && topDiscardedCard.includes("-6")) {
            checkCondition = "-6";
        }
        if (checkCondition === "" && topDiscardedCard.includes("-7")) {
            checkCondition = "-7";
        }
        if (checkCondition === "" && topDiscardedCard.includes("-8")) {
            checkCondition = "-8";
        }
        if (checkCondition === "" && topDiscardedCard.includes("-9")) {
            checkCondition = "-9";
        }
        if (checkCondition === "" && topDiscardedCard.includes("-10")) {
            checkCondition = "-10";
        }
        if (checkCondition === "" && topDiscardedCard.includes("-Jack")) {
            checkCondition = "-Jack";
        }
        if (checkCondition === "" && topDiscardedCard.includes("-Queen")) {
            checkCondition = "-Queen";
        }
        if (checkCondition === "" && topDiscardedCard.includes("--King")) {
            checkCondition = "-King";
        }

        



        for (let i of this.player.hand) {
            if (i.includes(checkCondition)) {
                flag = 1;
                let pos = this.player.hand.indexOf(i);
                let discardedCard = this.player.hand.splice(pos,1);
                this.discardPile.push(discardedCard);
            }
        }

        if(flag === 0) {
            for (let i of this.player.hand) {
                if (i.includes("-8")) {
                    flag = 1;
                    let pos = this.player.hand.indexOf(i);
                    let discardedCard = this.player.hand.splice(pos,1);
                    this.discardPile.push(discardedCard);
                }
            }
        } else {
            this.drawFromPile();
        }
        

    }

    shuffleDiscardedPile(card) {
        for (let i = 0; i < card.length; i++) {
            let randomDiscardedCard = this.randomCardPosition(0, card.length);
            let tempCard = card[i];
            card[i] = card[randomDiscardedCard];
            card[randomDiscardedCard] = tempCard;
        }
        return card;
    }
	
    displayState() {
        console.log("The Game State of Player 1: ");
        console.log(this.one.hand);
        console.log("The Game State of Player 2: ");
        console.log(this.two.hand);
    }

    takeTurn(player) {
        player.discardToPile();
    }

    nextPLayer(currentPlayer) {
        if(currentPlayer === this.one) {
            return this.two;
        }
        if(currentPlayer === this.two) {
            return this.one;
        }
    }
	
    playGame() {
        for (let i = 0; i < 5; i++) {
            this.one.hand.push(this.drawPile.pop());
            this.two.hand.push(this.drawPile.pop());
			
        }
		
        // console.log(this.one.hand);
        // console.log(this.two.hand);
		
		
        // Player player = one;
        // this.player = new Player();
        this.player = this.one;
		

        // keep playing until there's a winner
        while (!this.isDone()) {
            this.displayState();
            this.takeTurn(this.player);
            this.player = this.nextPlayer(this.player);
        }

        // display the final score
        this.one.displayScore();
        this.two.displayScore();
    }
	
    isDone() {
        return this.one.hand.isEmpty() || this.two.hand.isEmpty();
    }
}

class Player {
    constructor() {
        // this.playerName = playerName;
        this.hand = new Array(52);
    }

    // draw() {

    // }
	
    // discard() {

    // }

    // takeTurn(player) {

    // }

    // nextPLayer(player) {

    // }

    displayScore() {

    }

}


class Hand {
    constructor() {
        this.emptyArray = new Array(52);
    }
}

// function displayState() {

// }

function main() {
    // let deck = new Deck();
    // console.log(deck.shuffle());
    // let handClass = new Hand();
    let crazyEight = new Eights();
    // handClass.drawPile();
    crazyEight.drawFromPile();
    crazyEight.playGame();
}

main();