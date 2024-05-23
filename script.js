// Dom Logic Section
const gameBoardContainer = document.querySelector("#game-board-container");
const instructionText = document.querySelector("#instruction-text");

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

function squareEventListener(gameSquare) {
    gameSquare.addEventListener("click", function () {
        if(globalVariables.gameOver === false){
            tryAgain();
            }else{
                globalVariableConditionals();
                fillGameBoard(gameSquare);
                checkForWin();
                instructionTextModifier();
            }
        }
    );
}

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

const globalVariables = {
    turn : 0,
    prompt : "",
    piece : "",
    locationArr : [],
    gameOver: false,
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

// Lower turn back one and tell the user to make correct placement
function tryAgain(){
    globalVariables.turn +=0;
    makeAValidSelection();
}

function makeAValidSelection(){
    instructionText.textContent = "Please make a valid space selection"
}

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

function activePieceWins(){
    globalVariables.prompt = globalVariables.piece + " wins!";
    globalVariables.turn = 10;
    globalVariables.gameOver = true;
}

