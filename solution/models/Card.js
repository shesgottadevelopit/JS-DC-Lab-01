/*
 * Card
 * Class implementation of a Card
 *
 * A Card is instantiated with a suit and rank (both passed in as parameters).
 * From this, an object is created representing a playing card in a deck of
 * cards, each with a suit, rank, title and score. The title is generated based
 * on the suit and rank passed in as parameters, so parameters of suit = 'Hearts'
 * and rank = 'Queen' will generate a title of 'Queen of Hearts'. Similarly, the
 * score is looked up in the rankScores object. In the above Queen of Hearts
 * example, the score would be 13.
 *
 */

// rankScores contains a score for each rank
const rankScores = { ace: 1, two: 2, three: 3, four: 4, five: 5, six: 6, seven: 7, eight: 8, nine: 9, ten: 10, jack: 11, king: 12, queen: 13 }

class Card {
  constructor ( suit, rank ) {
    this.suit = suit // assigns the suit parameter to the suit property
    this.rank = rank // assigns the rank parameter to the rank property
    this.title = `${ rank } of ${ suit }` // creates the card title from the rank and suit
    this.score = rankScores[ rank ] // looks up the score based on the rank
  }
}

// // uncomment to test
// const queenOfHearts = new Card( 'hearts', 'queen' )
// console.log( queenOfHearts )
// console.log( queenOfHearts.score ) // => 13

module.exports = Card
