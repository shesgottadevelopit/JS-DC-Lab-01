// function init() {

var prompt = require('prompt')

// card components
const suits = ['hearts', 'clubs', 'spades', 'diamonds']
const ranks = ['ace', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'jack', 'queen', 'king']
const rankScores = { ace: 1, two: 2, three: 3, four: 4, five: 5, six: 6, seven: 7, eight: 8, nine: 9, ten: 10, jack: 11, king: 12, queen: 13 }
// const suits = ['hearts', 'clubs', 'spades']
// const ranks = ['ace', 'two', 'three']
// const rankScores = { ace: 1, two: 2, three: 3}



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

// class for players
class Player {
    constructor() {
    // constructor(username='Program Generated Player') {
        // this.username = username;
        // a method for retrieving the username via prompt - not sure if it's working
        this.username = function() {
            prompt.start();
            var property = {
                message: 'what is your name?',
                name: 'username'
            }
            prompt.get(property, function(err, result) {
                console.log('This player\'s name is: ' + result.username);
                return result.username;
                letsPlay.players.push(result.username);
            })
        };
        this.hand = [];
        newDeck.dealHand(this.hand);

        this.pullCardMethod = function() {
            let randomCard = Math.floor(Math.random() * this.hand.length);
            let theCard = this.hand[randomCard];
            newDeck.removeCard(this.hand, randomCard)
            return theCard; //console.log(theCard);
        }
        this.playerStats = {
            cardPlayed: this.pullCardMethod(),

            currentNumberOfCardsInDeck: this.hand.length
        };
        this.addCard = function (x) {
            this.hand.push(x);
        };
        this.deleteCard = function(x) {
            newDeck.remove(this.hand, x)
        }


    }
}


// assign card deck
const newDeck = new DeckofCards(ranks, suits);
newDeck.createNewDeck(ranks, suits);

// create a deck and log the number of cards
// console.log('The original number of cards in our unshuffled deck is: ' + newDeck.cards.length)
// console.log(newDeck.cards)


// test shuffled deck
newDeck.shuffleCards();
// console.log('The number of cards in our NOW shuffled deck is: ' +newDeck.shuffledDeck.length)
// console.log(newDeck.shuffledDeck)
// console.log('The number of cards in our original unshuffled deck is now: ' + newDeck.cards.length)
// console.log(newDeck.cards)


// deal hands to players
let bey = new Player();
bey.username();
//let newPlayer = new Player()
let riri = new Player('rihanna');
//console.log(riri);
// console.log('The number of cards in riri\'s hand is ' + riri.hand.length)
// console.log('The number of cards in our shuffled deck after dealing to player(s) is ' + newDeck.shuffledDeck.length);

// test addition Player Methods and Objects
//console.log(bey.pullCardMethod());
// console.log(bey.hand.length)
// console.log(bey.hand)
//console.log(riri.pullCardMethod());
//console.log(bey.playerStats)

// }
// module.exports = init;
