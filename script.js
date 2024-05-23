// grab the static divs from the dom
const gameBoardContainer = document.querySelector("#game-board-container");
const instructionText = document.querySelector("#instruction-text");
const resetButton = document.querySelector("#reset-button");

//'Global' vairables that are only accessable through the object to move them out
// of 'true' global
const globalVariables = {
    turn : 0,
    prompt : "",
    piece : "",
    gameOver: false,
}

// Sets global variables to based on the turn and incremens the turn
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

// Creates the game board
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

// IIFE to start the game on page load, then passes off to the event listener
const logicController = (function (){
    globalVariableConditionals();
    createDomGameBoard();
    instructionTextModifier();
    resetGameStatus();
    
})()

// Event listener holds the majority of the functionality. It creates a 'pause wall'
// held behind clicking a space
function squareEventListener(gameSquare) {
    gameSquare.addEventListener("click", function () {
        if(globalVariables.gameOver === false){
            if(gameSquare.textContent){
                tryAgain();
            }else{
                globalVariableConditionals();
                fillGameBoard(gameSquare);
                // checkForWin();
                // checkForTriples();
                instructionTextModifier();
            }
        } 
        if(globalVariables.turn >=10){
            if(globalVariables.gameOver === true){
                instructionText.textContent = globalVariables.piece + " wins!"
            }else{
                gameOver();
            }
        }
    });
}

// Create game board for storing 'selected' spaces with correct piece
const gameBoard = (function () {
    const createGameBoard = [["", "", ""],["", "", ""],["", "", ""]];
    return createGameBoard;
})()

// Fills the clicked square with the appropriate game piece.
function fillGameBoard(square){
    for (let i = 0; i < gameBoard.length; i ++){
        for ( let j = 0; j < gameBoard.length; j++){
            if(!square.textContent){
                gameBoard[i][j] = `${globalVariables.piece}`;
                square.textContent = globalVariables.piece;
            }
        }
    }
    console.log(gameBoard)
}

// Modifies the text located below the gameboard
function instructionTextModifier(){
    instructionText.textContent = globalVariables.prompt;
}

// Lower turn back one turn and tell the user to make correct placement
function tryAgain(){
    globalVariables.turn +=0;
    instructionText.textContent = "Please make a valid space selection";
}

// if tie, no winner displayed
function gameOver(){
        instructionText.textContent = "No Winner";
    
}

// reset button reloads the page
function resetGameStatus(){
    resetButton.addEventListener("click", function(){
        window.location.reload();
    })
}

function checkForWin(){
    for (let i = 0; i < gameBoard.length; i ++){
        if (gameBoard[i][0] === globalVariables.piece){
            // console.log(gameBoard[i][0])
            console.log(gameBoard[i][1])
            if (gameBoard[i][1] === globalVariables.piece){
                console.log("test2")
                activePieceWins();
            }
        }
    }
}

function activePieceWins(){
    globalVariables.prompt = globalVariables.piece + " wins!";
    globalVariables.turn = 10;
    globalVariables.gameOver = true;
}

// Check for three in a row of same piece
function checkForTriples(){
    //check horizontally
    if (gameBoard[0][0].includes(globalVariables.piece) 
        && gameBoard[0][1].includes(globalVariables.piece)
        && gameBoard[0][2].includes(globalVariables.piece)){
        globalVariables.prompt = globalVariables.piece + " wins!";
        globalVariables.turn = 10;
        globalVariables.gameOver = true;

    }
    if (gameBoard[1][0].includes(globalVariables.piece) 
        && gameBoard[1][1].includes(globalVariables.piece)
        && gameBoard[1][2].includes(globalVariables.piece)){
        globalVariables.prompt = globalVariables.piece + " wins!";
        globalVariables.turn = 10;
        globalVariables.gameOver = true;
    }
    if (gameBoard[2][0].includes(globalVariables.piece) 
        && gameBoard[2][1].includes(globalVariables.piece)
        && gameBoard[2][2].includes(globalVariables.piece)){
        globalVariables.prompt = globalVariables.piece + " wins!";
        globalVariables.turn = 10;
        globalVariables.gameOver = true;
    }
    //check vertically
    if (gameBoard[0][0].includes(globalVariables.piece) 
        && gameBoard[1][0].includes(globalVariables.piece)
        && gameBoard[2][0].includes(globalVariables.piece)){
        globalVariables.prompt = globalVariables.piece + " wins!";
        globalVariables.turn = 10;
        globalVariables.gameOver = true;
    }
    if (gameBoard[0][1].includes(globalVariables.piece) 
        && gameBoard[1][1].includes(globalVariables.piece)
        && gameBoard[2][1].includes(globalVariables.piece)){
        globalVariables.prompt = globalVariables.piece + " wins!";
        globalVariables.turn = 10;
        globalVariables.gameOver = true;
    }
    if (gameBoard[0][2].includes(globalVariables.piece) 
        && gameBoard[1][2].includes(globalVariables.piece)
        && gameBoard[2][2].includes(globalVariables.piece)){
        globalVariables.prompt = globalVariables.piece + " wins!";
        globalVariables.turn = 10;
        globalVariables.gameOver = true;
    }
    // check diagonally
    if (gameBoard[0][0].includes(globalVariables.piece) 
        && gameBoard[1][1].includes(globalVariables.piece)
        && gameBoard[2][2].includes(globalVariables.piece)){
        globalVariables.prompt = globalVariables.piece + " wins!";
        globalVariables.turn = 10;
        globalVariables.gameOver = true;
    }
    if (gameBoard[0][2].includes(globalVariables.piece) 
        && gameBoard[1][1].includes(globalVariables.piece)
        && gameBoard[2][0].includes(globalVariables.piece)){
        globalVariables.prompt = globalVariables.piece + " wins!";
        globalVariables.turn = 10;
        globalVariables.gameOver = true;
    }

}