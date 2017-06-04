/*
 * Player
 * Class implementation of a Player
 *
 * In our game we need a class to represent our players - i.e. the following
 * Player class. Players are instantiated with a single parameter representing
 * their username. The username is one of 3 properties of our Player class; the
 * other two are: the player's hand and the player's currently drawn cards.
 *
 * Our player has a couple of important methods, the main two being drawCard()
 * and collectWinnings(). Each is detailed below.
 */


class Player {
  constructor ( username ) {
    this.username = username
    this.hand = []
    this.currentCards = []
  }

  // remove the first card in the array and add it to the currentCards array
  // i.e. 'draw a card'
  drawCard() {
    let card = this.hand.shift()
    this.currentCards.push( card )
  }

  // take the current hand array, the currentCards array and the currentCards
  // array on the losing player and concatenate those three arrays into a new
  // array representing the current players new hand. Reset the currentCards
  // arrays on both players
  collectWinnings( otherPlayer ) {
    this.hand = this.hand.concat( this.currentCards, otherPlayer.currentCards )
    this.currentCards = []
    otherPlayer.currentCards = []
  }

  // This lets get the current card from a player without having to write out the
  // logic for doing so each time
  showCurrentCard() {
    return this.currentCards[ this.currentCards.length - 1 ]
  }

  // same as above just for the current card's score
  showCurrentCardScore() {
    return this.showCurrentCard().score
  }

}

// const playerOne = new Player('Zakk')
// playerOne.hand = myGameDeck.dealHand()  // => 26
//
// playerOne.collectWinnings( playerTwo )


module.exports = Player
