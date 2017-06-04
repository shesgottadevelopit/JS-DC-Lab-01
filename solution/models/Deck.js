/*
 * Deck
 * Class implementation of a Deck
 *
 * A Deck is instantiated with no parameters. However, the Deck class depends on
 * the Card class, as the Deck contains an array of 52 instances of the Card
 * class.
 *
 * The Deck contains two important properties: cards and dealHand(). The cards
 * property is an array with 52 instances of the Card class, representing all 52
 * posible combinations of suits and ranks in a deck of cards. The dealHand()
 * method will return a random collection of 26 cards whenever called.
 *
 */
const Card = require('./Card.js')

class Deck {
  constructor () {
    // creates the 52 possible card combinations
    this.cards = createDeck()

    function createDeck() {
      // all posible suits or ranks
      const suits = ['hearts', 'clubs', 'spades', 'diamonds']
      const ranks = ['ace', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'jack', 'queen', 'king']

      // this will be our final deck of cards, returned at the end
      const cards = []

      // for every suit ...
      for ( let i = 0; i < suits.length; i++ ) {
        // and for every rank ...
        for ( let j = 0; j < ranks.length; j++ ) {
          // create an instance of the Card class
          // and add it to the cards array returned
          // at the end
          cards.push( new Card( suits[ i ], ranks[ j ] ) )
        }
      }

      return cards
    }
  }

  // deal a hand of cards (i.e. 26 random cards)
  dealHand() {
    // array to return at the end
    const handToReturn = []

    // 26 times ...
    for ( let i = 0; i < 26; i++ ) {
      // find a random number to be used as an index
      let randomIndex = Math.random() * this.cards.length

      // remove the card at that index
      // Note: Array.splice always returns an array, so
      // rather than have an array with a card in it,
      // immediately get the first (and only) item in the
      // array.
      let card = this.cards.splice( randomIndex, 1 )[0]
      handToReturn.push( card )
    }

    return handToReturn
  }

}

// const gameDeck = new Deck()
// let hand = gameDeck.dealHand() // => 26 random cards
// console.log( hand )
// console.log( hand.length )

module.exports = Deck
