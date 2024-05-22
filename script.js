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
            if(gameSquare.textContent){
                tryAgain();

            }else{
                globalVariableConditionals();
                changePromptToPiece(gameSquare);
                checkForTriples();
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



// Main Game Logic Section

const globalVariables = {
    turn : 0,
    prompt : "",
    piece : "",
    locationArr : [],
    gameOver: false,
}

// Create game board
const gameBoard = (function () {
    const createGameBoard = [[" ", " ", " "],[" ", " ", " "],[" ", " ", " "]];
    return createGameBoard;
})()

// Game logic
const domLogicController = (function (){
    globalVariableConditionals();
    createDomGameBoard();
    instructionTextModifier();
    
})()

// Console Functionality
function changePromptToPiece(prompt){
    
    if (prompt.getAttribute("id") == "1" ){
        if (prompt.textContent){
            tryAgain();
        }else{
            gameBoard[0][0] = ` ${globalVariables.piece} `
            prompt.textContent = globalVariables.piece;
        }
    }
    if (prompt.getAttribute("id") === "2"){
        if (prompt.textContent){
            tryAgain();
        }else {
            gameBoard[0][1] = ` ${globalVariables.piece} `
            prompt.textContent = globalVariables.piece;

        }
    }
    if (prompt.getAttribute("id") === "3"){
        if (prompt.textContent){
            tryAgain();
        }else {
            gameBoard[0][2] = ` ${globalVariables.piece} `
            prompt.textContent = globalVariables.piece;

        }
    }
    if (prompt.getAttribute("id") === "4"){
        if (prompt.textContent){
            tryAgain();
        }else{
            gameBoard[1][0] = ` ${globalVariables.piece} `
            prompt.textContent = globalVariables.piece;

        }
    }
    if (prompt.getAttribute("id") === "5"){
        if (prompt.textContent){
            tryAgain();
        }else{
            gameBoard[1][1] = ` ${globalVariables.piece} `
            prompt.textContent = globalVariables.piece;

        }
    }
    if (prompt.getAttribute("id") === "6"){
        if (prompt.textContent){
            tryAgain();
        }else{
            gameBoard[1][2] = ` ${globalVariables.piece} `
            prompt.textContent = globalVariables.piece;

        }
    }
    if (prompt.getAttribute("id") === "7"){
        if (prompt.textContent){
            tryAgain();
        }else{
            gameBoard[2][0] = ` ${globalVariables.piece} `
            prompt.textContent = globalVariables.piece;

        }
    }
    if (prompt.getAttribute("id") === "8"){
        if (prompt.textContent){
            tryAgain();
        }else{
            gameBoard[2][1] = ` ${globalVariables.piece} `
            prompt.textContent = globalVariables.piece;

        }
    }
    if (prompt.getAttribute("id") === "9"){
        if (prompt.textContent){
            tryAgain();
        }else{
            gameBoard[2][2] = ` ${globalVariables.piece} `
            prompt.textContent = globalVariables.piece;

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

// Check for three in a row of same piece
// Runs in the checkForEndgame function
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
    if (gameBoard[2][0].includes(globalVariables.piece) 
        && gameBoard[2][1].includes(globalVariables.piece)
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


