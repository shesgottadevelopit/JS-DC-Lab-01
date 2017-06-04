/*
 * Game
 * Logic for conduction our game as rounds.
 *
 * Part 1:
 * After we've dealt each player a hand of cards, we'll set up the logic for
 * conducting the game in rounds. We'll use a while loop so that we can control
 * when our loop breaks by checking whether or not a player has won at the end
 * of each round.
 *
 * Par 2:
 * First we check if it's a draw. If it is, then we continue. Second, we check
 * if playerOne won. If they did, then we call the collectWinnings method and
 * pass in playerTwo. Second we check if playerTwo won. If they did, then we
 * call the collectWinnings method and pass in playerTwo.
 *
 */

const Deck = require('./Deck.js')

function game ( playerOne, playerTwo ) {

    // first we need a deck of cards
    const gameDeck = new Deck()

    // deal both players a hand
    playerOne.hand = gameDeck.dealHand()
    playerTwo.hand = gameDeck.dealHand()


    // game play continues until someone has won (logical check at the bottom)
    let noOneHasWonYet = true
    let roundCount = 1
    while ( noOneHasWonYet ) {

      // Logic for a round

      // first draw cards
      playerOne.drawCard()
      playerTwo.drawCard()

      console.log( `*------------- round: ${ roundCount}` )
      console.log( `${playerOne.username} drew the ${playerOne.showCurrentCard().title}` )
      console.log( `${playerTwo.username} drew the ${playerTwo.showCurrentCard().title}` )

      // then compare those cards
      if ( playerOne.showCurrentCardScore() === playerTwo.showCurrentCardScore() ) {

        // continue without changing either players currentCards array
        console.log( 'War!!' )

      } else if ( playerOne.showCurrentCardScore() > playerTwo.showCurrentCardScore() ) {

        // call collectWinings on playerOne
        console.log( `${playerOne.username} wins this round!` )
        playerOne.collectWinnings( playerTwo )

      } else {

        // call collectWinings on PlayerTwo
        console.log( `${playerTwo.username} wins this round!` )
        playerTwo.collectWinnings( playerOne )

      }

      roundCount++

      // Logic check to see if someone has won
      if ( playerOne.hand.length === 0 ) {

        console.log( `${playerTwo.username} has won!` )
        noOneHasWonYet = false

      } else if ( playerTwo.hand.length === 0 ) {

        console.log( `${playerOne.username} has won!` )
        noOneHasWonYet = false

      }

    }

}

module.exports = game
