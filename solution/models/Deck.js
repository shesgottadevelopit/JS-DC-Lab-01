const Card = require('./Card')

function Deck() {

  function createDeck() {
    const suits = ['hearts', 'clubs', 'spades', 'diamonds']
    const ranks = ['ace', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'jack', 'queen', 'king']

    const cards = []
    for (let i = 0; i < suits.length; i++) {
      for (let j = 0; j < ranks.length; j++) {
        cards.push( new Card( suits[i], ranks[j] ) )
      }
    }

    return cards

  }

  this.cards = createDeck()

  this.dealHand = function ( handLength ) {
    handLength = handLength || 26 // 52 divided by 2

    const handToReturn = []
    for (let i = 0; i < handLength; i++) {
      let card = this.cards.splice( Math.random() * this.cards.length, 1 )[0]

      handToReturn.push( card )
    }

    return handToReturn
  }

}

module.exports = Deck
