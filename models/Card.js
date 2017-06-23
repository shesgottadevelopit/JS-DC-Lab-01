const rankScores = { ace: 1, two: 2, three: 3, four: 4, five: 5, six: 6, seven: 7, eight: 8, nine: 9, ten: 10, jack: 11, king: 12, queen: 13 }

// class for an individual card
class Card {
    constructor(rank, suit) {
        this.suit = suit;
        this.rank = rank;
        this.title = this.rank + ' of ' + this.suit;
        this.score = rankScores[this.rank]; // or //this.score = rankScores[rank]
    }
}

// const newCard = new Card('queen', 'hearts');
// console.log(newCard);

module.exports = Card;
