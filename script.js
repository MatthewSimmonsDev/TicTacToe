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
        changePromptToPiece(gameSquare);
        globalVariableConditionals();
        checkForTriples();
        // gameSquare.textContent = globalVariables.piece;
    });
}

function globalVariableConditionals(){
    if (globalVariables.turn % 2 !== 0){
        globalVariables.prompt = "X piece select an available location.";
        globalVariables.turn ++;
        globalVariables.piece = "O"
        globalVariables.paused = true;
        
    }
    else if (globalVariables.turn % 2 === 0){
        globalVariables.prompt = "O piece select an available location.";
        globalVariables.turn++
        globalVariables.piece = "X"
        globalVariables.paused = true;
        
    }
    
}

function instructionTextModifier(){
    instructionText.textContent = globalVariables.prompt;
}

// Main Game Logic Section

const globalVariables = {
    turn : 0,
    prompt : "",
    piece : "",
    locationArr : [],
    paused : false,
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
    if(prompt.textContent){
        
        tryAgain();
    }
    if (prompt.getAttribute("id") == "1"){
        if (globalVariables.locationArr.includes(prompt)){
            tryAgain();
        }else {
            gameBoard[0][0] = ` ${globalVariables.piece} `
        }
    }
    if (prompt.getAttribute("id") === "2"){
        if (globalVariables.locationArr.includes(prompt)){
            tryAgain();
        }else {
            gameBoard[0][1] = ` ${globalVariables.piece} `
        }
    }
    if (prompt.getAttribute("id") === "3"){
        if (globalVariables.locationArr.includes(prompt)){
            tryAgain();
        }else {
            gameBoard[0][2] = ` ${globalVariables.piece} `
        }
    }
    if (prompt.getAttribute("id") === "4"){
        if (globalVariables.locationArr.includes(prompt)){
            tryAgain();
        }else{
            gameBoard[1][0] = ` ${globalVariables.piece} `
        }
    }
    if (prompt.getAttribute("id") === "5"){
        if (globalVariables.locationArr.includes(prompt)){
            tryAgain();
        }else{
            gameBoard[1][1] = ` ${globalVariables.piece} `
        }
    }
    if (prompt.getAttribute("id") === "6"){
        if (globalVariables.locationArr.includes(prompt)){
            tryAgain();
        }else{
            gameBoard[1][2] = ` ${globalVariables.piece} `
        }
    }
    if (prompt.getAttribute("id") === "7"){
        if (globalVariables.locationArr.includes(prompt)){
            tryAgain();
        }
        gameBoard[2][0] = ` ${globalVariables.piece} `
    }
    if (prompt.getAttribute("id") === "8"){
        if (globalVariables.locationArr.includes(prompt)){
            tryAgain();
        }
        gameBoard[2][1] = ` ${globalVariables.piece} `
    }
    if (prompt.getAttribute("id") === "9"){
        if (globalVariables.locationArr.includes(prompt)){
            tryAgain();
        }
        gameBoard[2][2] = ` ${globalVariables.piece} `
    }
    globalVariables.locationArr.push(globalVariables.prompt)
    instructionTextModifier();
    prompt.textContent = globalVariables.piece;
    
    
}

// Lower turn back one and tell the user to make correct placement
function tryAgain(){
    globalVariables.turn --;
    console.log("Please choose a valid location");
}


// Check for three in a row of same piece
// Runs in the checkForEndgame function
function checkForTriples(){
    //check horizontally
    if (gameBoard[0][0].includes(globalVariables.piece) 
        && gameBoard[0][1].includes(globalVariables.piece)
        && gameBoard[0][2].includes(globalVariables.piece)){
        globalVariables.turn = 10;
    }
    if (gameBoard[1][0].includes(globalVariables.piece) 
        && gameBoard[1][1].includes(globalVariables.piece)
        && gameBoard[1][2].includes(globalVariables.piece)){
        console.log(globalVariables.piece + " wins!")
        globalVariables.turn = 10;
    }
    if (gameBoard[2][0].includes(globalVariables.piece) 
        && gameBoard[2][1].includes(globalVariables.piece)
        && gameBoard[2][2].includes(globalVariables.piece)){
        console.log(globalVariables.piece + " wins!")
        globalVariables.turn = 10;
    }
    //check vertically
    if (gameBoard[0][0].includes(globalVariables.piece) 
        && gameBoard[1][0].includes(globalVariables.piece)
        && gameBoard[2][0].includes(globalVariables.piece)){
        console.log(globalVariables.piece + " wins!")
        globalVariables.turn = 10;
    }
    if (gameBoard[1][0].includes(globalVariables.piece) 
        && gameBoard[1][1].includes(globalVariables.piece)
        && gameBoard[2][1].includes(globalVariables.piece)){
        console.log(globalVariables.piece + " wins!")
        globalVariables.turn = 10;
    }
    if (gameBoard[2][0].includes(globalVariables.piece) 
        && gameBoard[2][1].includes(globalVariables.piece)
        && gameBoard[2][2].includes(globalVariables.piece)){
        console.log(globalVariables.piece + " wins!")
        globalVariables.turn = 10;
    }
    // check diagonally
    if (gameBoard[0][0].includes(globalVariables.piece) 
        && gameBoard[1][1].includes(globalVariables.piece)
        && gameBoard[2][2].includes(globalVariables.piece)){
        console.log(globalVariables.piece + " wins!")
        globalVariables.turn = 10;
    }
    if (gameBoard[2][0].includes(globalVariables.piece) 
        && gameBoard[1][1].includes(globalVariables.piece)
        && gameBoard[2][0].includes(globalVariables.piece)){
        console.log(globalVariables.piece + " wins!")
        globalVariables.turn = 10;
    }
}


