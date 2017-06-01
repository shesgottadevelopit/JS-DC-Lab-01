const Deck = require('./Deck')
const Card = require('./Card')

module.exports = function Game ( firstPlayer, secondPlayer ) {

  this.play = function() {

    const gameDeck = new Deck

    firstPlayer.hand = gameDeck.dealHand()
    secondPlayer.hand = gameDeck.dealHand()

    let noOneHasWonYet = true
    while ( noOneHasWonYet ) {

      firstPlayer.drawCard()
      secondPlayer.drawCard()

      console.log( firstPlayer.username, firstPlayer.showCurrentCardTitle() )
      console.log( secondPlayer.username, secondPlayer.showCurrentCardTitle() )

      if ( firstPlayer.showCurrentCardScore() === secondPlayer.showCurrentCardScore() ) {

        console.log( 'War!!' )

        let war = true
        while ( war ) {

          firstPlayer.drawCard()
          secondPlayer.drawCard()

          console.log( firstPlayer.username, firstPlayer.showCurrentCardTitle() )
          console.log( secondPlayer.username, secondPlayer.showCurrentCardTitle() )

          if ( firstPlayer.showCurrentCardScore() === secondPlayer.showCurrentCardScore() ) {

            console.log('War again!!')

          } else if ( firstPlayer.showCurrentCardScore() > secondPlayer.showCurrentCardScore() ) {

            console.log(`${ firstPlayer.username } wins this round!`)
            firstPlayer.collectWinnings( secondPlayer )
            war = false

          } else {

            console.log(`${ secondPlayer.username } wins this round!`)
            secondPlayer.collectWinnings( firstPlayer )
            war = false

          }

        }

      } else if ( firstPlayer.showCurrentCardScore() > secondPlayer.showCurrentCardScore() ) {

        console.log(`${ firstPlayer.username } wins this round!`)
        firstPlayer.collectWinnings( secondPlayer )

      } else {

        console.log(`${ secondPlayer.username } wins this round!`)
        secondPlayer.collectWinnings( firstPlayer )

      }

      console.log( `${ firstPlayer.username } has ${ firstPlayer.showHandLength() } cards`)
      console.log( `${ secondPlayer.username } has ${ secondPlayer.showHandLength() } cards`)
      console.log( 'cards: ', firstPlayer.hand.length + secondPlayer.hand.length )
      console.log( '-----------------------------' )
   
      if ( firstPlayer.showHandLength() === 0 ) {

        console.log( `${ secondPlayer.username } has won!` )
        noOneHasWonYet = false

      } else if ( secondPlayer.showHandLength() === 0 ) {

        console.log( `${ firstPlayer.username } has won!` )
        noOneHasWonYet = false

      }

    }

  }
}
