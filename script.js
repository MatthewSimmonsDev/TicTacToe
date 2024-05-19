
// Main Game Logic Section

const globalVariables = {
    turn : 1,
    
}
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
    displayGameBoard();
    instructPlayerToPlacePiece();
    
})()

function instructPlayerToPlacePiece(){
    let prompt;
    if (globalVariables.turn % 2 === 1){
        prompt = window.prompt("X piece select an available location.");
        globalVariables.turn ++;
        
        console.log(globalVariables.turn);
        
    }
    else if (globalVariables.turn % 2 !== 1){11
        prompt = window.prompt("O piece select an available location.");
        globalVariables.turn++
        
        console.log(globalVariables.turn);
        
    }
    
    displayGameBoard();
    checkTurns();
}

function displayGameBoard(){
    
    for (let i = 0; i <= 2; i++){
        for (let j = 0; j <= 2; j++){
            gameBoard[i][j] = " . "
        }
    }
    
    console.log(gameBoard)
}

function checkTurns(){
    if( globalVariables.turn <= 9){
        instructPlayerToPlacePiece();
    } else {
        checkForEndgame();
    }
}
function checkForEndgame(){
    if (globalVariables.turn >= 9) {
        //trigger game over
        console.log("Game Over");
        
    }
}

