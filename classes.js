// card components

const suits = ['hearts', 'clubs', 'spades', 'diamonds']
const ranks = ['ace', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'jack', 'queen', 'king']
const rankScores = { ace: 1, two: 2, three: 3, four: 4, five: 5, six: 6, seven: 7, eight: 8, nine: 9, ten: 10, jack: 11, king: 12, queen: 13 }
// const suits = ['hearts', 'clubs', 'spades']
// const ranks = ['ace', 'two', 'three']
// const rankScores = { ace: 1, two: 2, three: 3}


// CLASSES

// class for an individual card
class Card {
    constructor(rank, suit) {
        this.suit = suit;
        this.rank = rank;
        this.title = this.rank + ' of ' + this.suit;
        this.score = rankScores[this.rank]; // or //this.score = rankScores[rank]
    }
}

//const newCard = new Card('queen', 'hearts');
//console.log(newCard);


// deck of cards class; once it is pulled, it can't be regenerated until the the array is empty
class DeckofCards {
    constructor(ranks, suits) {
        this.cards = [];
        this.createNewDeck = function(ranks, suits) {
            if (this.cards.length === 0) {
                for(let i = 0; i < ranks.length; i ++) {
                    for (let j = 0; j < suits.length; j++) {
                        this.cards.push(new Card(ranks[i], suits[j]))
                    }
                }
            } else {
                return;
            }

        };
        this.removeCard = function(position) {
            this.cards.splice(position,1);
            return position;
        };
        this.getRandomCardToShuffle = function() {
            let randomCard = Math.floor(Math.random() * this.cards.length);
            return randomCard;


        };
        this.shuffleCards = function(x) {
            for (let i = 0; i <= x; i++) {
                this.cards.push(this.getRandomCardToShuffle(this.cards[i]));

            }
        };
    }
}
// class for players
class Player {
    constructor(username='Program Generated Player') {
        this.username = username;
        //this.hand = handOfCards;
        this.hand = [];
        newDeck.dealHand(this.hand);
    }
}


// assign card deck to a variable and create a deck
const newDeck = new DeckofCards(ranks, suits);
newDeck.createNewDeck(ranks, suits);
//console.log(newDeck.cards.length)
//console.log(newDeck.cards)


// test shuffled deck
newDeck.shuffleCards();
console.log(newDeck.cards.length)
console.log(newDeck.cards)



// let Queen = new Player('Queen');
// let King = new Player('King');
// console.log(Queen);
// console.log(King);
// console.log(Queen.hand.length)
// console.log(King.hand.length);
// console.log(newDeck.cards.length)
