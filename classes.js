// card components

const suits = ['hearts', 'clubs', 'spades', 'diamonds']
const ranks = ['ace', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'jack', 'queen', 'king']
const rankScores = { ace: 1, two: 2, three: 3, four: 4, five: 5, six: 6, seven: 7, eight: 8, nine: 9, ten: 10, jack: 11, king: 12, queen: 13 }


// class for an individual card
/*  EXAMPLE
    {
      suit: 'hearts',
      rank: 'ace',
      title: 'ace of hearts',
      score: 1
    }
*/

class Card {
    constructor(rank, suit) {
        this.suit = suit;
        this.rank = rank;
        this.title = this.rank + ' of ' + this.suit;
        //this.score = rankScores[rank]
        this.score = rankScores[this.rank]
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
                        //this.cards.push(ranks[i] + ' of ' + suits[j])
                        this.cards.push(new Card(ranks[i], suits[j]))
                    }
                }
            } else {
                return;
            }

        }
    }

}

let dealNewDeck = new DeckofCards(ranks, suits);
const newDeck = new DeckofCards(ranks, suits);
newDeck.createNewDeck(ranks, suits);
let handOfCards = newDeck.cards;


// class for players

class Player {
    constructor(username='Program Generated Player') {
        this.username = username;
        //this.hand = handOfCards;
        this.hand = [];
    }
}
let Queen = new Player('Queen')
console.log(Queen);
console.log(new Player());
