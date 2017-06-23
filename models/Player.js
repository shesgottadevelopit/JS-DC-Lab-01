const DeckofCards = require('./Deck.js')
const prompt = require('prompt')

const suits = ['hearts', 'clubs', 'spades', 'diamonds']
const ranks = ['ace', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'jack', 'queen', 'king']

// class for players
class Player {
    // constructor() {
    constructor(username='Program Generated Player') {
        this.username = username;

        this.hand = [];
        this.currentCard = []
        // newDeck.dealHand(this.hand);
        // newDeck.dealHand(this.hand)

        this.pullCardMethod = function() {
            let playerCard = this.hand.shift()
            this.currentCard.unshift(playerCard)
            //return playerCard
            // let randomCard = Math.floor(Math.random() * this.hand.length);
            // let theCard = this.hand[randomCard];
            // // newDeck.removeCard(this.hand, randomCard)
            // newDeck.removeCard(this.hand, randomCard)
            // return theCard; //console.log(theCard);
        }
        // this.playerStats = {
        //     cardPlayed: this.pullCardMethod(),
        //     //cardPlayedScore: this.playerStats.cardPlayed.score,
        //     currentNumberOfCardsInDeck: this.hand.length
        // };
        
    }
}

// const newDeck = new DeckofCards(ranks, suits);
// newDeck.createNewDeck(ranks, suits);
// newDeck.shuffleCards();
//
//
// let bey = new Player('beyonce')
// console.log(bey.username)
// newDeck.dealHand(bey.hand)
// console.log(bey.hand)
//
//
//
// let ri = new Player('rihanna')
// console.log(ri.username)
// newDeck.dealHand(ri.hand)
// console.log(ri.hand)
//
// console.log(`The number of cards in the shuffled deck are now ${newDeck.shuffledDeck.length}`)
//
// console.log(`${bey.username} has ${bey.hand.length} cards`)
// console.log(`${ri.username} has ${ri.hand.length} cards`)
//
// // checking to see if the pullCardMethod works - it does
// for (let i = bey.hand.length; i > 0; i --) {
//     console.log(bey.pullCardMethod())
// }
// console.log(`${bey.username} has ${bey.hand.length} cards`)
// // console.log(bey.pullCardMethod())





module.exports = Player;
