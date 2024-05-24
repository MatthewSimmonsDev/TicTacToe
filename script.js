// Dom Logic Section
const gameBoardContainer = document.querySelector("#game-board-container");
const instructionText = document.querySelector("#instruction-text");
const resetButton = document.querySelector("#reset-button");

// global variables accessable only from object and modified in various places
const globalVariables = {
    turn : 0,
    prompt : "",
    piece : "",
    gameOver: false,
}

// IIFE to start the game and setup the event listeners
const logicController = (function (){
    globalVariableConditionals();
    createDomGameBoard();
    instructionTextModifier();
    resetGameStatus();
    
})()

//Creates the game board and activates the event listener for clicking squares
function createDomGameBoard(){
    const numberOfGameBoardSquares = 9;
    // Create the game squares and assign ids and class
    for (let i = 0; i < numberOfGameBoardSquares; i++){
        const gameSquare = document.createElement('div');
        gameBoardContainer.appendChild(gameSquare);
        gameSquare.setAttribute("id", (i+1));
        gameSquare.setAttribute("class", "game-square");
        // Event listener for placing pieces
        squareEventListener(gameSquare);
    }

}

// checks and runs all the game functions
function squareEventListener(gameSquare) {
    gameSquare.addEventListener("click", function () {
        console.log(globalVariables.turn)
        if(globalVariables.gameOver === false){
            // if player clicks a square that already has been selected, try again
            if(gameSquare.textContent){
                tryAgain();
            }
            // move up turn and modify necessary variables then check for win and modify text
            else{
                globalVariableConditionals();
                fillGameBoard(gameSquare);
                checkForWin();
                instructionTextModifier();
            }
        }
        // if no player wins when the last piece is played, game over
        if(globalVariables.turn >= 10){
            gameOver();
        }
    });
}

// controls variables for X or O pieces and proper text display
function globalVariableConditionals(){
    globalVariables.turn ++;
    if (globalVariables.turn % 2 === 0){
        globalVariables.prompt = "O piece select an available location.";
        globalVariables.piece = "X"
    }
    else if (globalVariables.turn % 2 !== 0){
        globalVariables.prompt = "X piece select an available location.";
        globalVariables.piece = "O"
    }
}

// Create game board
const gameBoard = (function () {
    const createGameBoard = [[1, 2, 3],[4, 5, 6],[7, 8, 9]];
    return createGameBoard;
})()

// Checks square if it matches with gameBoard array then assigns proper piece to square
function fillGameBoard(square){
    const squareString = square.getAttribute("id");
    const squareNumber = Number(squareString);
    for (let i = 0; i < gameBoard.length; i++){
        for (let j = 0; j < gameBoard.length; j++){
            if(squareNumber == gameBoard[i][j]){
                gameBoard[i][j] = globalVariables.piece;
                square.textContent = globalVariables.piece;
            }
        }
    }
}

function instructionTextModifier(){
    instructionText.textContent = globalVariables.prompt;
}

// Dont change turn and tell the user to make correct placement
function tryAgain(){
    globalVariables.turn +=0;
    makeAValidSelection();
}

function makeAValidSelection(){
    instructionText.textContent = "Please make a valid space selection"
}

// Game over text
function gameOver(){
    instructionText.textContent = "No Winner"
}

// reset button reloads the page
function resetGameStatus(){
    resetButton.addEventListener("click", function(){
        window.location.reload();
    })
}

// Checks for different three in a row combinations
function checkForWin(){
    for (let i = 0; i < gameBoard.length; i ++){
        if (gameBoard[i][0] === gameBoard[i][1] && gameBoard[i][1] === gameBoard[i][2]){
            activePieceWins();
        }
        if (gameBoard[0][i] === gameBoard[1][i] && gameBoard[1][i] === gameBoard[2][i]){
            activePieceWins();
        }
        if (gameBoard[0][0] === gameBoard[1][1] && gameBoard[1][1] === gameBoard[2][2]){
            activePieceWins();
        }
        if (gameBoard[0][2] === gameBoard[1][1] && gameBoard[1][1] === gameBoard[2][0]){
            activePieceWins();
        }
    }
}

// Declare winner and set gameover to true so nothing else can be done.
function activePieceWins(){
    globalVariables.prompt = globalVariables.piece + " wins!";
    globalVariables.gameOver = true;
}