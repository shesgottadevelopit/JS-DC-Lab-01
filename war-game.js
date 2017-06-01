/*

Rules of War
-----------------
1. a deck of cards is shuffled and divided evenly between two players
2. each player pulls one card from the deck, revealing it to the other player
3. the player that the higher ranked card wins that round AND collects both cards
    a.) the winner of that round then places that card at the bottom of their deck
    b.) IF both layers draw cards with the same rank, then "War" is declared and both players must continue to draw until one is declared a winner.
    c). The winner then collects all the cards and add them to their deck as usual
4. a winner is officially declared if they have all 52 cards in their deck and the other player has none

Program Requirements
---------------------
1. program must run with `node index.js`
2. Each player will be prompted to enter their usernames
3. For each round, the command line must include:
    - CURRENT round
    - what cards each player drew from their respective deck
    - how many cards each player has left
    - If both players draw cars with the same score, the command line should print "WAR" and then draw more cards from each player to break the tie
*/

// 1. it should have a way to ensure there are at least two players
// 2. it should have a method that shuffles the deck of cards -DONE
// 3. it should have a method that then deals that deck of cards evenly between two players - DONE
// 4. it should have a method that pulls one card from each players hand and then prints those cards on the command line ALONG with the following stats:
/* PLAYER STATS ARE:
    1. current cards (already stated)
    2. current round
    3. how many cards each player has left in their deck
*/
// 5. it should have a way to evaluate the ranks of each players given cards.
    // if both cards have the same rank, print WAR and then automatically generate a new set of cards for both players
    // if x players card is higher ranked than y players card, then push both x and y players cards to the bottom of the x deck
// 6. it should have a way to evaluate if there are any cards left and once only one player has all the cards, print "Player xyz is the winner of War"
