
// Main Game Logic Section
// Create game board
const gameBoard = (function () {
    const createGameBoard = [[" ", " ", " "],[" ", " ", " "],[" ", " ", " "]];
    return createGameBoard;
})()

// Create player factory
const player = (function (player, piece) {
    return {player, piece};
})

// Create players one and two
const createPlayers = (function () {
    const playerOne = player("Player One", "X");
    const playerTwo = player("Player Two", "O");
    return {playerOne, playerTwo};
})()

// Game logic
const gameController = (function () {
    let turn = 1;
    
})()

// Run as console game
const runConsoleGame = (function () {

    console.log(gameBoard)
})()


function incrementTurn(turn){
    turn++;
}
