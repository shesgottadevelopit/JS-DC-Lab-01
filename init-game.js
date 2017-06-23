const Card = require('./models/Card.js');
const DeckofCards = require('./models/Deck.js')
const Player = require('./models/Player.js');
var prompt = require('prompt')



// card components
const suits = ['hearts', 'clubs', 'spades', 'diamonds']
const ranks = ['ace', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'jack', 'queen', 'king']
const rankScores = { ace: 1, two: 2, three: 3, four: 4, five: 5, six: 6, seven: 7, eight: 8, nine: 9, ten: 10, jack: 11, king: 12, queen: 13 }

let bey = new Player()
let ri = new Player()
//
prompt.start();

prompt.message = 'Enter the name for '
prompt.get(['user1', 'user2'], function(err, result) {
    // console.log('This player\'s name is: ' + result.user1);
    // console.log('This player\'s name is: ' + result.user2);
    //console.log(result)

    bey.username = (result.user1)
    ri.username = (result.user2)
    //console.log(bey.username)

    newGame()

})

function newGame() {
    const newDeck = new DeckofCards(ranks, suits);
    newDeck.createNewDeck(ranks, suits);
    newDeck.shuffleCards();


    // let bey = new Player('beyonce')
    newDeck.dealHand(bey.hand)
    console.log(`${bey.username} has ${bey.hand.length} cards`)

    // let ri = new Player('rihanna')
    newDeck.dealHand(ri.hand)
    console.log(`${ri.username} has ${ri.hand.length} cards`)


    let rounds = 1;

    while (bey.hand.length !== 52 || ri.hand.length !== 52) {
    // for(let i = 1; i <= rounds; i++) {
        bey.pullCardMethod()
        ri.pullCardMethod()
        console.log(`Round ${rounds}`)
        console.log(`${bey.username} pulled this card: ${bey.currentCard[0].title}`)
        console.log(`${ri.username} pulled this card: ${ri.currentCard[0].title}`)

        if (bey.currentCard[0].score === ri.currentCard[0].score) {
            console.log('War!!!!!!!!!!!!!!!!!!!!!!!!!!!!!')
            console.log(`${bey.username} now has ${bey.hand.length} cards in hand`)
            console.log(`${ri.username} now has ${ri.hand.length} cards in hand`)
            // console.log(`${bey.username} now has ${bey.currentCard.length} current cards`)
            // console.log(`${ri.username} now has ${ri.currentCard.length} current cards`)
            console.log(bey.currentCard.length+ri.currentCard.length + ` cards are on the line`)

        }  else if (bey.currentCard[0].score > ri.currentCard[0].score) {
            bey.hand = bey.hand.concat(ri.currentCard, bey.currentCard );
            console.log(bey.currentCard.length+ri.currentCard.length + ` cards are on the line`)
            // console.log(`${bey.username} now has ${bey.currentCard.length} current cards`)
            // console.log(`${ri.username} now has ${ri.currentCard.length} current cards`)
            console.log(`${bey.username} now has ${bey.hand.length} cards`)
            console.log(`${ri.username} now has ${ri.hand.length} cards`)
            bey.currentCard = []
            ri.currentCard = []
            console.log(`${bey.username} wins round:${rounds}`)

        } else {
            ri.hand = ri.hand.concat(bey.currentCard, ri.currentCard)
            console.log(bey.currentCard.length+ri.currentCard.length + ` cards are on the line`)
            // console.log(`${bey.username} now has ${bey.currentCard.length} current cards`)
            // console.log(`${ri.username} now has ${ri.currentCard.length} current cards`)
            console.log(`${bey.username} now has ${bey.hand.length} cards`)
            console.log(`${ri.username} now has ${ri.hand.length} cards`)
            bey.currentCard = []
            ri.currentCard = []
            console.log(`${ri.username} wins round:${rounds}`)
        }
        rounds++
        console.log('------------------------------------------------')

        if (bey.hand.length === 0 || ri.hand.length === 0) {
            break;
        }

    }

    if (bey.hand.length === 0) {
        console.log(`${ri.username} wins War!!!`)
    } else if (ri.hand.length === 0) {
        console.log(`${bey.username} wins War!!!`)
    }
}

module.exports = newGame
