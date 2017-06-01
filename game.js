const init = require('./init-game.js');
var prompt = require('prompt');


// test imports
// let bey = new Player('beyonce');
// console.log(bey)
//console.log(bey.playerStats)


// 4. it should have a method that pulls one card from each players hand and then prints those cards on the command line ALONG with the following stats:


/* PLAYER STATS ARE: - THERE IS AN OBJECT STORING THIS INFORMATION
    1. current cards (already stated)
    2. current round
    3. how many cards each player has left in their deck
*/

// 5. it should have a way to evaluate the ranks of each players given cards.
    // if both cards have the same rank, print WAR and then automatically generate a new set of cards for both players
    // if x players card is higher ranked than y players card, then push both x and y players cards to the bottom of the x deck


// 6. it should have a way to evaluate if there are any cards left and once only one player has all the cards, print "Player xyz is the winner of War"

function newGame() {

    if(letsPlay.players === 2) { // let's play

    bey.pullCardMethod();
    riri.pullCardMethod();
        if(bey.playerStats.cardPlayed.score === riri.playerStats.cardPlayed.score) {
            // do this
        } else if (bey.playerStats.cardPlayed.score > riri.playerStats.cardPlayed.score) {
            //do this

        } else {
            // do this
        }

    }

}
// class for a game
class Game {
    constructor() {
        this.players = [];
        this.gameStats = {
            currentRound: function() {
                // figure out a way to count the number of times both players pulled a card
            },
            //printPlayerStats: x
        };
        this.wonCurrentRound = '';
        this.wonTheGame = '';

    }
}

let letsPlay = new Game();
console.log(letsPlay)
console.log(letsPlay.players)
