const gameBoard = (function () {
    const createGameBoard = [[" ", " ", " "],[" ", " ", " "],[" ", " ", " "]];
    return createGameBoard;
})()


const player = (function (player, piece) {
    return {player, piece};
})

const createPlayers = (function () {
    const playerOne = player("Player One", "X");
    // playerOne.piece = "X";
    const playerTwo = player("Player Two", "O");
    // playerTwo.piece = "O";
    return {playerOne, playerTwo};
})()

const gameController = (function () {
    let turn = 1;
    
})()

const runConsoleGame = (function () {

    console.log(gameBoard)
})()

function incrementTurn(turn){
    turn++;
}
