// Dom Logic Section
const gameBoardContainer = document.querySelector("#game-board-container");
const gameSquare = document.querySelectorAll(".game-square")
function createDomGameBoard(){
    const numberOfGameBoardSquares = 9;
    for (let i = 0; i < numberOfGameBoardSquares; i++){
        const gameSquare = document.createElement('div');
        gameBoardContainer.appendChild(gameSquare);
        gameSquare.setAttribute("id", "game-square-" + (i+1));
        gameSquare.setAttribute("class", "game-square");
        onClickPlacePiece();

    }
}

function onClickPlacePiece(){
    
    console.log("test")
}

createDomGameBoard();
// Main Game Logic Section

const globalVariables = {
    turn : 1,
    prompt : "",
    piece : "",
    locationArr : [],
}

// Create game board
const gameBoard = (function () {
    const createGameBoard = [[" ", " ", " "],[" ", " ", " "],[" ", " ", " "]];
    return createGameBoard;
})()

// Game logic
// const gameController = (function () {
//     while (globalVariables.turn < 10){
//         instructPlayerToPlacePiece();
//         changePromptToPiece(globalVariables.prompt);
//         console.log(gameBoard)
//         checkForEndgame();
//     }
    
// })()

function instructPlayerToPlacePiece(){
    if (globalVariables.turn % 2 === 1){
        globalVariables.prompt = window.prompt("X piece select an available location.");
        globalVariables.turn ++;
        globalVariables.piece = "X"
        1
    }
    else if (globalVariables.turn % 2 !== 1){
        globalVariables.prompt = window.prompt("O piece select an available location.");
        globalVariables.turn++
        globalVariables.piece = "O"
        
    }
    
}

function changePromptToPiece(prompt){
    if(prompt == ""){
        tryAgain();
    }
    if (prompt == "1"){
        if (globalVariables.locationArr.includes(prompt)){
            tryAgain();
        }else {
            gameBoard[0][0] = ` ${globalVariables.piece} `
        }
    }
    if (prompt === "2"){
        if (globalVariables.locationArr.includes(prompt)){
            tryAgain();
        }else {
            gameBoard[0][1] = ` ${globalVariables.piece} `
        }
    }
    if (prompt === "3"){
        if (globalVariables.locationArr.includes(prompt)){
            tryAgain();
        }else {
            gameBoard[0][2] = ` ${globalVariables.piece} `
        }
    }
    if (prompt === "4"){
        if (globalVariables.locationArr.includes(prompt)){
            tryAgain();
        }else{
            gameBoard[1][0] = ` ${globalVariables.piece} `
        }
    }
    if (prompt === "5"){
        if (globalVariables.locationArr.includes(prompt)){
            tryAgain();
        }else{
            gameBoard[1][1] = ` ${globalVariables.piece} `
        }
    }
    if (prompt === "6"){
        if (globalVariables.locationArr.includes(prompt)){
            tryAgain();
        }else{
            gameBoard[1][2] = ` ${globalVariables.piece} `
        }
    }
    if (prompt === "7"){
        if (globalVariables.locationArr.includes(prompt)){
            tryAgain();
        }
        gameBoard[2][0] = ` ${globalVariables.piece} `
    }
    if (prompt === "8"){
        if (globalVariables.locationArr.includes(prompt)){
            tryAgain();
        }
        gameBoard[2][1] = ` ${globalVariables.piece} `
    }
    if (prompt === "9"){
        if (globalVariables.locationArr.includes(prompt)){
            tryAgain();
        }
        gameBoard[2][2] = ` ${globalVariables.piece} `
    }
    
    globalVariables.locationArr.push(globalVariables.prompt)
}

// Lower turn back one and tell the user to make correct placement
function tryAgain(){
    globalVariables.turn --;
    console.log("Please choose a valid location");
}

function checkForCorrectPlacement(){
    if (locationArr.includes(globalVariables.prompt)){
        globalVariables.turn --;
        console.log("Try again");
    }
    locationArr.push(globalVariables.prompt)
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

function checkForEndgame(){
    checkForTriples();
    if (globalVariables.turn > 9) {
        console.log("Game Over");
        
    }
}

