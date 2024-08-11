# Yahtzee Game

This project is a digital implementation of the classic dice game Yahtzee. It replicates the board game based on game components, object of the game, gameplay, valid turns, and end of game conditions.

## Game Components

- Five virtual 6-sided dice
- A digital Yahtzee score card for the player

## Object of the Game

The goal of Yahtzee is for the player to roll dice and fill out their score card over the course of 13 rounds, trying to obtain the best rolls they can in 13 different scoring combinations.

## How to Play

### Rolling the Dice

1. At the start of a turn, the player rolls all five dice.
2. The player can reroll some or all the dice up to two more times.
3. Players can set aside any dice they want to keep and roll the rest.
4. The dice can be scored after any of the rolls.

### Scoring

- Scoring the dice ends the player's turn.
- To score, the player selects one of the categories on their score card and enters the score into it.
- Each category can be scored only once per game.
- Categories can be filled in any order.
- A player must score on their turn even if there are no good categories remaining.
- A player may write a score of zero in any category if they have rolled no point-generating results or if they choose to do so.
- Once a category is filled, it may not be changed.

## End of Game

The game consists of thirteen rounds. At the end of the thirteenth round, the game ends and the final score is calculated.

## Technical Details

This project is implemented using HTML, CSS, and JavaScript. The main components are:

- `index.html`: The main structure of the game interface
- `game.js`: Handles the game logic, including rolling dice and updating the game state
- `scoring.js`: Manages the scoring system and calculates the final score
- `yahtzee.css`: Styles the game interface for an engaging user experience

## How to Run

To play the game:

1. Clone this repository to your local machine.
2. Open the `index.html` file in a modern web browser.
3. Click the "ROLL THE DICE" button to start your turn.
4. Select dice to keep by clicking on them.
5. Use the score sheet to record your score for each round.

## Future Improvements

- Add multiplayer functionality
- Implement AI opponents
- Create a mobile-responsive design for play on various devices

## Contributing

Contributions to improve the game are welcome. Please feel free to submit a pull request or open an issue for any bugs or feature requests.

## License

[Add your chosen license here]

