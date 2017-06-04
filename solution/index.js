/*
 * War
 * A card game player between two players.
 *
 */
const prompt = require('prompt')
const game = require('./models/game.js')
const Player = require('./models/Player.js')

prompt.start()

prompt.get(['playerOneUsername', 'playerTwoUsername'], function( err, result ) {


  const playerOne = new Player( result.playerOneUsername )
  const playerTwo = new Player( result.playerTwoUsername )

  game( playerOne, playerTwo )

})
