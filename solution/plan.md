# Project Outline

## Classes

1. Player
- username
- a player's cards
- current card
- collect winnings

2. Deck
- cards (52)
- drawCards function that returns a hand of cards
- createCards function that builds our deck

3. Card
- suit
- rank
- title
- score

## Game Logic
1. Initializing 2 players
2. Start game
3. Each draws a card
4. compare those cards
    - if player 1 wins (i.e. has a higher scored card), player 1 takes cards
    - if player 2 wins, player 2 collects winnings
    - if cards are tied -> declare war, repeat steps 3 and 4 until a player wins
5. repeat steps 3 and 4 until a player has all the cards (thus winning the game)
