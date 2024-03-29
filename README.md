# Tic Tac Toe Game

A simple web-based Tic Tac Toe game implemented using HTML, CSS, and JavaScript.

## How to Play

1. Open the `index.html` file in a web browser.
2. Click on the game board to place your X or O.
3. The game will display a message when there is a winner or if it's a tie.
4. Click the "Reset" button to start a new game.

## Files

- `index.html`: The main HTML file containing the structure of the game.
- `Stylesheet.css`: The CSS file for styling the game.
- `app.js`: The JavaScript file containing the game logic.

## Features

- Two players take turns to play (X and O).
- The game detects a winner or a tie.
- Reset button to start a new game.
- New Game button to start a new round without refreshing the page.

## Code Overview

- `app.js`: Handles the game logic, including player turns, winner detection, and button functionality.
- `Stylesheet.css`: Provides styles for the game elements.
- `index.html`: Defines the structure of the game, including the game board and buttons.

## Winning Patterns

The game checks for winning patterns in the following ways:

- Rows: [0, 1, 2], [3, 4, 5], [6, 7, 8]
- Columns: [0, 3, 6], [1, 4, 7], [2, 5, 8]
- Diagonals: [0, 4, 8], [2, 4, 6]
