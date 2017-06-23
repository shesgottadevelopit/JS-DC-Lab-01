const Card = require('./Card.js');

// card components
const suits = ['hearts', 'clubs', 'spades', 'diamonds']
const ranks = ['ace', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'jack', 'queen', 'king']


// deck of cards class; once it is pulled, it can't be regenerated until the the array is empty
class DeckofCards {

    constructor(ranks, suits) {
        this.cards = [];
        this.shuffledDeck = [];
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

        };
        this.removeCard = function(deck,position) {
            deck.splice(position,1);
            return position;
        };
        // i can possibly combine getRandomCardToShuffle and shuffleCards into one function
        this.getRandomCardToShuffle = function() {
            let randomCardIndex = Math.floor(Math.random() * this.cards.length);
            this.shuffledDeck.push(this.cards[randomCardIndex]);
            this.removeCard(this.cards,randomCardIndex)
            //return this.cards[randomCard]

        };
        this.shuffleCards = function( ) {
            // is the total number of cards, it will always be 52 in this case, can also pass in a variable instead
            for (let i = 0; i < 52; i++) {
                this.getRandomCardToShuffle();

            }
        };
        this.dealHand = function(hand) {

            if (this.shuffledDeck.length === 52) {
                for(let i = 0; i < 26; i++) {
                    hand.push(this.shuffledDeck[i])
                    this.removeCard(this.shuffledDeck, i)
                }
            } else {
                for(let i = this.shuffledDeck.length - 1; i >= 0; i--) {
                    hand.push(this.shuffledDeck[i])
                    this.removeCard(this.shuffledDeck, i)
                }
            }
        }
    }
}


// // assign card deck
// const newDeck = new DeckofCards(ranks, suits);
// newDeck.createNewDeck(ranks, suits);
//
// // create a deck and log the number of cards
// console.log(newDeck.cards)
// console.log('The original number of cards in our unshuffled deck is: ' + newDeck.cards.length)
//
//
// // test shuffled deck
// newDeck.shuffleCards();
// console.log('The number of cards in our NOW shuffled deck is: ' +newDeck.shuffledDeck.length)
// console.log(newDeck.shuffledDeck)
// console.log('The number of cards in our original unshuffled deck is now: ' + newDeck.cards.length)
// console.log(newDeck.cards)

module.exports = DeckofCards;
