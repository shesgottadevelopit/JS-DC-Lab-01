const rankScores = { ace: 1, two: 2, three: 3, four: 4, five: 5, six: 6, seven: 7, eight: 8, nine: 9, ten: 10, jack: 11, king: 12, queen: 13 }

module.exports = function Card( suit, rank ) {
  this.suit = suit
  this.rank = rank
  this.score = rankScores[ rank ]
  this.title = rank + ' of ' + suit
}
